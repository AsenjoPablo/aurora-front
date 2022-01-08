import gql from 'graphql-tag';
import { GraphQLStatements } from '@aurora';

const fields = `
    id
    name
    image
    iso6392
    iso6393
    ietf
    customCode
    dir
    sort
    isActive
    createdAt
    updatedAt
`;

const relationsFields = '';

export const graphQL: GraphQLStatements = {
    fields,
    relationsFields,

    queryObjectPagination: gql`
        query CommonPaginateLangs ($query:QueryStatement) {
            corePagination: commonPaginateLangs (query:$query) {
                total
                rows
                count
            }
        }
    `,

    queryObjectRelations: null,

    queryObjects: gql`
        query CommonGetLangs ($query:QueryStatement) {
            coreObjects: commonGetLangs (query:$query) {
                ${fields}
            }
            ${relationsFields}
        }
    `,

    queryObject: gql`
        query CommonFindLang ($query:QueryStatement) {
            coreObject: commonFindLang (query:$query) {
                ${fields}
            }
            ${relationsFields}
        }
    `,

    mutationCreateObject: gql`
        mutation CommonCreateLang ($payload:CommonCreateLangInput!) {
            commonCreateLang (payload:$payload) {
                ${fields}
            }
        }
    `,

    mutationUpdateObject: gql`
        mutation CommonUpdateLang ($payload:CommonUpdateLangInput!) {
            commonUpdateLang (payload:$payload) {
                ${fields}
            }
        }
    `,

    mutationDeleteObject: gql`
        mutation CommonDeleteLang ($id:ID!) {
            commonDeleteLang (id:$id) {
                ${fields}
            }
        }
    `
};
