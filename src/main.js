import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
hideLoader();

let page = 1;
let searchQuery = null;

const loadMoreBtn = document.querySelector('.js-more-btn');
const loadMoreHandler = async evt => {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const posts = await getImagesByQuery(searchQuery, page);
    createGallery(posts.hits);

    const galleryItm = document.querySelector('.gallery-item');

    if (galleryItm) {
      const rect = galleryItm.getBoundingClientRect();
      const itmHeight = rect.height;
      window.scrollBy({
        top: itmHeight * 2,
        behavior: 'smooth',
      });
    }

    const totalPages = page * 15;

    if (totalPages >= posts.totalHits) {
      iziToast.info({
        title: 'Error',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch {
    iziToast.error({ message: 'Server error or connection lost' });
  } finally {
    hideLoader();
  }
};

const submitHandler = async evt => {
  evt.preventDefault();

  let userRequest = document.querySelector('.js-search-field').value.trim();
  if (userRequest === '') {
    form.reset();
    return;
  }

  searchQuery = userRequest;

  clearGallery();
  hideLoadMoreButton();

  page = 1;
  showLoader();

  try {
    const queryResult = await getImagesByQuery(searchQuery, page);

    if (queryResult.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(queryResult.hits);

    if (queryResult.totalHits > 15) {
      showLoadMoreButton();
    }
  } catch {
    iziToast.error({ message: 'Server error or connection lost' });
  } finally {
    hideLoader();
    form.reset();
  }
};

form.addEventListener('submit', submitHandler);
loadMoreBtn.addEventListener('click', loadMoreHandler);
