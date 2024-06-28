import { v4 as uuid } from "uuid";
import { CVData } from "./types";

const EMPTY_CV: CVData = {
  personalData: {
    name: "",
    location: "",
    phone: { number: "", isWhatsApp: false },
    email: "",
  },
  onlineProfiles: {
    portfolioURL: "",
    gitHubURL: "",
    linkedInURL: "",
  },
  professionalObjective: "",
  techs: [],
  academicExps: [],
  professionalExps: [],
};

const MY_CV: CVData = {
  personalData: {
    name: "Diego Moreira de Oliveira",
    email: "diego.moreira529@gmail.com",
    location: "Catalão - Goiás",
    phone: { number: "64993380234", isWhatsApp: true },
  },
  onlineProfiles: {
    portfolioURL: "https://diegomoreira.vercel.app",
    gitHubURL: "https://github.com/Diego-Moreira8",
    linkedInURL: "https://www.linkedin.com/in/diego-moreira8",
  },
  techs: [
    { id: uuid(), name: "HTML" },
    { id: uuid(), name: "CSS" },
    { id: uuid(), name: "Sass" },
    { id: uuid(), name: "Tailwind" },
    { id: uuid(), name: "Styled-Components" },
    { id: uuid(), name: "JavaScript" },
    { id: uuid(), name: "TypeScript" },
    { id: uuid(), name: "Webpack" },
    { id: uuid(), name: "Vite" },
    { id: uuid(), name: "React" },
    { id: uuid(), name: "Node.JS" },
    { id: uuid(), name: "Express" },
    { id: uuid(), name: "Pug" },
    { id: uuid(), name: "MongoDB e Mongoose" },
    { id: uuid(), name: "Git" },
    { id: uuid(), name: "Figma" },
  ],
  professionalObjective:
    "Busco uma oportunidade de emprego como Desenvolvedor, onde eu possa aplicar e aprimorar meus conhecimentos em programação, aprender novas tecnologias e contribuir para projetos inovadores.",
  professionalExps: [
    {
      id: uuid(),
      title: "Técnico em Informática",
      location: "Faculdade Una",
      inProgress: true,
      startMonth: 5,
      startYear: "2021",
      endMonth: 6,
      endYear: "2024",
      description:
        "Presto suporte técnico a colaboradores e alunos, gerencio os equipamentos de informática do campus e auxilio outros setores na implementação de melhorias. Durante minha experiência, adquiri conhecimentos em manutenção de computadores, realizei instalações de equipamentos de rede e aperfeiçoei a documentação do setor.",
    },
    {
      id: uuid(),
      title: "Auxiliar em Compras",
      location: "Construtora Nóbrega Pimenta",
      startMonth: 8,
      startYear: "2020",
      endMonth: 4,
      endYear: "2021",
      description:
        "Nessa função, auxiliava o comprador no lançamento de notas fiscais para pagamento.",
    },
    {
      id: uuid(),
      title: "Aprendiz em Suporte em Informática",
      location: "Faculdade Una",
      startMonth: 6,
      startYear: "2018",
      endMonth: 12,
      endYear: "2019",
      description:
        "Minha segunda experiência como Jovem Aprendiz. Realizava manutenção em equipamentos de informática e prestava suporte técnico aos colaboradores e alunos do campus.",
    },
    {
      id: uuid(),
      title: "Aprendiz em Compras",
      location: "Anglo American",
      startMonth: 5,
      startYear: "2014",
      endMonth: 1,
      endYear: "2016",
      description:
        "Minha primeira experiência profissional foi como Jovem Aprendiz, auxiliando os compradores no follow-up de materiais e serviços, desde a compra até a chegada no almoxarifado.",
    },
  ],
  academicExps: [
    {
      id: uuid(),
      title: "Graduação em Sistemas de Informação",
      location: "Faculdade Descomplica",
      startMonth: 1,
      startYear: "2023",
      endMonth: 12,
      endYear: "2026",
      description: "Esta é uma descrição.",
    },
    {
      id: uuid(),
      title: "Introdução ao MongoDB",
      location: "MongoDB University",
      startMonth: 1,
      startYear: "2024",
      endMonth: 1,
      endYear: "2024",
      description: "",
    },
    {
      id: uuid(),
      title: "SQL Bootcamp",
      location: "Udemy",
      startMonth: 1,
      startYear: "2023",
      endMonth: 1,
      endYear: "2023",
      description: "",
    },
  ],
};

const PRO_OBJ_EXAMPLE =
  "Busco oportunidades para aplicar e expandir meus conhecimentos em um ambiente desafiador e dinâmico. Tenho interesse em contribuir de maneira significativa para o sucesso da organização, utilizando minhas habilidades de [área de atuação] e minha experiência em [principais competências], com o intuito de promover inovação, eficiência e resultados positivos. Estou comprometido(a) com o desenvolvimento contínuo e o aprimoramento das minhas capacidades profissionais, sempre buscando o crescimento mútuo e a excelência no trabalho realizado.";

export { EMPTY_CV, MY_CV, PRO_OBJ_EXAMPLE };
