import { env } from "@portfolio/env";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET() {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const headers = {
    alg: "ES256",
    kid: env.APPLE_MUSIC_KEY_ID,
  };

  const payload = {
    iss: env.APPLE_MUSIC_TEAM_ID,
    exp,
    iat,
  };

  try {
    const token = jwt.sign(payload, env.APPLE_MUSIC_SECRET, {
      algorithm: "ES256",
      header: headers,
    });

    return NextResponse.json(
      { token, exp },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error },
      {
        status: 500,
      },
    );
  }
}
