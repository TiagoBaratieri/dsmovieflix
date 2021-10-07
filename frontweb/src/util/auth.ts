import jwtDecode from 'jwt-decode';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
};

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
  allowedRoles?: Role[];
};

export const saveSessionData = (loginResponse: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(loginResponse));
};

export const getSessionData = () => {
  const sessionData = localStorage.getItem('authData') ?? '{}';
  const parseSessionData = JSON.parse(sessionData);
  return parseSessionData as LoginResponse;
};

export const getAccessTokenDecoded = () => {
  const sessionData = getSessionData();

  const tokenDecoded = jwtDecode(sessionData.access_token);
  return tokenDecoded as AccessToken;
};

export const isTokenValid = () => {
  const { exp } = getAccessTokenDecoded();

  if (Date.now() <= exp * 1000) {
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  const sessionData = getSessionData();

  return sessionData.access_token && isTokenValid();
};

export const isAllowedByRole = (allowedRoles: Role[] = []) => {
  if (allowedRoles.length === 0) {
    return true;
  }
  const { authorities } = getAccessTokenDecoded();

  return allowedRoles.some((role) => authorities?.includes(role));
};
