import bcryptjs from "bcryptjs";

export function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(password, salt);
  return hashpass;
}

export const comparePass = async (password, hashpass) => {
  const result = await bcryptjs.compare(password, hashpass);
  return result;
};
