export default [
  {
    _id: "1",
    title: "question",
    course: "3700",
    quiz: "1",
    type: "mc",
    pts: 4,
    question: "What is 2+3?",
    answers: [
      {
        _id: "1",
        value: "3",
      },
      {
        _id: "2",
        value: "4",
      },
      {
        _id: "3",
        value: "5",
      },
      {
        _id: "4",
        value: "6",
      },
    ],
    correctAnswer: "3",
  },
  {
    _id: "2",
    title: "question",
    course: "3700",
    quiz: "1",
    type: "fb",
    pts: 4,
    question: "What does DOM stand for",
    answers: [
      {
        _id: "1",
        value: "Document",
      },
      {
        _id: "2",
        value: "Object",
      },
      {
        _id: "3",
        value: "Model",
      },
    ],
    correctAnswer: "",
  },
  {
    _id: "3",
    title: "question",
    course: "3700",
    quiz: "1",
    type: "tf",
    pts: 4,
    question: "Does 2+2 = 5?",
    correctAnswer: false,
    answers: [],
  },
];
