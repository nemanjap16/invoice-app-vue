import { reactive } from "vue";
const errors = reactive({});

export default function useFormValidation() {
  const validateEmptyField = (fieldName, fieldValue) => {
    errors[fieldName] = fieldValue === "" ? "Can't be empty!" : "";
  };
  return { errors, validateEmptyField };
}
