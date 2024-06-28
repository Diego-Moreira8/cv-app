/**
 * Ensures the URL starts with "https://" or "http://".
 * If the URL does not start with a protocol, "https://" is added by default.
 * If the user needs to use "http://", they must specify it explicitly in the URL.
 */

function validateUrl(url: string) {
  const valid = url.startsWith("http://") || url.startsWith("https://");
  if (valid) return url;
  return "https://" + url;
}

export { validateUrl };
