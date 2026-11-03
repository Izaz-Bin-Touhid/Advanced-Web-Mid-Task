# Faculty Management System

Reference: supplied ZIP → nestJs tutorial → sample-proj.

The controller, service, repository, entity, DTO, database connection and validation
follow the reference. The create service uses the same create() + save() pattern.

## Run

```powershell
npm.cmd install
npm.cmd run start:dev
```

PostgreSQL must be running. The reference connection settings are kept in
`src/app.module.ts`: localhost:5432, username postgres, password admin, database myTestDb.
Change these values if your local PostgreSQL settings differ.

If the database does not exist, create it once in pgAdmin:

```sql
CREATE DATABASE "myTestDb";
```

TypeORM creates the faculties table using synchronize: true, as in the reference.

## Postman

POST http://localhost:3000/faculties/create-faculty

Body → raw → JSON:

```json
{
  "Id": "23898-2880-203",
  "Name": "mr. NewFaculty",
  "expertise": "Machine Learning",
  "noOfPublication": 30
}
```

Successful response: 201 Created with the saved faculty.

Check the saved row in pgAdmin:

```sql
SELECT * FROM faculties;
```
