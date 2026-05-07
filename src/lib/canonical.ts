import { SITE_URL } from "./constants";

export const getCanonical = (pathname: string): string => {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${cleanPath}`;
};
