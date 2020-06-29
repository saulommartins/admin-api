import axios from "axios";

const API_URL = "http://localhost:8081/api/";

interface Login {
  username: string;
  password: string
}

interface Register {
  username: string;
  password: string;
  email: string;
}

class AuthService {
  login({ username, password }: Login) {
    return axios
      .post(API_URL + "signin", {
        email: username,
        password
      })
      .then(response => {
        if (response.data.token) {
          sessionStorage.user =  JSON.stringify(response.data);
        }
        return response.data;
      });
  }

  logout() {
    delete sessionStorage.user;
  }

  register({ username, email, password }: Register) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    if (sessionStorage.user) {
      return JSON.parse(sessionStorage.user);
    };
    return false;
  }
}

export default new AuthService();
