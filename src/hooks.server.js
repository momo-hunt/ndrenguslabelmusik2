export const handle = ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");
  if (sessionId) {
    const levelRole = (key) => {
      switch (key) {
        case "superadmin":
          return 5;
          break;
        case "admin":
          return 4;
          break;
        case "artis":
          return 2;
          break;
        default:
          return 0;
          break;
      }
    };

    let user = JSON.parse(sessionId);
    event.locals.user = {
      name: user.nickname || user.username,
      token: user.token,
      role: levelRole(user.role),
    };
    console.log("hooks user -> ", event.locals.user);
  }

  const respon = resolve(event);
  return respon;
};
