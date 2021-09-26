const getPageNumbers = (linkHeader) => {
  const match = /&page=/g;
  const match2 = />;/g;
  const [nextObj, lastObj] = [...linkHeader.matchAll(match)];
  const [nextEnd, lastEnd] = [...linkHeader.matchAll(match2)];

  const nextPage = Number(linkHeader.slice(nextObj.index + 6, nextEnd.index));
  const lastPage = Number(linkHeader.slice(lastObj.index + 6, lastEnd.index));

  return { nextPage, lastPage };
};

exports.getPageNumbers = getPageNumbers;
