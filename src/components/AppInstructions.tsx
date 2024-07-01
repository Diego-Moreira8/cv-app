import { Group } from "./Group";

function AppInstructions() {
  return (
    <Group id="help" title="Ajuda">
      <h3>Bem vindo(a)!</h3>
      <p>
        Este Web App permite que você crie um currículo profissional e
        imprimível de forma rápida e fácil. Preencha os formulários com suas
        informações pessoais, educacionais e profissionais. Quando finalizar,
        clique no botão de "Imprimir" no canto inferior direito da tela. O
        aplicativo gerará um currículo formatado que você pode imprimir ou
        salvar como PDF.
        <br />
        Espero que goste!
      </p>
    </Group>
  );
}

export { AppInstructions };
