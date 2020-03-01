/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHeadacheReport = /* GraphQL */ `
  mutation CreateHeadacheReport(
    $input: CreateHeadacheReportInput!
    $condition: ModelHeadacheReportConditionInput
  ) {
    createHeadacheReport(input: $input, condition: $condition) {
      id
      onsetDate
      onsetTime
      curedDate
      curedTime
      impact
      memo
      prodrome
      owner
    }
  }
`;
export const updateHeadacheReport = /* GraphQL */ `
  mutation UpdateHeadacheReport(
    $input: UpdateHeadacheReportInput!
    $condition: ModelHeadacheReportConditionInput
  ) {
    updateHeadacheReport(input: $input, condition: $condition) {
      id
      onsetDate
      onsetTime
      curedDate
      curedTime
      impact
      memo
      prodrome
      owner
    }
  }
`;
export const deleteHeadacheReport = /* GraphQL */ `
  mutation DeleteHeadacheReport(
    $input: DeleteHeadacheReportInput!
    $condition: ModelHeadacheReportConditionInput
  ) {
    deleteHeadacheReport(input: $input, condition: $condition) {
      id
      onsetDate
      onsetTime
      curedDate
      curedTime
      impact
      memo
      prodrome
      owner
    }
  }
`;
export const createUserSettings = /* GraphQL */ `
  mutation CreateUserSettings(
    $input: CreateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    createUserSettings(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const updateUserSettings = /* GraphQL */ `
  mutation UpdateUserSettings(
    $input: UpdateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    updateUserSettings(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const deleteUserSettings = /* GraphQL */ `
  mutation DeleteUserSettings(
    $input: DeleteUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    deleteUserSettings(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
