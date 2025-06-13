--------------------------------------
🧩 Prisma Commands – Quick Guide
--------------------------------------

📦 `npx prisma init`  
→ Initializes Prisma in your project.  
Creates a `prisma/` folder and `.env` file.

📦 `npx prisma db push`  
→ Pushes the current schema to your database **without creating a migration**.  
Good for quick testing or prototyping. Doesn’t keep history.

📦 `npx prisma migrate dev --name init`  
→ Applies schema changes to the database and **creates a migration** file.  
Use this when you're ready to commit and track schema changes.

📦 `npx prisma studio`  
→ Opens a web UI to visually browse/edit your database (great for debugging).

📦 `npx prisma generate`  
→ Regenerates the Prisma Client after any schema change.  
Usually runs automatically, but you can use it manually if needed.

📦 `npx prisma format`  
→ Formats your `schema.prisma` file (like Prettier for Prisma).

--------------------------------------
🔥 Tips
--------------------------------------

- Use `db push` for quick changes, and `migrate dev` when you want version control.
- Always make sure your `DATABASE_URL` is correctly set in the `.env` file.
- Use `studio` to see and verify data after operations like create or update.
