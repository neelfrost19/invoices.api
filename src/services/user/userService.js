import UserModel from "../../models/user/userModel.js";
import {Encryption} from "../../libs/encryption.js";
import {RegexChecker} from "../../libs/regexChecker.js";

const getUser = async (id) => {
    return UserModel.find(id, undefined, undefined);
};

const createUser = async (user) => {
    const {email, userName, password} = user;

    if (!RegexChecker.checkEmail(email)|| !RegexChecker.usernameChecker(userName) || !RegexChecker.passwordChecker(password)) {
        throw new Error('Bad regex email, username or password');
    }

    user.password = Encryption.encrypt(password);
    return UserModel.create(user, undefined);
};

export default {getUser, createUser}
