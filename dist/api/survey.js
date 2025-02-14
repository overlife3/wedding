import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, isPresent } = request.body;

    try {
      // Вставляем данные в таблицу survey_results
      await sql`
            INSERT INTO survey (name, ispresent)
            VALUES (${name}, ${isPresent})
          `;
      response.status(200).json({ message: "Данные сохранены!" });
    } catch (error) {
      console.error("Ошибка:", error);
      response.status(500).json({ error: error });
    }
  } else if (request.method === "GET") {
    try {
      // Вставляем данные в таблицу survey_results
      await sql`SELECT * FROM survey`;
      response.status(200).json({ message: "Данные получены!" });
    } catch (error) {
      console.error("Ошибка:", error);
      response.status(500).json({ error: error });
    }
  } else {
    response.status(405).json({ message: "Метод не поддерживается" });
  }
}
