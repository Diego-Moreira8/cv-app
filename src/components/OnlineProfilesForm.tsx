import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import { Input } from "./Input";

function OnlineProfilesForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();
  const { portfolioURL, gitHubURL, linkedInURL } = cvState.onlineProfiles;

  return (
    <Group title="Perfis online">
      <FormWrapper>
        <p>Copie seus links e cole-os nos campos abaixo.</p>

        <Input
          label="Portfolio:"
          type="url"
          name="portfolio"
          placeholder="https://www.meusite.com"
          value={portfolioURL}
          onChange={(e) =>
            cvDispatch({ type: "SET_PORTFOLIO_URL", value: e.target.value })
          }
        />

        <Input
          label="Link para o perfil no GitHub:"
          type="url"
          name="github"
          placeholder="https://github.com/JoaoSilva8"
          value={gitHubURL}
          onChange={(e) =>
            cvDispatch({ type: "SET_GITHUB_USERNAME", value: e.target.value })
          }
        />

        <Input
          label="Link para o perfil no LinkedIn:"
          type="url"
          name="linkedin"
          placeholder="https://www.linkedin.com/in/JoaoSilva8"
          value={linkedInURL}
          onChange={(e) =>
            cvDispatch({ type: "SET_LINKEDIN_USERNAME", value: e.target.value })
          }
        />
      </FormWrapper>
    </Group>
  );
}

export { OnlineProfilesForm };
