import gql from "graphql-tag"

export const LOGIN = gql`
    mutation login($email:String!, $password:String!){
        login(email:$email, password:$password){
            token 
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_CONTRACTOR = gql`
    mutation addContractor($firstName: String!, $lastName: String!, $email: String!, $password: String!, $workType: String!) {
        addContractor(firstName: $firstName, lastName: $lastName, email: $email, password: $password, workType: $workType) {
            token
            contractor {
                _id
            }
        }
    }
`;