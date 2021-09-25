const axios = require("axios").default;
const express = require("express");
const router = express.Router();

const baseURL = "http://api.github.com/users";
const config = {
  headers: { Authorization: `token ${process.env.githubToken}` },
};

// @route   GET api/:username
// @desc    Get User Detail
router.get("/user/:username", async (req, res) => {
  try {
    const url = `${baseURL}/${req.params.username}`;
    const response = await axios.get(url, config);

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(404).send({ message: error.response.statusText });
  }
});

// @route   GET api/repos
// @desc    Return the repos of the user
router.post("/repos", async (req, res) => {
  try {
    const params = { sort: req.body.sort, per_page: req.body.limit };
    const response = await axios.get(
      `${baseURL}/${req.body.username}/repos`,
      {params, ...config}
    );
    console.log(response.headers.link);
    res.status(200).send(response.data);
  } catch (error) {
    return res.status(404).send({ message: error.response.statusText });
  }
});

// @route   /api/tags
// @desc    get all language tags used in a repo

router.post("/tags", async (req, res) => {
  try {
    const url = req.body.tagsUrl;
    const response = await axios.get(url, config);

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(404).send({ message: error.response });
  }
});

module.exports = router;
