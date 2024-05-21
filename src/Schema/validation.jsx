import * as Yup from "yup";

export const Validation = Yup.object().shape({
  name: Yup.string().required("Please enter student name"),
  bod: Yup.string().required("Plese enter student birth of date"),
  std: Yup.string().required("Please enter student class"),
  school: Yup.string().required("Please enter student school name"),
});
