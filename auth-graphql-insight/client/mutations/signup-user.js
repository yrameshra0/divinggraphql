import gql from 'graphql-tag'

export default gql`
mutation Signup($email: String!, $password: String!) {
  sigup(email: $email, password: $password) {
    email
    id
  }
}
`;
