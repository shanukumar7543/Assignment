
import * as Yup from "yup";


const LoginSchema = Yup.object({
    user_name: Yup.string()
      .min(3, "User Name must be 3 Characters ")
      .required("User name is required"),
    address: Yup.string()
      .min(3, " Please Fill The Address")
      .required("Address must be 3 Character"),
    mob_no: Yup.string()
      .min(10, "Mobile No must be 10 Digit ").max(10,"Mobile No must be 10 Digit ")
      .required("Mobile No is required"), 
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
  });
  export default LoginSchema