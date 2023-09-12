module.exports = function buildPage(data, count, page, order) {
  return {
    data,
    page,
    count,
    order,
  };
};
