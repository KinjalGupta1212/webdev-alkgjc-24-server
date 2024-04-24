import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    if (!question) {
      res.status(404).send("Question not found");
      return;
    }
    res.json(question);
  };
  app.get("/api/questions/:questionId", findQuestionById);

  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };
  app.put("/api/questions/:questionId", updateQuestion);

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  };
  app.delete("/api/questions/:questionId", deleteQuestion);

  const addNewQuestion = async (req, res) => {
    const question = await dao.addNewQuestion(req.body);
    res.json(question);
  };
  app.post("/api/questions", addNewQuestion);

  const findAllQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions();
    console.log(questions);
    res.json(questions);
  };
  app.get("/api/questions", findAllQuestions);

}