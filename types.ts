export type MachineStepData = {
  machine: string
}

export type StepOneData = {
  weight: string;
};

export type StepTwoData = {
  hydraulicFlow: string
};

export type StepThreeData = {
  length: string
};

export type Attachment = {
  name: string
  type: string
  value: number
  recommended: boolean
}