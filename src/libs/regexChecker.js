export class RegexChecker {
    static USERNAME_REGEX =  /^[a-zA-Z0-9_ ]{3,20}$/;
    static EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    static PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    static checkEmail(email){
        return this.EMAIL_REGEX.test(email);
    }

    static usernameChecker(username){
        return this.USERNAME_REGEX.test(username);
    }

    static passwordChecker(password){
        return this.PASSWORD_REGEX.test(password);
    }
}
