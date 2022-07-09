export interface ISkills {
  mainStack: string[],
  database: string[],
  additionally: string[],
  englishLevel: string,
}

export interface IExperience {
  id: string,
  organization: string,
  role: string,
  start: string,
  finish: string,
  duties: string,
}

export interface IEducation {
  id: string,
  institution: string,
  start: string,
  graduate: string,
}

export interface IData {
  name: string,
  currentRole: string,
  avatar: string,
  summary: string,
  education: IEducation[],
  experience: IExperience[],
  skills: ISkills,
}
