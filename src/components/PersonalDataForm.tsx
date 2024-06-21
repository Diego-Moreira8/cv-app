import { useId } from "react";
import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { useCVDispatch, useCVState } from "../cv-reducer/hook";
import styles from "../styles/PersonalDataForm.module.css";

function PersonalDataForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const { name, location, phone, email } = cvState.personalData;

  const fullNameInputId = useId();
  const locationInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();

  function handleFullNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_NAME", value: e.target.value });
  }

  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_LOCATION", value: e.target.value });
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_PHONE", value: e.target.value });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_EMAIL", value: e.target.value });
  }

  return (
    <Group title="Dados pessoais">
      <FormWrapper>
        <div className={styles.formRow}>
          <label htmlFor={fullNameInputId}>Nome completo:</label>
          <input
            type="text"
            name="fullName"
            id={fullNameInputId}
            placeholder="João Silva"
            value={name}
            onChange={handleFullNameChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor={locationInputId}>Localização:</label>
          <input
            type="text"
            name="location"
            id={locationInputId}
            placeholder="São Paulo - SP"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor={phoneInputId}>Celular:</label>
          <input
            type="text"
            name="phone"
            id={phoneInputId}
            placeholder="(11) 98765-4321"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor={emailInputId}>E-mail:</label>
          <input
            type="email"
            name="email"
            id={emailInputId}
            placeholder="joaosilva@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </FormWrapper>
    </Group>
  );
}

export { PersonalDataForm };
