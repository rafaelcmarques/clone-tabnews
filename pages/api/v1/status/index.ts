import database from "../../../../infra/database"
import { NextApiRequest, NextApiResponse } from "next";


async function status( _request: NextApiRequest , response: NextApiResponse) {

  const result = await database.query('SELECT 1 + 1;')
  console.log(result.rows)
  response.status(200).json({ chave: "são acima da média." });
}

export default status;
