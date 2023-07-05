import { Attachment } from "@/types";

const mockData: { data: Attachment[] } = {
  data: [
    {
      name: 'HF300',
      type: 'Cone Splitter',
      value: 12000,
      recommended: false
    },
    {
      name: 'HF150',
      type: 'Cone Splitter',
      value: 7500,
      recommended: true
    },
    {
      name: 'HF400',
      type: 'Cone Splitter',
      value: 30000,
      recommended: false
    },
  ]
}

const getAttachments = async (): Promise<Attachment[]> => {
  const { data } = mockData
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(data)
    }, 1000);
  })
}

export default getAttachments