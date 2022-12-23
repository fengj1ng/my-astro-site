import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./ContactForm";
import styles from "./header.module.css";

export default function Header() {
  const [showContactForm, setShowContactForm] = useState(false);
  const nodeRef = useRef(null);

  const classNames = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    enterDone: styles.enterDone,
    exit: styles.exit,
    exitActive: styles.exitActive,
    exitDone: styles.exitDone,
  }

  return (
    <header className={styles.container}>
      <nav className={styles.wrapper}>
        <div className={styles.name}>
          <a href="/">
            风劲
          </a>
        </div>
        <div className={`${styles.contact} switch ${showContactForm ? 'on' : 'off'}`} onClick={() => setShowContactForm(!showContactForm)}>
          Contact me
        </div>
      </nav>
      <CSSTransition nodeRef={nodeRef} in={showContactForm} timeout={2000} unmountOnExit classNames={classNames}>
        <ContactForm ref={nodeRef} />
      </CSSTransition>
    </header>
  )
}