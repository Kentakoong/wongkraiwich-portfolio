import { env } from "@portfolio/env";
import { SignJWT, importPKCS8 } from "jose";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const payload = {
    iss: env.APPLE_MUSIC_TEAM_ID,
    exp,
    iat,
  };

  try {
    const privateKey = await importPKCS8(env.APPLE_MUSIC_SECRET, "ES256");

    const token = await new SignJWT(payload)
      .setProtectedHeader({
        alg: "ES256",
        kid: env.APPLE_MUSIC_KEY_ID,
      })
      .setIssuedAt(iat)
      .setExpirationTime(exp)
      .setIssuer(env.APPLE_MUSIC_TEAM_ID)
      .sign(privateKey);

    return NextResponse.json(
      { token },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error || "Token generation failed" },
      {
        status: 500,
      },
    );
  }
}
