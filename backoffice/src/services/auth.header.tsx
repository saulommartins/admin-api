export default function authHeader() {
  const user = JSON.parse(sessionStorage.user);

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
