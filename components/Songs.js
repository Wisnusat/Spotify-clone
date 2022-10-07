import React from "react";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Songlist from "./Songlist";

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white px-8 flex flex-col sapce-y-1 pb-28">
      {playlist?.tracks.items.map((track, index) => (
        <Songlist key={track.track.id} track={track} order={index} />
      ))}
    </div>
  );
}

export default Songs;
