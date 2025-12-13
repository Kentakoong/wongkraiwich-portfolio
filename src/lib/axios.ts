import { default as axiosBase } from "axios";

import { env } from "@/env";

const axios = axiosBase.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
});

export { axios };
