import axios from "axios";

const API_URL = "http://192.168.15.2:8082/api/";

interface Login {
  email: string;
  password: string
}

interface LoginResponse {
  data: {
    success: boolean;
    token: string;
    user: {
      name: string;
      email: string;
      cellphone: string;
      email_verified_at: boolean;
      id: number;
      created_at: Date;
      updated_at: Date;
    }
  }
}

interface Register {
  name: string;
  email: string;
  cellphone: string;
  password: string;
}

interface RegisterResponse {
  data: {
    success: boolean;
    token: string;
    user: {
      name: string;
      email: string;
      cellphone: string;
      email_verified_at: boolean;
      id: number;
      created_at: Date;
      updated_at: Date;
    }
  };
}

interface ForgotPassword {
  email: string;
}

interface ForgotPasswordResponse {
  data: {
    success: boolean;
    message: string;
  }
}

class AuthService {
  login({ email, password }: Login): Promise<LoginResponse> {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      });
  }

  register({ name, email, cellphone, password }: Register): Promise<RegisterResponse> {
    return axios.post(API_URL + "signup", {
      name,
      email,
      cellphone,
      password
    });
  }

  forgotPassword({ email }: ForgotPassword): Promise<ForgotPasswordResponse> {
    return axios.post(API_URL + "signup", {
      name,
      email,
      cellphone,
      password
    });
  }

  async checkUserName({ username }: { username: string}) {
    const isAvailable = await axios.post(API_URL + "check", {
      email: username
    });
    return isAvailable?.data?.success;
  }
}

export default new AuthService();
