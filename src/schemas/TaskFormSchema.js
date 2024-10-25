import * as yup from "yup";

const TaskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .max(100, "Title cannot exceed 100 characters"),

  description: yup
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .nullable(),

  priority: yup
    .string()
    .oneOf(["low", "medium", "high"], "Priority must be low, medium, or high")
    .required("Priority is required"),

  state: yup
    .string()
    .oneOf(["todo", "doing", "done"], "State must be todo, doing, or done")
    .required("State is required"),
});

export default TaskSchema;
