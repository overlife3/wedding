import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { question1, question2 } = request.body;

    try {
      // Вставляем данные в таблицу survey_results
      await sql`
            INSERT INTO survey_results (question1, question2)
            VALUES (${question1}, ${question2})
          `;
      response.status(200).json({ message: "Данные сохранены!" });
    } catch (error) {
      console.error("Ошибка:", error);
      response.status(500).json({ error: "Ошибка сервера" });
    }
  } else {
    response.status(405).json({ message: "Метод не поддерживается" });
  }
}
