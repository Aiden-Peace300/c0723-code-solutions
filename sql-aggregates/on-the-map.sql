/* List the number of "cities" per country in the "countries" table.

Hint: There should be 35 in the United States, for example. */

/* USA - countryId 103! so numberOfCities equals 35 we are in the clear! */

SELECT "countryId",
  COUNT (*) AS "numberOfCities"
  FROM "cities"
  GROUP BY "cities"."countryId"
  ORDER BY "numberOfCities" DESC;
