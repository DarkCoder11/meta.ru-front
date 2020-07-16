import config from '../../env.config';

const getDynamicImage = (image) => `${config.api}${image}`;

export default getDynamicImage;
