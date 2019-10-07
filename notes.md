- introduction to RDBMS
- SQL 
- Knex ++
- CRUD Operations persisting data

R = Relational

DB = Database

M = Management

S = System

A Relation is similar to a spreadsheet, it has rows with columns.

Another name for Relations is : Table.

The data on a Relational Database is stored in Tables

[client] <HTTP (methods/endpoints/JSON data)> [API running on a Web Server] <> [Database Management System]

Some popular DBMS
- Oracle 
- MySQL
- PostgresSQL
- MS SQL Server
- SQlite3 (file-based RDBMS)
- MongoDB (NO [Not Only] Sql database)

HTTP is a network protocol. A protocol is a set of rules for communication over the network

Each database vendor can (and probably will) have it's own protocol 

SQL = Structured Query Language. SQL is Standard.

Each DBMS will implement part of the SQL standard and add extra features on top.

some SQL commands:

SELECT categoryName Name, Description as Details from categories

SELECT * FROM Products
order by price desc

```sql
SELECT * FROM Products
where price > 45
order by price desc

SELECT * FROM Products
where price > 45
order by price desc

SELECT country, city, * FROM [Customers] 
where Country = 'Germany' or country = 'Argentina'
order by country, city;

SELECT country, city, * FROM [Customers] 
where Country in ('Germany', 'Argentina', 'Austria')
order by country, city;

SELECT * FROM [Products]
order by price desc
limit 5

insert into categories (description, categoryName)
values ('Swag', 'Lambda Swag')

delete from
where 


-- Connect to a DBMS 

[API] <= JS => [Knex] <= SQL => [DB Driver] <= DBMS Protocol =>  [DBMS]