import {
  createSqlTag,
} from './factories';

export const sql = createSqlTag();

export type {
  ArraySqlToken,
  BinarySqlToken,
  ClientConfiguration,
  ClientConfigurationInput,
  CommonQueryMethods,
  Connection,
  ConnectionOptions,
  DatabaseConnection,
  DatabasePool,
  DatabasePoolConnection,
  DatabaseTransactionConnection,
  Field,
  IdentifierNormalizer,
  IdentifierSqlToken,
  Interceptor,
  JsonBinarySqlToken,
  JsonSqlToken,
  ListSqlToken,
  MockPoolOverrides,
  PoolContext,
  Query,
  QueryContext,
  QueryResult,
  QueryResultRow,
  QueryResultRowColumn,
  SerializableValue,
  SqlSqlToken,
  SqlTaggedTemplate,
  SqlToken,
  TaggedTemplateLiteralInvocation,
  TypeNameIdentifier,
  TypeParser,
  UnnestSqlToken,
  ValueExpression,
} from './types';
export {
  createMockPool,
  createMockQueryResult,
  createPool,
  createSqlTag,
  createSqlTokenSqlFragment,
  createTypeParserPreset,
} from './factories';
export {
  isSqlToken,
  parseDsn,
  stringifyDsn,
} from './utilities';
export * from './factories/typeParsers';
export {
  BackendTerminatedError,
  CheckIntegrityConstraintViolationError,
  ConnectionError,
  DataIntegrityError,
  ForeignKeyIntegrityConstraintViolationError,
  IntegrityConstraintViolationError,
  InvalidConfigurationError,
  InvalidInputError,
  NotFoundError,
  NotNullIntegrityConstraintViolationError,
  SlonikError,
  StatementCancelledError,
  StatementTimeoutError,
  UnexpectedStateError,
  UniqueIntegrityConstraintViolationError,
  TupleMovedToAnotherPartitionError,
} from './errors';
