import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const modal = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
});
const galleryList = document.querySelector('.gallery');

export const createGallery = images => {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
            src="${webformatURL}" 
            alt="${tags}"
            title="${tags}"
            class="gallery-img">
        </a>
            <div class="stats">
            <div class="stats-item">
              <span class="top-txt">Likes</span>
              <p class="bottom-txt">${likes}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Views</span>
              <p class="bottom-txt">${views}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Comments</span>
              <p class="bottom-txt">${comments}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Downloads</span>
              <p class="bottom-txt">${downloads}</p>
            </div>
          </div>
        </li>`;
      }
    )
    .join('');

  galleryList.innerHTML = galleryMarkup;

  modal.refresh();
};

export const clearGallery = () => {
  galleryList.innerHTML = '';

  modal.refresh();
};

const loader = document.querySelector('.loader');
export const showLoader = () => {
  loader.style.display = 'inline-block';
};

export const hideLoader = () => {
  loader.style.display = 'none';
};
