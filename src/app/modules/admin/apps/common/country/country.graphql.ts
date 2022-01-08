import gql from 'graphql-tag';
import { GraphQLStatements } from '@aurora';

const fields = `
    id
    langId
    name
    slug
    iso3166Alpha2
    iso3166Alpha3
    iso3166Numeric
    customCode
    image
    prefix
    image
    sort
    administrativeAreas
    latitude
    longitude
    zoom
    administrativeAreaLevel1
    administrativeAreaLevel2
    administrativeAreaLevel3
    dataCountry
    createdAt
    updatedAt
`;

const relationsFields = '';

export const graphQL: GraphQLStatements = {
    fields,
    relationsFields,

    queryObjectPagination: gql`
        query CommonPaginateCountries ($query:QueryStatement) {
            corePagination: commonPaginateCountries (query:$query) {
                total
                rows
                count
            }
        }
    `,

    queryObjectRelations: null,

    queryObjects: gql`
        query CommonGetCountries ($query:QueryStatement) {
            coreObjects: commonGetCountries (query:$query) {
                ${fields}
            }
            ${relationsFields}
        }
    `,

    queryObject: gql`
        query CommonFindCountry ($query:QueryStatement) {
            coreObject: commonFindCountry (query:$query) {
                ${fields}
            }
            ${relationsFields}
        }
    `,

    mutationCreateObject: gql`
        mutation CommonCreateCountry ($payload:CommonCreateCountryInput!) {
            commonCreateCountry (payload:$payload) {
                ${fields}
            }
        }
    `,

    mutationUpdateObject: gql`
        mutation CommonUpdateCountry ($payload:CommonUpdateCountryInput!) {
            commonUpdateCountry (payload:$payload) {
                ${fields}
            }
        }
    `,

    mutationDeleteObject: gql`
        mutation CommonDeleteCountry ($id:ID!) {
            commonDeleteCountry (id:$id) {
                ${fields}
            }
        }
    `
};
