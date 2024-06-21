import { useId } from "react";
import { Group } from "./Group";
import { FormWrapper } from "./FromWrapper";
import { useCVState, useCVDispatch } from "../cv-reducer/hook";
import styles from "../styles/OnlineProfilesForm.module.css";

function OnlineProfilesForm() {
  const cvState = useCVState();
  const cvDispatch = useCVDispatch();

  const { portfolioURL, gitHubUsername, linkedInUsername } =
    cvState.onlineProfiles;

  const portfolioURLInputId = useId();
  const gitHubUsernameInputId = useId();
  const linkedInUsernameInputId = useId();

  function handlePortfolioURLChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_PORTFOLIO_URL", value: e.target.value });
  }

  function handleGitHubUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    cvDispatch({ type: "SET_GITHUB_USERNAME", value: e.target.value });
  }

  function handleLinkedInUsernameChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    cvDispatch({ type: "SET_LINKEDIN_USERNAME", value: e.target.value });
  }

  return (
    <Group title="Perfis online">
      <FormWrapper>
        <div className={styles.formRow}>
          <label htmlFor={portfolioURLInputId}>Portfolio:</label>
          <input
            type="text"
            name="portfolio"
            id={portfolioURLInputId}
            placeholder="www.meusite.com"
            value={portfolioURL}
            onChange={handlePortfolioURLChange}
          />
        </div>

        <div>
          <label htmlFor={gitHubUsernameInputId}>
            GitHub (apenas nome de usuário):
          </label>
          <div className={styles.formRow}>
            <label htmlFor={gitHubUsernameInputId}>github.com/</label>
            <input
              type="text"
              name="github"
              id={gitHubUsernameInputId}
              placeholder="JoaoSilva8"
              value={gitHubUsername}
              onChange={handleGitHubUsernameChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor={linkedInUsernameInputId}>
            LinkedIn (apenas nome de usuário):
          </label>
          <div className={styles.formRow}>
            <label htmlFor={linkedInUsernameInputId}>
              www.linkedin.com/in/
            </label>
            <input
              type="text"
              name="linkedin"
              id={linkedInUsernameInputId}
              placeholder="JoaoSilva8"
              value={linkedInUsername}
              onChange={handleLinkedInUsernameChange}
            />
          </div>
        </div>
      </FormWrapper>
    </Group>
  );
}

export { OnlineProfilesForm };
