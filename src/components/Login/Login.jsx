import style from "./Login.module.css";
import useInput from "../../hooks/useInput";
// FULLNAME: minimum 6 karakteri
// Age: age > 18
// email: minimum 10 && @
// Password: min 8

const Login = () => {
  // FullName
  const {
    value: fullname,
    valueIsInvalid: fullnameIsInvalid,
    handleInputChange: handleFullnameChange,
    handleInputBlur: handleFullnameBlur,
    valueIsValid: fullnameIsValid,
  } = useInput((text) => text.trim().length > 5);

  //Age
  const {
    value: age,
    valueIsInvalid: ageIsInvalid,
    handleInputChange: handleAgeChange,
    handleInputBlur: handleAgeBlur,
    valueIsValid: ageIsValid,
  } = useInput((value) => value > 17);

  //email
  const {
    value: email,
    valueIsInvalid: emailIsInvalid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    valueIsValid: emailIsValid,
  } = useInput((value) => value.trim().length > 8 && value.includes("@"));

  //password
  const {
    value: password,
    valueIsInvalid: passwordIsInvalid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    valueIsValid: passwordIsValid,
  } = useInput((value) => value.length > 5);

  const formIsValid = fullnameIsValid && ageIsValid && emailIsValid && passwordIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(fullname, email, age, password);
  };

  return (
    <div className={style.formPage}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>Register Page</h2>
        <div className={style.formControl}>
          <label className={style.label} htmlFor="fullname">
            Full Name
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="fullname"
            value={fullname}
            onChange={handleFullnameChange}
            onBlur={handleFullnameBlur}
          />
        </div>
        {fullnameIsInvalid && (
          <p style={{ color: "red" }}>Please enter your full name</p>
        )}
        <div className={style.formControl}>
          <label className={style.label} htmlFor="age">
            Age
          </label>
          <br />
          <input
            className={style.input}
            type="number"
            id="age"
            onChange={handleAgeChange}
            onBlur={handleAgeBlur}
            value={age}
          />
        </div>
        {ageIsInvalid && (
          <p style={{ color: "red" }}>You should be older than 18</p>
        )}
        <div className={style.formControl}>
          <label className={style.label} htmlFor="email">
            E-mail
          </label>
          <br />
          <input
            className={style.input}
            type="text"
            id="email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={email}
          />
        </div>
        {emailIsInvalid && (
          <p style={{ color: "red" }}>Please enter proper email</p>
        )}
        <div className={style.formControl}>
          <label className={style.label} htmlFor="email">
            Password
          </label>
          <br />
          <input
            className={style.input}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        {passwordIsInvalid && (
          <p style={{ color: "red" }}>Please enter proper password</p>
        )}
        <button className={style.btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import LoginInput from "../LoginInput/LoginInput";
// import LoginModal from "../LoginModal/LoginModal";
// import style from "./Login.module.css";

// const Login = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [isOpen, setIsOpen] = useState(false)
//   const [formIsValid, setFormIsValid] = useState(false)

//   const inputs = [
//     {
//       id: 1,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "Enter a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (formIsValid) {
//     //   console.log(values)
//     // }

//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//     console.log(e.target.value)
//     if (e.target.value.includes('@')) {
//       setFormIsValid(true)

//     }
//   };

//   const handleLogin = (e) => {
//     setIsOpen(current => !current)
//   }

//   return (
//     <div className={style.formPage}>
//       <form className={style.form} onSubmit={handleSubmit}>
//         <h2 className={style.formTitle}>Login</h2>
//         <div className={style.formControl}>
//           {inputs.map((input) => (
//           <LoginInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         </div>
//         <button onClick={handleLogin} className={style.btn}>Login</button>
//         {isOpen && <LoginModal />}
//       </form>
//     </div>
//   );
// };

// export default Login;

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
// <form className={style.form} onSubmit={submitHandler}>
//   <h2 className={style.formTitle}>Login Page</h2>
//   <div className={style.formControl}>
//     <label className={style.label} htmlFor="email">
//       E-mail
//     </label>
//     <br />
//     <input
//       onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value})}
//       onFocus={() => {loginInfo.email.length < 5 && !loginInfo.email.includes("@") ? <p style={{ color: "red" }}>Please enter valid email</p> : setEmailIsValid(true);
//       }}
//       className={style.input}
//       type="text"
//       id="email"
//       value={loginInfo.email}
//     />
//   </div>

//   {/* <p style={{ color: "red" }}>Please enter valid email</p> */}

//   <div className={style.formControl}>
//     <label className={style.label} htmlFor="password">
//       Password
//     </label>
//     <br />
//     <input className={style.input} type="password" id="password" />
//   </div>

//   <p style={{ color: "red" }}>Please enter your password</p>

//   <button className={style.btn}>Login</button>
// </form>
//     </div>
//   );
// };

// export default Login;
