import userService from "../../services/user/userService.js";

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser();
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {createUser, getUser};


