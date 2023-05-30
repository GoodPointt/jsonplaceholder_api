import { getData } from "../api";
import { createAlbumCard } from "../markup";
import { addMarkup } from "../utils";
import { jsListSongEl } from "../refs";

const searchParam = new URLSearchParams(location.search);
const albumId = searchParam.get("album-id");

getData(`photos?albumId=${albumId}`)
  .then((photo) => {
    const albumListMarkup = createAlbumCard(photo);
    addMarkup(albumListMarkup, jsListSongEl);
  })
  .catch((error) => {
    Notiflix.Notify.failure(error.message);
  });
