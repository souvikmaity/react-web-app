// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/souvik/react-sites/first-app/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/souvik/react-sites/first-app/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/souvik/react-sites/first-app/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/souvik/react-sites/first-app/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/souvik/react-sites/first-app/src/pages/page-2.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/souvik/react-sites/first-app/src/pages/about.js"))
}

exports.json = {
  "layout-index.json": require("/Users/souvik/react-sites/first-app/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/souvik/react-sites/first-app/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/souvik/react-sites/first-app/.cache/json/404.json"),
  "index.json": require("/Users/souvik/react-sites/first-app/.cache/json/index.json"),
  "page-2.json": require("/Users/souvik/react-sites/first-app/.cache/json/page-2.json"),
  "404-html.json": require("/Users/souvik/react-sites/first-app/.cache/json/404-html.json"),
  "about.json": require("/Users/souvik/react-sites/first-app/.cache/json/about.json")
}