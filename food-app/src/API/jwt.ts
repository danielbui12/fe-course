import * as jose from "jose";
import { Buffer } from "buffer";
import moment from "moment";
import { adminAPI, excludeAPI } from "./strictEndpoint";

const secret = Buffer.from(
  process.env.REACT_APP_JWT_SECRET || "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggS",
);
const issuer = "urn:example:issuer";
const audience = "urn:example:audience";

export async function generateJWT(data: object): Promise<string> {
  const alg = "HS256";

  const jwt = await new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg, ...data })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime("2h")
    .sign(secret);

  return jwt;
}

export async function verifyJWT(
  jwt: string,
  api: string,
): Promise<number | any> {
  try {
    if (excludeAPI.includes(api)) {
      return;
    }

    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
      issuer: issuer,
      audience: audience,
    });

    if (moment(Number(payload.exp + "00")) >= moment()) {
      return 401;
    }

    if (adminAPI.includes(api) && !protectedHeader.email) {
      return 403;
    }

    if (
      !adminAPI.includes(api) &&
      (!protectedHeader.table_id && !protectedHeader.email)
    ) {
      return 403;
    }

    return {
      ...protectedHeader,
      alg: undefined,
    };
  } catch (error) {
    console.log(__filename, error);
    return 401;
  }
}
