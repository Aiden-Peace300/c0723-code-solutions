SELECT "customers"."firstName",
       "customers"."lastName",
       "films"."title"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  JOIN "rentals" USING ("rentalId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" USING ("filmId")
 WHERE "films"."title" = 'Magic Mallrats'
