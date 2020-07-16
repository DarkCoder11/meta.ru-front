import { getRating } from '../store/actions/ratingAction';
import { getCinema } from '../store/actions/cinemaAction';
import { getArticles } from '../store/actions/articlesAction';
import { getCinemaFeatures } from '../store/actions/cinemaFeaturesAction';

export default (dispatch, cinemaSeoUrl, pageReviews, pageSize) =>
  new Promise((resolve, reject) => {
    Promise.all([
      dispatch(getRating('ru_net')),
      dispatch(getArticles()),
      dispatch(getCinemaFeatures(cinemaSeoUrl)),
    ])
      .then(async () => {
        await dispatch(getCinema(cinemaSeoUrl, pageReviews, pageSize));
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
