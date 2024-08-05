import { Encryption } from "../../libs/encryption.js";
import { RegexChecker } from "../../libs/regexChecker.js";

import UserModel from "../../models/user/userModel.js";

class UserService {
    static async getUser(id) {
        return UserModel.find(id, undefined, undefined);
    }

    static async createUser(user) {
        const { email, userName, password } = user;

        if (!RegexChecker.checkEmail(email) || !RegexChecker.usernameChecker(userName) || !RegexChecker.passwordChecker(password)) {
            throw new Error('Bad regex email, username or password');
        }

        user.password = Encryption.encrypt(password);
        return UserModel.create(user, undefined);
    }
}

export default UserService;
