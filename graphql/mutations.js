/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHeadacheReport = /* GraphQL */ `
  mutation CreateHeadacheReport(
    $input: CreateHeadacheReportInput!
    $condition: ModelHeadacheReportConditionInput
  ) {
    createHeadacheReport(input: $input, condition: $condition) {
      id
      userId
      onsetDate
      onsetTime
      impact
      duration
      memo
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
      userId
      onsetDate
      onsetTime
      impact
      duration
      memo
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
      userId
      onsetDate
      onsetTime
      impact
      duration
      memo
    }
  }
`;
