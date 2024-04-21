import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    course_addr: String,
    short_desc: String,
    startDate: String,
    endDate: String,
    image: String,
    course_title_color: String,
},
  { collection: "courses" });
export default coursesSchema;

