# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  the id field in the table

- How do you join two SQL tables? (Provide at least two syntaxes.)

```SQL
select *
  from "table1"
  join "table2" using ("tableId");
```

OR

```SQL
select "products"."name" as "product",
       "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");
```

- How do you temporarily rename columns or tables in a SQL statement?
  You can temporarily rename columns or tables in a SQL statement using aliases. For columns, you can use the "AS" keyword to assign an alias to a column. For tables, you can use aliases in the "FROM" clause to rename tables.

- How do you create a one-to-many relationship between two tables?
  To create a one-to-many relationship between two tables, you typically add a foreign key in the "many" table that references the primary key in the "one" table. This establishes a link between the two tables where one row in the "one" table can be related to multiple rows in the "many" table.

- How do you create a many-to-many relationship between two tables?
  using the keyword `JOIN` you use an intermediary table to connect the two main tables. This table typically contains foreign keys that reference the primary keys of the two main tables and is often referred to as an "bridge table".
