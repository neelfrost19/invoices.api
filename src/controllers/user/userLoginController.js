import userService from "../../services/user/userLoginService.js";

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {getUser};


