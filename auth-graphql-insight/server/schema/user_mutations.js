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
        },
        login: {
            type: UserType,
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {email, password}, req){
                return userService.login({email, password, req})
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req){
                const {user} = req;
                req.logOut();

                return user;
            }
        }
    }
});

module.exports = mutation;