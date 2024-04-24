import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    course: String,
    name: String,
    dueDate: String,
    availableDate: String,
    pts: Number,
    numQuestions: Number,
    published: Boolean,
    instructions: String,
    shuffled: Boolean,
    quizType: String,
    assignmentType: String,
    timeLimit: Number,
    multipleAttempts: Boolean,
    viewResponses: String,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    lockdown: Boolean,
    requiredToViewResult: Boolean,
    webcamReq: Boolean,
    lockAfterAnswering: Boolean,
    untilDate: String,
    forWhom: String
},
  { collection: "quizzes" });
export default quizSchema;

