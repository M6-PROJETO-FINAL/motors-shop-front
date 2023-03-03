import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup.string().email().required("Required field"),
    cpf: yup
      .string()
      .required("Required field")
      .matches(
        /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
        "invalid CPF"
      ),
    cellPhone: yup
      .string()
      .required("Required field")
      .matches(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
        "invalid phone number"
      ),
    birthdate: yup
      .date()
      .required("Required field")
      .typeError("Please enter a valid date")
      .max(
        `${new Date().getUTCFullYear() - 18}-${
          new Date().getUTCMonth() + 1
        }-${new Date().getDate()}`,
        "You are not 18 years old"
      ),
  });

  export default schema;