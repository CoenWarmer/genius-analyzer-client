export type Stats = {
  hot: boolean,
  unreviewed_annotations: number,
  pageviews: number
}

export type PrimaryArtist = {
  api_path: string,
  header_image_url: string,
  id: number,
  image_url: string,
  is_meme_verified: boolean,
  is_verified: boolean,
  name: string,
  url: string
}

export type Result = {
  annotation_count: number,
  api_path: string,
  full_title: string,
  header_image_thumbnail_url: string,
  header_image_url: string,
  id: number,
  lyrics_owner_id: number,
  lyrics_state: string,
  path: string,
  pyongs_count: number,
  song_art_image_thumbnail_url: string,
  stats: Stats,
  title: string,
  title_with_featured: string,
  url: string,
  primary_artist: PrimaryArtist
}

export type Hit = {
  highlights: any[],
  index: string,
  type: string,
  result: Result
}
