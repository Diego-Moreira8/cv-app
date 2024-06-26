enum ExpType {
  Academic = "ACADEMIC",
  Professional = "PROFESSIONAL",
}

type PersonalData = {
  name: string;
  location: string;
  phone: { number: string; isWhatsApp: boolean };
  email: string;
};

type OnlineProfiles = {
  portfolioURL: string;
  gitHubURL: string;
  linkedInURL: string;
};

type Tech = { id: string; name: string };

type Experience = {
  id: string;
  location: string;
  title: string;
  inProgress?: boolean;
  startMonth: number;
  startYear: string;
  endMonth: number;
  endYear: string;
  description: string;
};

type CVData = {
  personalData: PersonalData;
  onlineProfiles: OnlineProfiles;
  professionalObjective: string;
  techs: Tech[];
  academicExps: Experience[];
  professionalExps: Experience[];
};

export { ExpType };
export type { PersonalData, OnlineProfiles, Tech, Experience, CVData };
