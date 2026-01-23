import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
hideLoader();

const submitHandler = evt => {
  evt.preventDefault();

  let userRequest = document.querySelector('.js-search-field').value.trim();
  if (userRequest === '') {
    form.reset();
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(userRequest)
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
