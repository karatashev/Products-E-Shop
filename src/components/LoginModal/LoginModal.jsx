import React from 'react'
import "./LoginModal.module.css"
import style from "./LoginModal.module.css"

const LoginModal = () => {
  return (
    <div className={style.modal}>
      <div className={style.content}>
      {/* <span>&times;</span> */}
      <p>Wow You did a good job!</p>
      <img src="https://media2.giphy.com/media/DYM3Jp7itZifOpzvAr/giphy.gif?cid=ecf05e47vkyw8udttmvof0nuigkvoclbx73f278hyjfb2hz7&rid=giphy.gif&ct=g" alt=""/>
      </div>
    </div>
  )
}

export default LoginModal