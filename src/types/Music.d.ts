interface Song {
  id: string;
  type: string;
  href: string;
  attributes: SongAttributes;
}

interface SongAttributes {
  albumName: string;
  genreNames: Array<string>;
  trackNumber: number;
  durationInMillis: number;
  releaseDate: string;
  isrc: string;
  artwork: Artwork;
  composerName: string;
  url: string;
  playParams: PlayParams;
  discNumber: number;
  hasLyrics: boolean;
  isAppleDigitalMaster: boolean;
  name: string;
  previews: Array<Preview>;
  contentRating: string;
  artistName: string;
}

interface Artwork {
  width: number;
  height: number;
  url: string;
  bgColor: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

interface PlayParams {
  id: string;
  kind: string;
}

interface Preview {
  url: string;
}
