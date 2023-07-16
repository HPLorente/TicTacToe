const baseURL = "http://43.202.40.53:5000";

export default {
  addGame: { url: `${baseURL}/games`, method: "POST" },
  getAllGames: { url: `${baseURL}/games`, method: "GET" },
};
