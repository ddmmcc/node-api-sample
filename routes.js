const COMMON_HEADERS = { "Access-Control-Allow-Origin": "*" };

module.exports = [
  {
    externalUrl: "/jssample.js",
    localRoute: "./mocks/jsFiles/jsFileSample.js",
    fileType: "text",
    headers: { ...COMMON_HEADERS },
    sleep: 200,
  },
  {
    externalUrl: "/dradonball/films",
    localRoute: "./mocks/dragonball/characters.js",
    fileType: "json",
    headers: { ...COMMON_HEADERS },
    sleep: 500,
  },
  {
    externalUrl: "/dradonball/characters",
    fileType: "json",
    headers: { ...COMMON_HEADERS },
    sleep: 500,
    customRoute: (req) => {
      if (!req.query.paginationkey) {
        return "./mocks/dragonball/characters.js";
      } else {
        return `./mocks/dragonball/characters${req.query.paginationkey}.js`;
      }
    },
  },
  {
    externalUrl: "/postsample",
    localRoute: "./mocks/postsample.js",
    fileType: "json",
    headers: { ...COMMON_HEADERS, customHeader: "created" },
    sleep: 200,
    method: "post",
  },
];
