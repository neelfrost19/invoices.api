import userService from "../../services/user/userLoginService.js";
import UserLoginValidator from "../../validator/user/userLoginValidator.js";

const getUser = async (req, res) => {
    try {
        const { error } = UserLoginValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const user = await userService.getUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {getUser};


