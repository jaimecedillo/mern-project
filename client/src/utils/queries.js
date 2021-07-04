import gql from 'graphql-tag';

export const QUERY_CATEGORIES = gql`
{
    categories {
        _id
        name
    }
}
`;

export const QUERY_USER = gql`
{
    user {
        firstName
        lastName
    }
}
`;

export const QUERY_CONTRACTOR = gql`
{
    contractor {
        firstName
        lastName
        workType
    }
}
`;