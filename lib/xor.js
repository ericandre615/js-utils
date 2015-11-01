function xor(x, y) {
  return (x || y) && !(x && y);
};

if(typeof module !== undefined && module.exports) {
  module.exports = xor;
}
