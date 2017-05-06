const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;
const UserType = require('./types/user_type');
const userService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        sigup: {
            type: UserType,
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {email, password}, req){
                return userService.signup({email, password, req});
            }
        }
    }
});

module.exports = mutation;