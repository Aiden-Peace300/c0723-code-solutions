DELETE FROM "cities"
  WHERE "cityId" = 420
  RETURNING *;
