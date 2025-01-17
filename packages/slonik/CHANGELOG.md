# slonik

## 44.0.0

### Major Changes

- [`96db9f0`](https://github.com/gajus/slonik/commit/96db9f08faefb0e7da0cc0d817d9e8fae361e590) Thanks [@gajus](https://github.com/gajus)! - Convert token types to symbols to ensures that SQL tokens cannot be injected from outside of the codebase, e.g. through JSON.

  Thanks to @alxndrsn for reporting the issue and suggesting patch (https://github.com/gajus/slonik/pull/595).

  Thanks to @danielrearden for suggesting a viable patch.

### Patch Changes

- Updated dependencies [[`96db9f0`](https://github.com/gajus/slonik/commit/96db9f08faefb0e7da0cc0d817d9e8fae361e590)]:
  - @slonik/sql-tag@44.0.0
  - @slonik/pg-driver@44.0.0
  - @slonik/driver@44.0.0
  - @slonik/errors@44.0.0
  - @slonik/utilities@44.0.0

## 43.0.8

### Patch Changes

- [`30f1dc4`](https://github.com/gajus/slonik/commit/30f1dc4469fe6065f90651c2e1c501d5374358c7) Thanks [@gajus](https://github.com/gajus)! - remove exports

- Updated dependencies [[`30f1dc4`](https://github.com/gajus/slonik/commit/30f1dc4469fe6065f90651c2e1c501d5374358c7)]:
  - @slonik/driver@43.0.8
  - @slonik/errors@43.0.8
  - @slonik/pg-driver@43.0.8
  - @slonik/sql-tag@43.0.8
  - @slonik/utilities@43.0.8

## 43.0.7

### Patch Changes

- [`dba5be1`](https://github.com/gajus/slonik/commit/dba5be1b34868059c3f64a8dc44e48703625a3b9) Thanks [@gajus](https://github.com/gajus)! - corrects exports; adds more logging about pool state

- Updated dependencies [[`dba5be1`](https://github.com/gajus/slonik/commit/dba5be1b34868059c3f64a8dc44e48703625a3b9)]:
  - @slonik/driver@43.0.7
  - @slonik/errors@43.0.7
  - @slonik/pg-driver@43.0.7
  - @slonik/sql-tag@43.0.7
  - @slonik/utilities@43.0.7

## 43.0.6

### Patch Changes

- [#591](https://github.com/gajus/slonik/pull/591) [`30e89a6`](https://github.com/gajus/slonik/commit/30e89a6f2ab1fc8f9d010bb0157ce41aa4da80e8) Thanks [@gajus](https://github.com/gajus)! - split driver into a separate package

- [#591](https://github.com/gajus/slonik/pull/591) [`30e89a6`](https://github.com/gajus/slonik/commit/30e89a6f2ab1fc8f9d010bb0157ce41aa4da80e8) Thanks [@gajus](https://github.com/gajus)! - add slonik-interceptor-query-cache to monorepo

- Updated dependencies [[`30e89a6`](https://github.com/gajus/slonik/commit/30e89a6f2ab1fc8f9d010bb0157ce41aa4da80e8), [`30e89a6`](https://github.com/gajus/slonik/commit/30e89a6f2ab1fc8f9d010bb0157ce41aa4da80e8)]:
  - @slonik/pg-driver@43.0.6
  - @slonik/utilities@43.0.6
  - @slonik/sql-tag@43.0.6
  - @slonik/driver@43.0.6
  - @slonik/errors@43.0.6

## 43.0.5

### Patch Changes

- [`d1958fd`](https://github.com/gajus/slonik/commit/d1958fd6acfcd48cc4148811106b63daf28b52a8) Thanks [@gajus](https://github.com/gajus)! - log how long it took to acquire a connection

- Updated dependencies [[`d1958fd`](https://github.com/gajus/slonik/commit/d1958fd6acfcd48cc4148811106b63daf28b52a8)]:
  - @slonik/errors@43.0.5
  - @slonik/sql-tag@43.0.5

## 43.0.4

### Patch Changes

- [`d0d9a82`](https://github.com/gajus/slonik/commit/d0d9a82dee0980c4768d74e90e20491ada126816) Thanks [@gajus](https://github.com/gajus)! - use $slonik\_ bindings

- Updated dependencies [[`d0d9a82`](https://github.com/gajus/slonik/commit/d0d9a82dee0980c4768d74e90e20491ada126816)]:
  - @slonik/errors@43.0.4
  - @slonik/sql-tag@43.0.4

## 43.0.3

### Patch Changes

- [`c9e261d`](https://github.com/gajus/slonik/commit/c9e261d8af6490ad84b450b6e4b598f662d92203) Thanks [@gajus](https://github.com/gajus)! - log when connection pool is full

- [`0f072df`](https://github.com/gajus/slonik/commit/0f072df5f3796fc2571c0e5e81405a36000ab9ec) Thanks [@gajus](https://github.com/gajus)! - drop ambiguous SqlFragment member

- Updated dependencies [[`0f072df`](https://github.com/gajus/slonik/commit/0f072df5f3796fc2571c0e5e81405a36000ab9ec)]:
  - @slonik/sql-tag@43.0.3
  - @slonik/errors@43.0.3

## 43.0.2

### Patch Changes

- Updated dependencies [[`a28e8ac`](https://github.com/gajus/slonik/commit/a28e8ac7325e24b2c27c05f22b597dbd1898049b)]:
  - @slonik/sql-tag@43.0.2
  - @slonik/errors@43.0.2

## 43.0.1

### Patch Changes

- [`146a301`](https://github.com/gajus/slonik/commit/146a3011b6b9cbd1a3a5dbc7ce3a13d9cc6bb2ae) Thanks [@gajus](https://github.com/gajus)! - add missing type exports

- Updated dependencies [[`146a301`](https://github.com/gajus/slonik/commit/146a3011b6b9cbd1a3a5dbc7ce3a13d9cc6bb2ae)]:
  - @slonik/errors@43.0.1
  - @slonik/sql-tag@43.0.1

## 43.0.0

### Minor Changes

- [`8c58884`](https://github.com/gajus/slonik/commit/8c588849338dbc626d661a04af9f162a791f3e31) Thanks [@gajus](https://github.com/gajus)! - force version bump

### Patch Changes

- [`cb257c5`](https://github.com/gajus/slonik/commit/cb257c55a72ce82364ce1e3bf787e4cc2a517989) Thanks [@gajus](https://github.com/gajus)! - correct createSqlTokenSqlFragment export

- Updated dependencies [[`cb257c5`](https://github.com/gajus/slonik/commit/cb257c55a72ce82364ce1e3bf787e4cc2a517989), [`8c58884`](https://github.com/gajus/slonik/commit/8c588849338dbc626d661a04af9f162a791f3e31)]:
  - @slonik/errors@43.0.0
  - @slonik/sql-tag@43.0.0

## 42.0.0

### Minor Changes

- [`fb83bd9`](https://github.com/gajus/slonik/commit/fb83bd900b85b5e672db49694a8171b9296c252c) Thanks [@gajus](https://github.com/gajus)! - force update version

### Patch Changes

- Updated dependencies [[`fb83bd9`](https://github.com/gajus/slonik/commit/fb83bd900b85b5e672db49694a8171b9296c252c)]:
  - @slonik/sql-tag@41.3.0
  - @slonik/errors@41.3.0

## 40.2.5

### Patch Changes

- [`ef802a9`](https://github.com/gajus/slonik/commit/ef802a91be2bc6e69b077c544cc7f9e5a2687433) Thanks [@gajus](https://github.com/gajus)! - force patch bump

- Updated dependencies [[`ef802a9`](https://github.com/gajus/slonik/commit/ef802a91be2bc6e69b077c544cc7f9e5a2687433)]:
  - @slonik/errors@40.2.5
  - @slonik/sql-tag@40.2.5

## 40.2.4

### Patch Changes

- [`c1064fc`](https://github.com/gajus/slonik/commit/c1064fc3f21f839effc1687737942332a7c05b0d) Thanks [@gajus](https://github.com/gajus)! - update access

- Updated dependencies [[`c1064fc`](https://github.com/gajus/slonik/commit/c1064fc3f21f839effc1687737942332a7c05b0d)]:
  - @slonik/errors@40.2.4
  - @slonik/sql-tag@40.2.4

## 40.2.3

### Patch Changes

- [#577](https://github.com/gajus/slonik/pull/577) [`4007ab7`](https://github.com/gajus/slonik/commit/4007ab7e07d5b71e8f41e145584979fa36885275) Thanks [@gajus](https://github.com/gajus)! - abstract packages using internal modules

- [#579](https://github.com/gajus/slonik/pull/579) [`2779fd1`](https://github.com/gajus/slonik/commit/2779fd15ddae35b9830f4c156648e444cd793f13) Thanks [@gajus](https://github.com/gajus)! - add slonik-sql-tag-raw

- Updated dependencies [[`4007ab7`](https://github.com/gajus/slonik/commit/4007ab7e07d5b71e8f41e145584979fa36885275), [`2779fd1`](https://github.com/gajus/slonik/commit/2779fd15ddae35b9830f4c156648e444cd793f13)]:
  - @slonik/sql-tag@40.2.3
  - @slonik/errors@40.2.3

## 40.2.2

### Patch Changes

- [`caf2b5e`](https://github.com/gajus/slonik/commit/caf2b5e7b03d2cf1bfe76201cde1e44c15589601) Thanks [@gajus](https://github.com/gajus)! - Add README.md

## 0.0.0

### Patch Changes

- [#572](https://github.com/gajus/slonik/pull/572) [`d69a83d`](https://github.com/gajus/slonik/commit/d69a83d379dfa5ac68226717dfcbe617bbd041f1) Thanks [@gajus](https://github.com/gajus)! - migrate from semantic-release to changeset
