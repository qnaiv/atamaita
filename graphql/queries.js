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
export const getUserSettings = /* GraphQL */ `
  query GetUserSettings($id: ID!) {
    getUserSettings(id: $id) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const listUserSettingss = /* GraphQL */ `
  query ListUserSettingss(
    $filter: ModelUserSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
