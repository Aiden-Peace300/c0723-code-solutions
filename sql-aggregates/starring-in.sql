/* List the genres of movies (and how many) that 'Lisa Monroe' appeared in. She appeared in a lot of films!

Hint: Your result set should include 3 Sports films and 2 Sci-Fi films, plus a lot more! */

SELECT "actors"."firstName",
       "actors"."lastName",
       "genres"."name",
       COUNT (*) AS "movieCount"
  FROM "genres" 
  JOIN "filmGenre" using ("genreId")
  JOIN "castMembers" using ("filmId")
  JOIN "actors" using ("actorId")
  WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
  GROUP BY "genres"."name", "actors"."firstName", "actors"."lastName"
  ORDER BY "movieCount" DESC;
