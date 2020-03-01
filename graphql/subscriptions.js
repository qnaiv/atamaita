/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHeadacheReport = /* GraphQL */ `
  subscription OnCreateHeadacheReport($owner: String!) {
    onCreateHeadacheReport(owner: $owner) {
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
export const onUpdateHeadacheReport = /* GraphQL */ `
  subscription OnUpdateHeadacheReport($owner: String!) {
    onUpdateHeadacheReport(owner: $owner) {
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
export const onDeleteHeadacheReport = /* GraphQL */ `
  subscription OnDeleteHeadacheReport($owner: String!) {
    onDeleteHeadacheReport(owner: $owner) {
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
export const onCreateUserSetting = /* GraphQL */ `
  subscription OnCreateUserSetting($owner: String!) {
    onCreateUserSetting(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const onUpdateUserSetting = /* GraphQL */ `
  subscription OnUpdateUserSetting($owner: String!) {
    onUpdateUserSetting(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
export const onDeleteUserSetting = /* GraphQL */ `
  subscription OnDeleteUserSetting($owner: String!) {
    onDeleteUserSetting(owner: $owner) {
      id
      defaultImpact
      template
      owner
    }
  }
`;
