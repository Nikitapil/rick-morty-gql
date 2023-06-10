/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetCharacters($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        pages\n      }\n    }\n  }\n':
    types.GetCharactersDocument,
  '\n  query GetCharacter($id: ID!) {\n    character(id: $id) {\n      name\n      status\n      species\n      gender\n      image\n      origin {\n        id\n        name\n      }\n      episode {\n        id\n        name\n      }\n    }\n  }\n':
    types.GetCharacterDocument,
  '\n  query GetEpisodes($page: Int, $name: String) {\n    episodes(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n':
    types.GetEpisodesDocument,
  '\n  query GetLocations($page: Int, $name: String) {\n    locations(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n':
    types.GetLocationsDocument,
  '\n  query GetLocation($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        image\n      }\n    }\n  }\n':
    types.GetLocationDocument,
  '\n  query getMainCharacters {\n    charactersByIds(ids: [1, 2, 3, 4, 5]) {\n      id\n      name\n      image\n    }\n  }\n':
    types.GetMainCharactersDocument
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCharacters($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        pages\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetCharacters($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        pages\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCharacter($id: ID!) {\n    character(id: $id) {\n      name\n      status\n      species\n      gender\n      image\n      origin {\n        id\n        name\n      }\n      episode {\n        id\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetCharacter($id: ID!) {\n    character(id: $id) {\n      name\n      status\n      species\n      gender\n      image\n      origin {\n        id\n        name\n      }\n      episode {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetEpisodes($page: Int, $name: String) {\n    episodes(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetEpisodes($page: Int, $name: String) {\n    episodes(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetLocations($page: Int, $name: String) {\n    locations(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetLocations($page: Int, $name: String) {\n    locations(page: $page, filter: { name: $name }) {\n      results {\n        id\n        name\n      }\n      info {\n        pages\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetLocation($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        image\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetLocation($id: ID!) {\n    location(id: $id) {\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        image\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getMainCharacters {\n    charactersByIds(ids: [1, 2, 3, 4, 5]) {\n      id\n      name\n      image\n    }\n  }\n'
): (typeof documents)['\n  query getMainCharacters {\n    charactersByIds(ids: [1, 2, 3, 4, 5]) {\n      id\n      name\n      image\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
