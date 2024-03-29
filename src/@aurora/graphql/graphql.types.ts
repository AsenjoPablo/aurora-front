import { DocumentNode } from 'graphql';

export interface GraphQLStatements
{
    fields: string;
    relationsFields?: string
    queryObjectPagination?: DocumentNode;
    queryObjectRelations?: DocumentNode;
    queryObjects?: DocumentNode;
    queryObject?: DocumentNode;
    mutationCreateObject?: DocumentNode;
    mutationUpdateObject?: DocumentNode;
    mutationDeleteObject?: DocumentNode;
}