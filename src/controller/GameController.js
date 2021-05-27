const axios = require("axios");

export const GameController = {
  getGames() {
    return axios({
      url: "games",
      baseURL: "https://proyecto-final-qa-back.herokuapp.com",
      method: "GET",
    });
  },

  //   saveGame(game) {
  //     return axios({
  //       url: "games",
  //       baseURL: "https://proyecto-final-qa-back.herokuapp.com",
  //       method: "POST",
  //       body: game,
  //     });
  //   },

  //   deleteGame(gameId) {
  //     return axios({
  //       url: `games/${gameId}`,
  //       baseURL: "https://proyecto-final-qa-back.herokuapp.com",
  //       method: "DELETE",
  //     });
  //   },
};
