/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeadacheReport = /* GraphQL */ `
  query GetHeadacheReport($id: ID!) {
    getHeadacheReport(id: $id) {
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
export const listHeadacheReports = /* GraphQL */ `
  query ListHeadacheReports(
    $filter: ModelHeadacheReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeadacheReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserSetting = /* GraphQL */ `
  query GetUserSetting($id: ID!) {
    getUserSetting(id: $id) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const listUserSettings = /* GraphQL */ `
  query ListUserSettings(
    $filter: ModelUserSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        defaultImpact
        template
        owner
      }
      nextToken
    }
  }
`;
export const headacheReportByOwner = /* GraphQL */ `
  query HeadacheReportByOwner(
    $owner: String
    $onsetDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHeadacheReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    headacheReportByOwner(
      owner: $owner
      onsetDate: $onsetDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
