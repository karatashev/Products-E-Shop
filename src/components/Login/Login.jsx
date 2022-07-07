import { useState } from "react";
import LoginInput from "../LoginInput/LoginInput";
import style from "./Login.module.css";


const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className={style.formPage}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>Login</h2>
        <div className={style.formControl}>
          {inputs.map((input) => (
          <LoginInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        </div>
        <button className={style.btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;




// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const [emailIsValid, setEmailIsValid] = useState(true);
//   const [passwordIsValid, setPasswordIsValid] = useState(true);
//   const [formIsValid, setFormIsValid] = useState(true);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (formIsValid) {
//       console.log(loginInfo);
//     }
//   };

//   return (
//     <div className={style.formPage}>
//       <form className={style.form} onSubmit={submitHandler}>
//         <h2 className={style.formTitle}>Login Page</h2>
//         <div className={style.formControl}>
//           <label className={style.label} htmlFor="email">
//             E-mail
//           </label>
//           <br />
//           <input
//             onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value})}
//             onFocus={() => {loginInfo.email.length < 5 && !loginInfo.email.includes("@") ? <p style={{ color: "red" }}>Please enter valid email</p> : setEmailIsValid(true);
//             }}
//             className={style.input}
//             type="text"
//             id="email"
//             value={loginInfo.email}
//           />
//         </div>

//         {/* <p style={{ color: "red" }}>Please enter valid email</p> */}

//         <div className={style.formControl}>
//           <label className={style.label} htmlFor="password">
//             Password
//           </label>
//           <br />
//           <input className={style.input} type="password" id="password" />
//         </div>

//         <p style={{ color: "red" }}>Please enter your password</p>

//         <button className={style.btn}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
