// polyfill for ie
import StarRatings from './star-ratings';
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};




export default StarRatings;
