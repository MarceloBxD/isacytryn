import { fetchContentfulData } from "../../utils/contentful";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data?: any;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const data = fetchContentfulData();
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Error", error: error.message });
    }
  }
}
