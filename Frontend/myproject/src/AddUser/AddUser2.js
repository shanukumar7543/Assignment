import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { Row, div, Container, Card, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import LoginSchema from './Validation';

function AddUser2() {
  const { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      user_name: '',
      address: '',
      mob_no: '',
      email: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values,action ) => {
      const api = await axios.post('http://localhost:3308/user/add', values)
      console.log(api)
      action.resetForm()
      // window.location.reload();
    },
  })

  
  return (
    <>
      <div className="container w-50 mt-5" style={{marginLeft:"395px",marginBottom:"80px",}}>
        <div className="form-body" style={{paddingLeft:"60px",width:"765px",height:"510px" }}>
      <h3 style={{marginLeft:"260px"}}> <u>Add User </u></h3>
          <form  onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Name:</label>
              <input style={{width:"650px",height:"55px"}}
                type="text"
                placeholder='Enter Your Name'
                name="user_name"
                id="user_name"
                autoComplete="off"
                value={values.user_name}
                class="form-control"
                onChange={handleChange}
                // onBlur={handleBlur}

                aria-describedby="emailHelp"
              />
              {errors.user_name && touched.user_name ? (
                <p className="mt-2 mx-2 fw-bold text-danger">
                  {errors.user_name}
                </p>
              ) : null}
            </div>
            <div>
            <div class="mb-3">
              <label class="form-label">Address:</label>
              <input style={{width:"650px",height:"55px"}}
                type="text"
                placeholder='Enter Your Address'
                class="form-control"
                name="address"
                id="lastname"
                autoComplete="off"
                value={values.address}
                onChange={handleChange}
                // onBlur={handleBlur}
                aria-describedby="emailHelp"
              />
              {errors.address && touched.address ? (
                <p className="mt-2 mx-2 fw-bold text-danger">
                  {errors.address}
                </p>
              ) : null}
            </div>
            <div class="mb-3">
              <label class="form-label">Mobile No:</label>
              <input style={{width:"650px" ,height:"55px"}}
                type="number"
                placeholder='Enter Your Mobile Number'
                class="form-control"
                id="number"
                autoComplete="off"
                aria-describedby="emailHelp"
                name="mob_no"
                value={values.mob_no}
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              {errors.mob_no && touched.mob_no ? (
                <p className="mt-2 mx-2 fw-bold text-danger">{errors.mob_no}</p>
              ) : null}
            </div>
            <div class="mb-3" >
              <label class="form-label">Email:</label>
              <input style={{width:"650px",height:"55px"}}
                type="email"
                placeholder='Enter Your Email'
                class="form-control"
                id="email"
                autoComplete="off"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={handleChange}
                // onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="mt-2 mx-2 fw-bold text-danger">{errors.email}</p>
              ) : null}
            </div>
            <button style={{marginLeft:"180px"}} type="submit" class="btn btn-primary">
              <SaveIcon/>
            </button>
            <button style={{marginLeft:"200px"}} type="delete" class="btn btn-danger">
              <CancelIcon/>
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser2;
