
// Secret codes and their corresponding questions and answers
export interface SecretCode {
  id: string;
  question: string;
  answer: string;
  successCode: string;
}

export const secretCodes: SecretCode[] = [
  {
    id: "guinness",
    question: "Vilken form var burkarna uppsatta i?",
    answer: "pyramid",
    successCode: "TURING-1954",
  },
  {
    id: "cleaning",
    question: "Hur många gånger står det cleaning i listan?",
    answer: "3",
    successCode: "OLYMPUS-2023",
  },
  {
    id: "3",
    question: "Vilken färg har ballongen?",
    answer: "blå",
    successCode: "REBIRTH-7721",
  },
  {
    id: "oktoberparty",
    question: "Vilken är huvudfärgen?",
    answer: "blå",
    successCode: "PLANCK-1926",
  },
  {
    id: "arr!",
    question: "Vilken färg är det på muggen?",
    answer: "röd",
    successCode: "HUNTER-0371",
  },
  {
    id: "love",
    question: "Vilket ord är före LOVE?",
    answer: "You",
    successCode: "COSMOS-4209",
  },
  {
    id: "hidden",
    question: "Vilka föremål finns på framsidan av föremålet du hittade ledtråden på? Plurar",
    answer: "nycklar",
    successCode: "CRYPTO-6117",
  },
  {
    id: "horde",
    question: "Vad finns i lådan?",
    answer: "penna",
    successCode: "THESEUS-5590",
  },
  {
    id: "savethedate",
    question: "Vilekt årtal hände eventet?",
    answer: "2022",
    successCode: "BOREALIS-8724",
  },
  {
    id: "beer",
    question: "vilken färg det på föremålet?",
    answer: "gul",
    successCode: "SATURN-9821",
  },
];

export const getSecretCodeById = (id: string): SecretCode | undefined => {
  return secretCodes.find(code => code.id === id);
};

export const getAllSecretCodeIds = (): string[] => {
  return secretCodes.map(code => code.id);
};
