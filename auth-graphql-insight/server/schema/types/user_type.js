const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        email: {type: GraphQLString}
    }
});

module.exports = UserType;