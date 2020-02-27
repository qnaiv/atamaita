/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHeadacheReport = /* GraphQL */ `
  subscription OnCreateHeadacheReport($owner: String!) {
    onCreateHeadacheReport(owner: $owner) {
      id
      onsetDate
      onsetTime
      impact
      duration
      memo
      prodrome
      owner
    }
  }
`;
export const onUpdateHeadacheReport = /* GraphQL */ `
  subscription OnUpdateHeadacheReport($owner: String!) {
    onUpdateHeadacheReport(owner: $owner) {
      id
      onsetDate
      onsetTime
      impact
      duration
      memo
      prodrome
      owner
    }
  }
`;
export const onDeleteHeadacheReport = /* GraphQL */ `
  subscription OnDeleteHeadacheReport($owner: String!) {
    onDeleteHeadacheReport(owner: $owner) {
      id
      onsetDate
      onsetTime
      impact
      duration
      memo
      prodrome
      owner
    }
  }
`;
export const onCreateUserSettings = /* GraphQL */ `
  subscription OnCreateUserSettings($owner: String!) {
    onCreateUserSettings(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const onUpdateUserSettings = /* GraphQL */ `
  subscription OnUpdateUserSettings($owner: String!) {
    onUpdateUserSettings(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const onDeleteUserSettings = /* GraphQL */ `
  subscription OnDeleteUserSettings($owner: String!) {
    onDeleteUserSettings(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
