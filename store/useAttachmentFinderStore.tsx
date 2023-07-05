import { create } from 'zustand'

import { Attachment, MachineStepData, StepOneData, StepThreeData, StepTwoData } from '@/types';

const stepVariant = {
  0: 'machineStep',
  1: 'stepOne',
  2: 'stepTwo',
  3: 'stepThree',
};

type setDataType =
  | { step: 0; data: MachineStepData }
  | { step: 1; data: StepOneData }
  | { step: 2; data: StepTwoData }
  | { step: 3; data: StepThreeData };

const useAttachmentFinderStore = create<{
  machineStep: MachineStepData | null;
  stepOne: StepOneData | null;
  stepTwo: StepTwoData | null;
  stepThree: StepThreeData | null;
  currentStep: number
  next: () => void;
  back: () => void;
  clear: () => void;
  setData: ({ step, data }: setDataType) => void;
  attachments: Attachment[] | null;
  setAttachments: (data: Attachment[]) => void;
}>((set) => ({
  machineStep: null,
  stepOne: null,
  stepTwo: null,
  stepThree: null,
  currentStep: 0,
  next: () => set((state) => ({
    ...state,
    currentStep: state.currentStep + 1
  })),
  back: () => set((state) => ({
    ...state,
    currentStep: state.currentStep > 1
      ? state.currentStep - 1 : 0
  })),
  clear: () => set(() => ({
    machineStep: null,
    stepOne: null,
    stepTwo: null,
    stepThree: null,
    currentStep: 0,
  })),
  setData: ({ step, data }) => set((state) => ({
    ...state,
    [stepVariant[step]]: data,
  })),
  attachments: null,
  setAttachments: (data) => set((state) => ({
    ...state,
    attachments: data
  })),
}))

export type AttachmentFinderStore = {
  machineStep: MachineStepData | null;
  stepOne: StepOneData | null;
  stepTwo: StepTwoData | null;
  stepThree: StepThreeData | null;
  currentStep: number;
  next: () => void;
  clear: () => void;
  setData: ({ step, data }: setDataType) => void;
}

export default useAttachmentFinderStore;