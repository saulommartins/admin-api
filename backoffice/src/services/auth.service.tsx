import axios from "axios";

const API_URL = "http://192.168.15.2:8081/api/";

interface Login {
  email: string;
  password: string
}

interface Register {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  login({ email, password }: Login) {
    return axios
      .post(API_URL + "signin", {
        email,
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

  register({ name, email, password }: Register) {
    return axios.post(API_URL + "signup", {
      name,
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

  async checkUserName({ username }: { username: string}) {
    const isAvailable = await axios.post(API_URL + "check", {
      email: username
    });
    return isAvailable?.data?.success;
  }
}

export default new AuthService();
