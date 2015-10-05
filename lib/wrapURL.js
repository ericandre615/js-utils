var wrapURL = function wrapURL(text, target) {
  if(!text) {
    return false;
  }
  target = target || '_self';

  // The Regular Expression filter
  regexURL = /(http|https|ftp|ftps)(\:\/\/)([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/;

  text = text.replace(regexURL, "<a href='$1$2$3' target='"+target+"'>$3</a>");

  return text;
};

if(typeof module !== undefined && module.exports) {
  module.exports = wrapURL;
}
