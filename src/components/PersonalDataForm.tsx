import { Group } from "./Group";
import { FormWrapper } from "./FormWrapper";
import { Input } from "./Input";
import { useCVDispatch, useCVState } from "../cv-reducer/hook";
import { useId } from "react";
import { Checkbox } from "./Checkbox";
import { PersonalData } from "../cv-reducer/types";
import styles from "../styles/PersonalDataForm.module.css";

function PersonalDataForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();
  const { name, location, phone, email } = cvState.personalData;

  return (
    <Group id="dados-pessoais" title="Dados pessoais">
      <FormWrapper>
        <Input
          label="Nome completo:"
          type="text"
          name="fullName"
          placeholder="João Silva"
          value={name}
          onChange={(e) =>
            cvDispatch({ type: "SET_NAME", value: e.target.value })
          }
        />

        <Input
          label="Localização:"
          type="text"
          name="location"
          placeholder="São Paulo - SP"
          value={location}
          onChange={(e) =>
            cvDispatch({ type: "SET_LOCATION", value: e.target.value })
          }
        />

        <PhoneInput
          value={phone}
          onPhoneChange={(e) =>
            cvDispatch({ type: "SET_PHONE", value: e.target.value })
          }
          onWhatsAppChange={(e) => {
            cvDispatch({ type: "SET_IS_WHATSAPP", value: e.target.checked });
          }}
        />

        <Input
          label="E-mail:"
          type="email"
          name="email"
          placeholder="joaosilva@gmail.com"
          value={email}
          onChange={(e) =>
            cvDispatch({ type: "SET_EMAIL", value: e.target.value })
          }
        />
      </FormWrapper>
    </Group>
  );
}

type PhoneInputProps = {
  value: PersonalData["phone"];
  onPhoneChange: React.ChangeEventHandler<HTMLInputElement>;
  onWhatsAppChange: React.ChangeEventHandler<HTMLInputElement>;
};

function PhoneInput({
  value,
  onPhoneChange,
  onWhatsAppChange,
}: PhoneInputProps) {
  const id = useId();

  return (
    <div className={styles.phoneInputRow}>
      <label htmlFor={id}>Celular (apenas números):</label>

      <input
        type="text"
        name="phone"
        id={id}
        placeholder="11987654321"
        maxLength={11}
        required
        value={value.number}
        onChange={onPhoneChange}
      />

      <Checkbox
        label="É WhatsApp"
        checked={value.isWhatsApp}
        name="isWhatsApp"
        onChange={onWhatsAppChange}
      />
    </div>
  );
}

export { PersonalDataForm };
