import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Contain, LoginButton, InputField, Heading, LoginContainer, WelcomeText } from "../../StyledComponent/LoginStyle"; // Update the import path
const Login = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must have minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character'
            )
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Retrieve data from local storage
            const savedData = JSON.parse(localStorage.getItem("formData"));

            if (savedData && savedData.email === values.email && savedData.password === values.password) {
                alert("Logged in successfully!");
            } else {
                alert("Invalid email or password");
            }
        },
    });
    return (
        <Contain>
            <LoginContainer>
                <Heading>Welcome</Heading>
                <WelcomeText>Login</WelcomeText>
                <form onSubmit={formik.handleSubmit}>
                    <div className="login-form">
                        <InputField
                            type="email"
                            placeholder="user email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-center text-danger">{formik.errors.email}</div>
                        ) : null}
                        <InputField
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-center text-danger">{formik.errors.password}</div>
                        ) : null}
                        <LoginButton type="submit">Login</LoginButton>
                    </div>
                    <p className="text-center">New user?</p>
                    <LoginButton type="button">Register</LoginButton>
                </form>
            </LoginContainer>
        </Contain>
    );
};

export default Login;
