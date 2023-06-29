import { NextApiRequest, NextApiResponse } from 'next'
export const config = {
  runtime: 'edge',
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = fetch('https://api.ozzao.com/api/v1/products', {
    method: 'GET',
  })
  return data
}

export default handler