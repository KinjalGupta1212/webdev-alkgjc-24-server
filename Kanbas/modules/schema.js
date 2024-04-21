import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: String, //{ type: String, required: true },
    lessons: Array,
},
  { collection: "modules" });
export default modulesSchema;