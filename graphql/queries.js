import { gql } from "@apollo/client";

const LOGIN_USER=gql`
query login($email:String!,
    $password:String!
    ){
    login(email:$email,password:$password){
        userId
        token
        tokenExpiration
    }
}
`

export default LOGIN_USER;