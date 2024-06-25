function removeHttp(url: string) {
  return url.replace("https://", "").replace("http://", "");
}

export { removeHttp };
