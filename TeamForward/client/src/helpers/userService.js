import axios from "axios";
import log from "./logging";

const userService = {
  updateProfile,
};

function updateProfile(id, user) {
  axios
    .put(`${process.env.REACT_APP_BE_URL}/teamForward/${id}`, {
      firstName: user.firstName,
      lastName: user.lastName,
      bio: user.bio,
      profession: user.profession,
      zipCode: user.zipCode,
      radius: user.radius,
      interests: user.interests,
      activities: user.activities,
    })
    .then((res) => {
      log(res);
    })
    .catch((err) => {
      log(err);
    });
}

export default userService;
