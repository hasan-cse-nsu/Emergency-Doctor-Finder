import dotenv from 'dotenv';
dotenv.config();


export const DATABASE = process.env.DATABASE;



export const JWT_KEY = process.env.JWT_KEY;
export const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30;

export const MAX_JSON_SIZE = "20MB";
export const URL_ENCODE = true;

export const REQUEST_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_NUMBER = 3000; // Per 15 Min 3000 request allowed

export const WEB_CACHE = false;
export const PORT = process.env.PORT || 3030;




