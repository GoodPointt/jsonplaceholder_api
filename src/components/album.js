import { getData } from "../api";
import { createAlbumCard } from "../markup";
import { addMarkup, goBack, setToLoacalStorage } from "../utils";
import { btnBack, jsListSongEl } from "../refs";
import { Notify } from "notiflix";

const searchParam = new URLSearchParams(location.search);
const albumId = searchParam.get("album-id");

async function getPhotos() {
  try {
    const photosData = await getData(`photos?albumId=${albumId}`);
    const albumListMarkup = createAlbumCard(photosData);
    addMarkup(albumListMarkup, jsListSongEl);
  } catch (error) {
    Notify.failure(error.message);
  }
}

window.addEventListener("load", getPhotos);
btnBack.addEventListener("click", goBack);
