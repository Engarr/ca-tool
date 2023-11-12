interface Validation {
  [key: string]: (value: any, allValues?: any) => string | null;
}

const userSurveyValidation: Validation = {
  name: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
  email: (value) =>
    /^\S+@\S+$/.test(value) ? null : 'Niepoprawny format adresu email',
  phone: (value) =>
    /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(value)
      ? null
      : 'Nieprawidłowy format numeru telefonu',
  birth: (value) => (value !== null ? null : 'Pole wymagane'),
  specialization: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
  occupation: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
  languagelevel: (value) => (value.trim() !== '' ? null : 'Pole wymagane'),
  practicesStart: (value, allValues) =>
    value !== null &&
    allValues.practicesEnd !== null &&
    value < allValues.practicesEnd
      ? null
      : 'Data rozpoczęcia praktyk nie może być późniejsza niż data zakończenia',
  practicesEnd: (value, allValues) =>
    value !== null &&
    allValues.practicesStart !== null &&
    value > allValues.practicesStart
      ? null
      : 'Data zakończenia praktyk nie może być wcześneijsza niż data zakończenia',
};

export default userSurveyValidation;
