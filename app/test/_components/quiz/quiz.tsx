'use client';

import styles from './quiz.module.css';

import { useMemo, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCountdown } from 'usehooks-ts';
import { redirect, useSearchParams } from 'next/navigation';
import { Question } from '@/types/quiz';

import { Progress, Title, Stack } from '@mantine/core';
import { createResultsModal } from '..';
import { shuffleArray } from '@/utils/shuffle-array';

import { Loading } from '@/components/loading/loading';
import { QuestionSection } from './question-section/question-section';
import { axiosClient } from '@/utils/axios';

const COUNT_DOWN_LENGTH = 30; // in seconds

export const Quiz: React.FC = () => {
	const params = useSearchParams();

	const userId = params.get('userId');
	const testId = params.get('testId');

	if (!userId || !testId) {
		redirect('/');
	}

	const [questions, setQuestions] = useState<Question[]>();
	const { isPending, error, data } = useQuery<Question[]>({
		queryKey: ['questions'],
		queryFn: () =>
			axiosClient
				.get(`/Quiz/GetQuestion?id=${testId}`)
				.then((res) => res.data),
	});

	const [userCorrectAnswers, setUserCorrectAnswers] = useState<number>(0);
	const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: COUNT_DOWN_LENGTH * 10,
			intervalMs: 100,
		});

	const nextQuestion = useCallback(
		(userAnswer: string) => {
			if (!questions) return;

			resetCountdown();
			startCountdown();

			if (userAnswer === questions[activeQuestionIndex].correctAnswer)
				setUserCorrectAnswers((prev) => prev + 1);

			if (activeQuestionIndex === questions.length - 1) {
				stopCountdown();

				createResultsModal(questions.length, userCorrectAnswers);
				return;
			}

			setActiveQuestionIndex((prev) => prev + 1);
		},
		[questions, activeQuestionIndex, userCorrectAnswers]
	);

	useEffect(() => {
		if (count === 0) nextQuestion('');
	}, [count, nextQuestion]);

	useEffect(() => {
		if (isPending || !data) return;

		setQuestions(data);
		resetCountdown();
		startCountdown();
	}, [isPending, data]);

	const activeQuestion = useMemo(() => {
		if (!questions) return;

		const { question, correctAnswer, answers } =
			questions[activeQuestionIndex];
		const shuffledAnswers = shuffleArray([correctAnswer, ...answers]);

		return {
			question,
			answers: shuffledAnswers,
		};
	}, [questions, activeQuestionIndex]);

	if (isPending || !questions || !activeQuestion) {
		return <Loading />;
	}

	if (error) {
		return <Title order={1}>Wystąpił nieoczekiwany błąd!</Title>;
	}

	return (
		<Stack align='center' h={'500'} mah={'100vh'} justify='space-between'>
			<Progress
				value={(10 / COUNT_DOWN_LENGTH) * count}
				size={'xl'}
				className={styles.progress}
				radius='0'
			/>

			<QuestionSection
				activeQuestionIndex={activeQuestionIndex}
				questionsCount={questions.length}
				activeQuestion={activeQuestion}
				nextQuestion={nextQuestion}
			/>
		</Stack>
	);
};
