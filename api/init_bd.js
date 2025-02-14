import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      // Вставляем данные в таблицу survey_results
      await sql`
            CREATE TABLE survey (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                isPresent BOOLEAN NOT NULL DEFAULT FALSE
            );
          `;
      response.status(200).json({ message: "Таблица создана!" });
    } catch (error) {
      console.error("Ошибка:", error);
      response.status(500).json({ error: "Ошибка сервера" });
    }
  } else {
    response.status(405).json({ message: "Метод не поддерживается" });
  }
}
