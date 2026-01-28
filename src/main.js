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

  try {
    const posts = await getImagesByQuery(searchQuery, page);
    createGallery(posts.hits);

    const galleryItm = document.querySelector('.gallery-item');

    const rect = galleryItm.getBoundingClientRect();
    const itmHeight = rect.height;
    window.scrollBy({
      top: itmHeight * 2,
      behavior: 'smooth',
    });

    const totalPages = page * 15;
    if (totalPages >= posts.totalHits) {
      throw new Error('');
    }
  } catch {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
    hideLoadMoreButton();
  } finally {
    hideLoader();
  }
};

const submitHandler = evt => {
  evt.preventDefault();

  let userRequest = document.querySelector('.js-search-field').value.trim();
  if (userRequest === '') {
    form.reset();
    return;
  }

  searchQuery = userRequest;

  clearGallery();
  page = 1;
  showLoader();

  getImagesByQuery(searchQuery, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(data.hits);
      showLoadMoreButton();

      // const galleryItm = document.querySelector('.gallery-item');

      // const rect = galleryItm.getBoundingClientRect();
      // const itmHeight = rect.height;
      // window.scrollBy({
      //   top: itmHeight * 2,
      //   behavior: 'smooth',
      // });
    })
    .catch(err => {
      iziToast.error({ message: 'Server error or connection lost' });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
};

form.addEventListener('submit', submitHandler);
loadMoreBtn.addEventListener('click', loadMoreHandler);
