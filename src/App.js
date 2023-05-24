import React from "react";
// TODO: import useFormik from formik library
import './index.css';
import{useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) =>{
      alert('Login successful!')
    },

    validate: values => {
      let errors = {};
      if(!values.username) errors.username = 'Required, Username should be an email.';
      if(!values.password) errors.password = 'Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input 
          username='username'   
          type='text' 
          onChange={formik.handleChange} 
          value={formik.values.username}/>
          {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div>: null}
        <div>Password</div>
          <input  
            password='password' 
            type='text' 
            onChange={formik.handleChange} 
            value={formik.values.password}>
          </input>
        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <button type='submit'>Submit</button>
      </form> 
    </div>
  );
}

export default App;
