import { onCall, HttpsError } from "firebase-functions/v2/https";
import axios from "axios";
import process from "process";

const runtimeOpts = {
  secrets: ["RECAPTCHA_V2_SECRET_KEY"],
};

export const verifyReCaptchaV2 = onCall(runtimeOpts, async (request) => {
  const { token } = request.data;

  if (!token) {
    throw new HttpsError("invalid-argument", "Token de reCAPTCHA no proporcionado.");
  }

  const RECAPTCHA_V2_SECRET_KEY = process.env.RECAPTCHA_V2_SECRET_KEY;

  if (!RECAPTCHA_V2_SECRET_KEY) {
    throw new HttpsError("internal", "Clave secreta de reCAPTCHA no configurada.");
  }

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: RECAPTCHA_V2_SECRET_KEY,
          response: token,
        },
      }
    );

    const { success } = response.data;

    if (!success) {
      throw new HttpsError("permission-denied", "Fallo en la verificación de reCAPTCHA v2.");
    }

    return { success: true };
  } catch (error) {
    if (error instanceof HttpsError) {
      throw error;
    }
    throw new HttpsError("internal", "Error al verificar reCAPTCHA v2: " + error.message);
  }
});