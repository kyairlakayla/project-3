import { gql } from "@apollo/client";

export const GET_ME = gql`
{
    me{
        _id
        username
        email
        comments{
            _id
            createdAt
            commenttext
            recipeID
        }
    }
}
`