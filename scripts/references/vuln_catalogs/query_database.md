# Vulnerability Catalog: Query and Database Languages

Applies to: SQL (all dialects), GraphQL, Cypher, SPARQL, CQL, Gremlin,
XQuery, XPath, LINQ, Datalog, HiveQL, KQL, PromQL, Flux

## SQL Injection

SQL injection occurs when untrusted input is concatenated into SQL queries,
allowing attackers to modify query logic, extract data, or execute commands.

Root causes: String concatenation or interpolation in SQL queries, dynamic
query construction, stored procedures with dynamic SQL, ORM misuse (raw queries
with string formatting), batch query concatenation.

Detection: Static analysis (SQLMap for dynamic testing, Semgrep, CodeQL),
WAF rules, database query logging, manual testing.

Remediation: Use parameterized queries and prepared statements exclusively.
Never concatenate user input into SQL. Use ORM query builders that
parameterize automatically. Validate and whitelist input types before
query construction. Use least-privilege database accounts. Enable query
logging for anomaly detection.

For all SQL dialects:
- MySQL: Use mysqli_prepare or PDO with parameter binding
- PostgreSQL: Use PQexecParams or prepared statements
- SQL Server: Use SqlCommand with parameters
- SQLite: Use sqlite3_bind_*
- Oracle: Use bind variables with OCI or JDBC

## Privilege Misuse

Excessive database privileges allow attackers to escalate impact after
compromise.

Root causes: Applications connecting as database superusers, missing row-level
security, shared credentials across services, lack of principle of least
privilege.

Remediation: Create dedicated database users with minimal required permissions.
Use row-level security (RLS) policies. Separate read-only and write accounts.
Audit privilege grants regularly. Use database roles aligned with application
functions.

## Unsafe Dynamic Queries

Dynamic SQL constructed at runtime without proper safeguards.

Root causes: Query builders that accept raw strings, stored procedures with
EXEC or sp_executesql on concatenated strings, report generators with dynamic
WHERE clauses, search functionality with raw SQL.

Remediation: Use query builders that maintain parameterization (jOOQ, QueryDSL,
Entity Framework, SQLAlchemy). If dynamic SQL is necessary, use whitelisting
for column names and operators. Never allow user-controlled table or column
names without strict validation.

## GraphQL Injection

GraphQL's flexible query structure can be abused for injection and
introspection-based attacks.

Root causes: Missing query depth limiting, missing complexity analysis,
introspection enabled in production, resolver functions with injection flaws,
missing authorization on fields.

Remediation: Disable introspection in production. Implement query depth and
complexity limits. Validate all resolver inputs. Apply authorization at the
field level. Use persisted queries for production. Sanitize all arguments
passed to underlying data sources.

## NoSQL Injection

Document databases can be injected through object manipulation.

Root causes: Passing user objects directly to query filters, JavaScript
injection in MongoDB $where, unvalidated keys in query objects.

Remediation: Use parameterized queries with typed drivers. Validate all query
parameters against schemas. Sanitize keys in query objects. Avoid $where and
JavaScript execution in MongoDB. Use the principle of least privilege for
database users.

## Cypher Injection

Neo4j's Cypher query language is susceptible to injection similar to SQL.

Root causes: String concatenation in Cypher queries, unvalidated parameters
in MATCH and WHERE clauses.

Remediation: Use parameterized Cypher queries. Validate node labels and
relationship types against allow-lists. Sanitize all property values.

## XPath Injection

XPath queries with untrusted input can access unauthorized XML nodes.

Root causes: Concatenating user input into XPath expressions, missing input
validation, using XPath for XML search without parameterization.

Remediation: Use parameterized XPath queries where supported. Validate and
escape all input. Use allow-lists for XPath functions. Consider using safer
alternatives like XQuery with prepared statements.

## LINQ Injection

Dynamic LINQ queries can be injected if not properly parameterized.

Root causes: String-based LINQ queries (Dynamic LINQ), raw SQL in Entity
Framework, unvalidated filter expressions.

Remediation: Use strongly-typed LINQ expressions. Avoid Dynamic LINQ with user
input. Use EF Core parameterized queries. Validate all filter expressions
against allow-lists.

## Data Exposure in Queries

Overly broad queries expose more data than necessary.

Root causes: SELECT * without filtering, missing pagination limits, missing
authorization in queries, returning sensitive columns by default.

Remediation: Select only required columns. Implement pagination with maximum
limits. Apply authorization filters in the query layer. Use views or stored
procedures to limit data exposure. Mask or encrypt sensitive columns.

## Connection String Security

Exposed connection strings compromise database access.

Root causes: Hardcoded connection strings in source code, connection strings
in configuration files without encryption, logging connection strings, sharing
connection strings across environments.

Remediation: Use secret management for connection strings. Encrypt connection
strings in configuration. Use integrated authentication where possible. Rotate
credentials regularly. Never log connection strings.
