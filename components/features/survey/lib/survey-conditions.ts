export const getSpecializationGroup = (specialization: string) => {
  const specializationGroup =
    specialization === 'react' || specialization === 'react native'
      ? 'frontend'
      : specialization === '.net' || specialization === 'node.js'
      ? 'backend'
      : specialization === 'ui/ux' ||
        specialization === 'grafika' ||
        specialization === 'marketing' ||
        specialization === 'pm' ||
        specialization === 'copywriting'
      ? 'other'
      : '';
  return specializationGroup;
};
export const getGraphicSpecialization = (specialization: string) => {
  const graphicSpecialization =
    specialization === 'grafika' || specialization === 'ui/ux';
  return graphicSpecialization;
};
export const getShouldShowPracticesDataPicker = (
  goalOfAcademyParticipation: string
) => {
  const shouldShowPracticesDataPicker =
    goalOfAcademyParticipation === 'praktyki';
  return shouldShowPracticesDataPicker;
};
