import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    if (!quiz) {
      res.status(404).send("Quiz not found");
      return;
    }
    res.json(quiz);
  };
  app.get("/api/quizzes/:quizId", findQuizById);

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  app.put("/api/quizzes/:quizId", updateQuiz);

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };
  app.delete("/api/quizzes/:quizId", deleteQuiz);

  const addNewQuiz = async (req, res) => {
    const quiz = await dao.addNewQuiz(req.body);
    res.json(quiz);
  };
  app.post("/api/quizzes", addNewQuiz);

  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  };
  app.get("/api/quizzes", findAllQuizzes);
}
