import React from 'react'
import { useState,useEffect } from 'react';
import '../CSS/Register.css'

function Register() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        college: "",
        city: "",
        course: "B.Tech",
        branch: "CSE",
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const Validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
            isValid = false;
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter valid 10-digit Indian mobile number";
            isValid = false;
        }

        if (!formData.college.trim()) {
            newErrors.college = "College name is required";
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = Validate();
        if (isValid) {
            console.log("Form Data:", formData);
            alert("Form submitted successfully!");

            setFormData({
                fullname: "",
                email: "",
                mobile: "",
                college: "",
                city: "",
                course: "B.Tech",
                branch: "CSE",
            });

            setErrors({});
        }
    };

    const isFormIncomplete = Object.values(formData).some(
        (val) => !val.trim()
    );
    return (
        <>


            <section className="quick-enquiry">
                <h2>
                    QUICK <span>ENQUIRY</span>
                </h2>


                <form className="quick-form" onSubmit={handleSubmit}>
                    <div className="form-group full">
                        <label>Name</label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder='Name of the student'
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <small className="error">{errors.fullname}</small>}
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="mobile"
                            maxLength="10"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        {errors.mobile && <small className="error">{errors.mobile}</small>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <small className="error">{errors.email}</small>}
                    </div>

                    <div className="form-group">
                        <label>College Name</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                        />
                        {errors.college && <small className="error">{errors.college}</small>}
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <small className="error">{errors.city}</small>}
                    </div>

                    <div className="form-group">
                        <label>Course</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                        >
                            {/* <option value="">Select</option> */}
                            <option>B.Tech</option>
                            <option>M.Tech</option>
                            <option>MCA</option>
                            <option>MBA</option>
                            <option>BCom</option>
                            <option>BSC</option>
                            <option>Other</option>
                        </select>
                        {errors.course && <small className="error">{errors.course}</small>}
                    </div>

                    <div className="form-group">
                        <label>Branch</label>
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                        >
                            {/* <option value="">Select</option> */}
                            <option>CSE</option>
                            <option>ECE</option>
                            <option>AI-ML</option>
                            <option>IT</option>
                            <option>Cyber Security</option>
                            <option>IOT</option>
                            <option>Other</option>
                        </select>
                        {errors.branch && <small className="error">{errors.branch}</small>}
                    </div>

                    <button
                        className="submit-btn"
                        disabled={isFormIncomplete}
                    >
                        Submit
                    </button>
                </form>
            </section>



        </>
    )
}

export default Register