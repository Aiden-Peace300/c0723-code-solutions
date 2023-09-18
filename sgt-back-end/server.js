import express from 'express';
import pg from 'pg';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// Defining a route to handle GET requests to retrieve all grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT * FROM "grades"
    `;
    const result = await db.query(sql);

    // Checking if any rows were returned from the query
    const grades = result.rows;

    if (grades.length === 0) {
      // If there are no rows, return an empty array
      res.status(200).json([]);
    } else {
      // If there are rows, return them as an array of objects
      res.status(200).json(grades);
    }
  } catch (err) {
    // Handling errors by sending a 500 status code and an error message
    res.status(500).json({ error: 'An error occurred while fetching grades.' });
  }
});

// Defining a route to handle POST requests to insert a new grade
app.post('/api/grades', async (req, res, next) => {
  try {
    // Extracting data from the request body
    const { name, course, score } = req.body;

    // Validating the incoming data
    if (!name || !course || isNaN(score) || score < 0 || score > 100) {
      // Handling client validation errors with a 400 status code
      res.status(400).json({ error: 'Invalid grade data.' });
    } else {
      // Inserting the new grade into the database
      const sql = `
        INSERT INTO "grades" ("name", "course", "score")
        VALUES ($1, $2, $3)
        ORDER BY "gradeId"
        RETURNING *
      `;
      const params = [name, course, score];
      const result = await db.query(sql, params);

      // Retrieving the created grade
      const createdGrade = result.rows[0];

      // Responding with a 201 status code and the created grade
      res.status(201).json(createdGrade);
    }
  } catch (err) {
    // Handling server errors with a 500 status code
    console.error('Error:', err); // Log the error for debugging
    res
      .status(500)
      .json({ error: 'An error occurred while creating the grade.' });
  }
});

// Defining a route to handle PUT requests to update a row by gradeId
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // Extracting data from the request body
    const { name, course, score } = req.body;
    const { gradeId } = req.params; // Extract gradeId from URL parameters

    // Validating the incoming data
    if (!name || !course || isNaN(score) || score < 0 || score > 100) {
      // Handling client validation errors with a 400 status code
      res.status(400).json({ error: 'Invalid grade data.' });
    } else {
      const checkGradeId = `SELECT * FROM "grades" 
                            WHERE "gradeId" = $1`;

      const checkGradeParams = [gradeId];
      const checkGradeResult = await db.query(checkGradeId, checkGradeParams);

      const existingGrade = checkGradeResult.rows[0];

      if (!existingGrade) {
        // If the grade doesn't exist, respond with a 404 status code
        res.status(404).json({ error: 'Grade not found.' });
      } else {
        // Updating the grade in the database
        const updateGradeSql = `
          UPDATE "grades"
          SET "name" = $1, "course" = $2, "score" = $3
          WHERE "gradeId" = $4
          RETURNING *
        `;
        const updateGradeParams = [name, course, score, gradeId];
        const updateGradeResult = await db.query(
          updateGradeSql,
          updateGradeParams
        );

        // Retrieving the updated grade
        const updatedGrade = updateGradeResult.rows[0];

        // Responding with a 200 status code and the updated grade
        res.status(200).json(updatedGrade);
      }
    }
  } catch (err) {
    // Handling server errors with a 500 status code
    console.error('Error:', err); // Log the error for debugging
    res
      .status(500)
      .json({ error: 'An error occurred while creating the grade.' });
  }
});

// Defining a route to handle DELETE requests to delete a grade by gradeId
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params; // Extract gradeId from URL parameters

    // Parsing gradeId to an integer
    const parsedGradeId = parseInt(gradeId, 10);

    if (isNaN(parsedGradeId) || parsedGradeId < 1) {
      // Responding with a 400 status code for invalid gradeId
      res.status(400).json({ error: 'Invalid gradeId.' });
      return; // Exit the route handler
    }

    const deleteGradeSql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *
    `;

    const deleteGradeParams = [parsedGradeId];
    const deleteGradeResult = await db.query(deleteGradeSql, deleteGradeParams);

    if (deleteGradeResult.rowCount === 0) {
      // If no rows were deleted, respond with a 404 status code
      res.status(404).json({ error: 'Grade not found.' });
    } else {
      // Responding with a 204 status code (no content) to indicate success
      res.status(204).end();
    }
  } catch (err) {
    // Handling server errors with a 500 status code
    console.error('Error:', err); // Log the error for debugging
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the grade.' });
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
