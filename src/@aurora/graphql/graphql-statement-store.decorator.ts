import { GraphQLStatement } from '@horus/types/core.types';
import { GraphQLStatementService } from '@horus/services/graphql-statement.service';

export function GraphQLStatementStore(graphQLStatementArg: GraphQLStatement) 
{
    return function <T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        GraphQLStatementService.setGraphQLStatement(graphQLStatementArg);
        return class extends constructor 
        {
            graphQLStatement:GraphQLStatement = graphQLStatementArg;
        }
    }
}