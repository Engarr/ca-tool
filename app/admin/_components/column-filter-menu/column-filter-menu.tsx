import React from 'react';
import { Box, Group, Select, Text, Collapse, Flex } from '@mantine/core';
import classes from './column-filter-menu.module.css';
import { useDisclosure } from '@mantine/hooks';
import {
	IconArrowBadgeDown,
	IconArrowBadgeUp,
	IconX,
} from '@tabler/icons-react';

type ColumnFilterMenu = {
	sortFilterValues: {
		sortValue: string | null;
		filterValue: string | null;
	};
	setSortFilterValue: React.Dispatch<
		React.SetStateAction<{
			sortValue: string | null;
			filterValue: string | null;
		}>
	>;
};

const ColumnFilterMenu = ({
	sortFilterValues,
	setSortFilterValue,
}: ColumnFilterMenu) => {
	const [opened, { toggle }] = useDisclosure(false);
	return (
		<Box mr={15}>
			<Group justify='end' mb={10} onClick={toggle}>
				<Text size='xs' fw={500} className={classes.filterText}>
					Pokaż filtry
				</Text>
				{opened ? (
					<Box className={classes.arrowIconBox}>
						<IconArrowBadgeUp stroke={1.5} size={18} />
					</Box>
				) : (
					<Box className={classes.arrowIconBox}>
						<IconArrowBadgeDown stroke={1.5} size={18} />
					</Box>
				)}
			</Group>
			{(sortFilterValues.filterValue || sortFilterValues.sortValue) &&
				!opened && (
					<Flex align='center' mb={5}>
						<Text
							size='xs'
							fw={500}
							className={classes.filterMethod}
						>
							{`${sortFilterValues.sortValue},
                    ${sortFilterValues.filterValue}`}
						</Text>
						<IconX
							className={classes.cleanFilersIcon}
							size={20}
							onClick={() => {
								setSortFilterValue({
									sortValue: null,
									filterValue: null,
								});
							}}
						/>
					</Flex>
				)}
			<Collapse pb={10} pl={10} in={opened}>
				<Select
					onChange={(e) => {
						if (e) {
							setSortFilterValue((prev) => {
								return {
									...prev,
									sortValue: e,
								};
							});
						}
					}}
					mb={'xs'}
					placeholder='Wybierz opcję'
					label='Sortuj według'
					checkIconPosition='right'
					data={[
						'Od najniższej rangi',
						'Od najwyższej rangi',
						'Alfabetycznie po nazwisku',
					]}
					value={sortFilterValues.sortValue}
				/>
				<Select
					onChange={(e) => {
						if (e) {
							setSortFilterValue((prev) => {
								return {
									...prev,
									filterValue: e,
								};
							});
						}
					}}
					placeholder='Wybierz opcję'
					label='Filtruj specjalizacje'
					checkIconPosition='right'
					value={sortFilterValues.filterValue}
					data={['Frontend', 'Backend', 'Inne', 'Wszystkie']}
				/>
			</Collapse>
		</Box>
	);
};

export default ColumnFilterMenu;
