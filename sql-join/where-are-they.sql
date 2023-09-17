SELECT "films"."releaseYear",
       "genres"."name",
       "films"."title"
  FROM "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId");
