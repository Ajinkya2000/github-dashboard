const parse = require('parse-link-header');

const getPageNumbers = (linkHeader) => {
  const pageDetails = {
    next: null,
    prev: null,
    first: null,
    last: null,
  }

  return {...pageDetails, ...parse(linkHeader)};
}

exports.getPageNumbers = getPageNumbers;
