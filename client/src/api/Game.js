const baseURL = "http://13.212.50.238";

export default {
  addGame: { url: `${baseURL}/games`, method: "POST" },
  getAllGames: { url: `${baseURL}/games`, method: "GET" },
};
