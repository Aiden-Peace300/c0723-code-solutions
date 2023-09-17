SELECT "films"."releaseYear",
       "films"."name",
       "addresses"."district",
       "countries"."name"
  FROM "addresses"
  JOIN "cities" using ("cityId")
  JOIN "countries" USING ("countryId");
