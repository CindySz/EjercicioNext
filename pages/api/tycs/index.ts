import { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    res.status(200).json(tycs)
  }