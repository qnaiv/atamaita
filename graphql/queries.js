/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeadacheReport = /* GraphQL */ `
  query GetHeadacheReport($id: ID!) {
    getHeadacheReport(id: $id) {
      id
      onsetDate
      onsetTime
      impact
      duration
      memo
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
        impact
        duration
        memo
        owner
      }
      nextToken
    }
  }
`;
