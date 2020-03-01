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
export const createUserSetting = /* GraphQL */ `
  mutation CreateUserSetting(
    $input: CreateUserSettingInput!
    $condition: ModelUserSettingConditionInput
  ) {
    createUserSetting(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const updateUserSetting = /* GraphQL */ `
  mutation UpdateUserSetting(
    $input: UpdateUserSettingInput!
    $condition: ModelUserSettingConditionInput
  ) {
    updateUserSetting(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const deleteUserSetting = /* GraphQL */ `
  mutation DeleteUserSetting(
    $input: DeleteUserSettingInput!
    $condition: ModelUserSettingConditionInput
  ) {
    deleteUserSetting(input: $input, condition: $condition) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
