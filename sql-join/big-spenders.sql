SELECT "customers"."firstName",
       "customers"."lastName",
       "payments"."amount"
  FROM "customers"  
  JOIN "payments" using ("customerId")
  ORDER BY "payments"."amount" DESC
  LIMIT 10;
