/* List the first and last name of all customers, 
plus the total amount they've spent on rentals. 
Order them by total paid, descending.

Hint: Karl Seal should be first with $221.55 paid. */

SELECT "customers"."firstName",
       "customers"."lastName",
       SUM("payments"."amount") AS "totalAmountPaid"
  FROM "customers"
  JOIN "payments" using ("customerId")
  GROUP BY "customers"."firstName", "customers"."lastName"
  ORDER BY "totalAmountPaid" DESC;
