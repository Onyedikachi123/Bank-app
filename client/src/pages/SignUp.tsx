import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup

const signUpSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match') // Remove null, ensuring confirmPassword strictly matches password
    .required('Confirm password is required')
});


const SignUp: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">Sign Up</h1>
      <Formik
        initialValues={{ phone: '', password: '', confirmPassword: '' }}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          console.log("User signed up with phone: ", values.phone, ", password: ", values.password);
          // Implement actual sign-up logic here
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="tel" name="phone" placeholder="Phone Number" className="border p-2 w-full mb-4" />
            <ErrorMessage name="phone" component="div" className="text-red-500" />

            <Field type="password" name="password" placeholder="Password" className="border p-2 w-full mb-4" />
            <ErrorMessage name="password" component="div" className="text-red-500" />

            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="border p-2 w-full mb-4" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 w-full rounded-md">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
