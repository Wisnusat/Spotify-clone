import { atom } from "recoil";
import data from "../lib/defaultPlaylist.json";

export const playlistState = atom({
  key: "playlistState",
  default: data,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "37i9dQZF1E4v8KO4mqNt4C",
});
