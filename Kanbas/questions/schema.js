import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    title: String,
    course: String,
    quiz: String,
    type: String, 
    pts: Number,
    question: String,
    answers: [
      {
        _id: String,
        value: String,
      },
    ],
    correctAnswer: String,
  },
  { collection: "questions" }
);
export default questionSchema;
