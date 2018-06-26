import { get, post, put, del } from './request';
const URL = 'localhost:3000/api';
const AUTH_URL = `${URL}/auth`;
const REVIEW_URL = `${URL}/reviews`;
const OMDB_URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`; //eslint-disable-line


export const fetchSignin = certification => post(`${AUTH_URL}/signin`, certification);
export const fetchSignup = certification => post(`${AUTH_URL}/signup`, certification);

export const fetchMovieReviews = movieId => get(`${REVIEW_URL}/movie/${movieId}`);
export const fetchUserReviews = userId => get(`${REVIEW_URL}/user/${userId}`);
export const sendNewReview = (data, userId) => post(`${REVIEW_URL}/user/${userId}`, data);
export const sendUpdateReview = (data, reviewId) => put(`${REVIEW_URL}/user/${reviewId}`, data);
export const sendRemoveReview = reviewId => del(`${REVIEW_URL}/user/${reviewId}`);

export const fetchSearch = query => get(`${OMDB_URL}&s=${query}`);
export const fetchMovie = id => get(`${OMDB_URL}&i=${id}`);

export const fetchVerifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});