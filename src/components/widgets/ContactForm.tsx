'use client';

import { useState } from 'react';
import Form from '../common/Form';
import { FormProps } from '~/shared/types';

const ContactForm = ({ form }: { form: FormProps }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://submit-form.com/EPq8u563', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('textarea'),
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitError('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        {...form}
        containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12"
        btnPosition="center"
        onSubmit={handleSubmit}
      />
      {submitSuccess && (
        <div className="text-green-600 dark:text-green-400 mt-4 text-center">
          Thank you for your message. We&apos;ll get back to you soon!
        </div>
      )}
      {submitError && (
        <div className="text-red-600 dark:text-red-400 mt-4 text-center">
          {submitError}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
