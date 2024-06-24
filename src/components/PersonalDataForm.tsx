import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { Input } from "./Input";
import { useCVDispatch, useCVState } from "../cv-reducer/hook";

function PersonalDataForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();
  const { name, location, phone, email } = cvState.personalData;

  return (
    <Group title="Dados pessoais">
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

        <Input
          label="Celular:"
          type="text"
          name="phone"
          placeholder="(11) 98765-4321"
          value={phone}
          onChange={(e) =>
            cvDispatch({ type: "SET_PHONE", value: e.target.value })
          }
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

export { PersonalDataForm };
