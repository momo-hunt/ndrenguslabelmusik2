import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    const data = Object.fromEntries(await request.formData());

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // check user

    // check password

    // update token

    // setcookies
    cookies.set(
      "sessionId",
      JSON.stringify({ username: "Hari", token: "abc", role: "superadmin" })
    );

    if (data) return data;
    return fail(400, "Salah");
  },
};
