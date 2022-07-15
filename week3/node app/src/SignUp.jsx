import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <label for="name">NAME</label>
        <input type="text" name="name" id=""/>

        <label for="email">EMAIL</label>
        <input type="text" name="email" id=""/>

        <label for="password">PASSWORD</label>
        <input type="text" name="password" id=""/>

        <button>SIGN UP</button>

      </div>
    </div>
  )
}

export default SignUp
