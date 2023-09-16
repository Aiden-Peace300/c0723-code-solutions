# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  CRUD is the acronym for CREATE, READ, UPDATE and DELETE.

- How do you add a row to a SQL table?
  using the keyword `INSERT INTO`

```SQL
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

OR

```SQL
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

- How do you add multiple rows to a SQL table at once?
  using the keyword `VALUES` in conjunction with `INSERT`

- How do you update rows in a database table?
  using the keyword `UPDATE`

```SQL
  UPDATE "actors"
  SET "firstName" = 'Baby',
      "lastName" = 'Yoda'
  WHERE "actorId" = 15;
```

- How do you delete rows from a database table?
  with the keyword `DELETE`

```SQL
DELETE
  FROM "products"
 WHERE "category" = 'cleaning'
   AND "price"    < 20
```

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  SQL needs to know `WHERE` to `UPDATE` or `DELETE` your data manipulation

- How do you accidentally delete or update all rows in a table?

```SQL
DELETE FROM "products";
```

- How do you get back the modified row without a separate `select` statement?

```SQL
returning *;
```
