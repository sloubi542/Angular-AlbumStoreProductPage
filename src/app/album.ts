import { Track } from "./track";

export interface Album {
  name:string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
