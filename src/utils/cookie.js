import Cookies from 'js-cookie';

const isLoggedInKey = 'isLoggedIn';

const isLoggedInConfig = {
  sameSite: 'lax',
};

export function cookieGetIsLoggedIn() {
  return Cookies.get(isLoggedInKey) == 'true';
}

export function cookieSetIsLoggedIn(isLoggedIn) {
  return Cookies.set(isLoggedInKey, isLoggedIn, isLoggedInConfig);
}

export function cookieRemoveIsLoggedIn() {
  return Cookies.remove(isLoggedInKey);
}
