import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import styles from "./contactform.module.css";

const ContactForm = React.forwardRef((_, ref) => {
  const [state, handleSubmit] = useForm('xgebwlkw');

  return (
    <form method="POST" ref={ref} onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.field}>
          <label htmlFor="name">
            Your name
          </label>
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Your name" field="name" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
            Your email address
          </label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Your email address" field="email" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">
            Your message
          </label>
          <textarea id="message" name="message" required></textarea>
          <ValidationError prefix="Your message" field="message" errors={state.errors} className={styles.error} />
        </div>

        <div className={`${styles.field} ${styles.submit}`}>
          <button type="submit" disabled={state.submitting || state.succeeded}>
            {state.succeeded ? 'Thank you for your message.' : 'Send'}
          </button>
          <ValidationError errors={state.errors} className={styles.error} />
        </div>
      </div>
    </form>
  );
})

export default ContactForm;

// Source: https://developers.cloudflare.com/pages/tutorials/add-a-react-form-with-formspree/