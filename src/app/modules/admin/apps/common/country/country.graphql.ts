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
    dataLang
    createdAt
    updatedAt
`;

const relationsFields = '';

export const graphQL: GraphQLStatements = {
    fields,
    relationsFields,

    queryPagination: gql`
        query CommonPaginateCountries ($query:QueryStatement) {
            pagination: commonPaginateCountries (query:$query) {
                total
                rows
                count
            }
        }
    `,

    queryObjectRelations: null,

    queryObjects: gql`
        query CommonGetCountries ($query:QueryStatement) {
            objects: commonGetCountries (query:$query) {
                ${fields}
            }
            ${relationsFields}
        }
    `,

    queryObject: gql`
        query CommonFindCountry ($query:QueryStatement) {
            object: commonFindCountry (query:$query) {
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
