class UserService {
  async login(phone, password) {
    return {
      phone,
      password,
    };
  }
}

export default new UserService();
