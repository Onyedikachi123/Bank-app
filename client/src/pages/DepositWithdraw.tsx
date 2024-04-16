import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const depositWithdrawSchema = Yup.object().shape({
  type: Yup.string().required("Transaction type is required"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
});

const DepositWithdraw: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <Formik
        initialValues={{ type: 'deposit', amount: '' }}
        validationSchema={depositWithdrawSchema}
        onSubmit={(values, actions) => {
          console.log(`Transaction to ${values.type} amount ${values.amount}`);
          // Implement actual transaction logic here
          actions.setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <>
            <h1 className="text-lg font-bold mb-4">{values.type === 'deposit' ? 'Deposit' : 'Withdraw'} Money</h1>
            <Form>
              <Field as="select" name="type" className="border p-2 w-full mb-4">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </Field>
              <Field type="number" name="amount" placeholder="Amount" className="border p-2 w-full mb-4" />
              <ErrorMessage name="amount" component="div" className="text-red-500" />

              <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 w-full rounded-md">{values.type === 'deposit' ? 'Deposit' : 'Withdraw'}</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default DepositWithdraw;
