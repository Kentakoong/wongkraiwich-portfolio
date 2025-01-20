import { env } from "@portfolio/env";
import { default as axiosBase } from "axios";

const axios = axiosBase.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
});

export { axios };
