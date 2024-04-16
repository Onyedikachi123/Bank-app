import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const transferSchema = Yup.object().shape({
  recipientPhone: Yup.string()
    .matches(/^\d+$/, "Recipient's phone number must be numeric")
    .required("Recipient's phone number is required"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
});

const TransferMoney: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">Transfer Money</h1>
      <Formik
        initialValues={{ recipientPhone: '', amount: '' }}
        validationSchema={transferSchema}
        onSubmit={(values, actions) => {
          console.log(`Transferring ${values.amount} to ${values.recipientPhone}`);
          // Implement actual transfer logic here
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="tel" name="recipientPhone" placeholder="Recipient Phone Number" className="border p-2 w-full mb-4" />
            <ErrorMessage name="recipientPhone" component="div" className="text-red-500" />

            <Field type="number" name="amount" placeholder="Amount" className="border p-2 w-full mb-4" />
            <ErrorMessage name="amount" component="div" className="text-red-500" />

            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 w-full rounded-md">Transfer</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TransferMoney;
