import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .required('Phone number is required'),
  password: Yup.string()
    .required('Password is required'),
});

const SignIn: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">Sign In</h1>
      <Formik
        initialValues={{ phone: '', password: '' }}
        validationSchema={signInSchema}
        onSubmit={(values, actions) => {
          console.log("Signing in", values.phone, values.password);
          // Implement actual sign-in logic here
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="tel" name="phone" placeholder="Phone Number" className="border p-2 w-full mb-4" />
            <ErrorMessage name="phone" component="div" className="text-red-500" />

            <Field type="password" name="password" placeholder="Password" className="border p-2 w-full mb-4" />
            <ErrorMessage name="password" component="div" className="text-red-500" />

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 w-full rounded-md">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
