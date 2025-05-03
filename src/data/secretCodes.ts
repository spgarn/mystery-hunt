
// Secret codes and their corresponding questions and answers
export interface SecretCode {
  id: string;
  question: string;
  answer: string;
  successCode: string;
}

export const secretCodes: SecretCode[] = [
  {
    id: "enigma",
    question: "What was the name of the German encryption device broken by Alan Turing?",
    answer: "enigma",
    successCode: "TURING-1954",
  },
  {
    id: "atlas",
    question: "Which Greek Titan was condemned to hold up the sky for eternity?",
    answer: "atlas",
    successCode: "OLYMPUS-2023",
  },
  {
    id: "phoenix",
    question: "Which mythical bird rises from its own ashes?",
    answer: "phoenix",
    successCode: "REBIRTH-7721",
  },
  {
    id: "quantum",
    question: "What theory describes the behavior of matter at the atomic level?",
    answer: "quantum",
    successCode: "PLANCK-1926",
  },
  {
    id: "orion",
    question: "What is the name of the constellation that contains the stars Betelgeuse and Rigel?",
    answer: "orion",
    successCode: "HUNTER-0371",
  },
  {
    id: "nebula",
    question: "What do you call a cloud of gas and dust in space?",
    answer: "nebula",
    successCode: "COSMOS-4209",
  },
  {
    id: "cipher",
    question: "What is a method of transforming text to conceal its meaning?",
    answer: "cipher",
    successCode: "CRYPTO-6117",
  },
  {
    id: "labyrinth",
    question: "What type of complex maze contained the Minotaur in Greek mythology?",
    answer: "labyrinth",
    successCode: "THESEUS-5590",
  },
  {
    id: "aurora",
    question: "What is the name of the natural light display in the sky of polar regions?",
    answer: "aurora",
    successCode: "BOREALIS-8724",
  },
  {
    id: "cassini",
    question: "Which spacecraft studied Saturn for over 13 years until 2017?",
    answer: "cassini",
    successCode: "SATURN-9821",
  },
];

export const getSecretCodeById = (id: string): SecretCode | undefined => {
  return secretCodes.find(code => code.id === id);
};

export const getAllSecretCodeIds = (): string[] => {
  return secretCodes.map(code => code.id);
};
