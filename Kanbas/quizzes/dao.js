import model from "./model.js";
export const addNewQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
  }
export const findAllQuizzes = () => {
  const quizzes = model.find();
  return quizzes;
}
export const findQuizById = (quizId) => model.findById(quizId);
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });