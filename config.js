const dev = {
  apiUrl: "http://localhost:3000/"
};

const test = {
  apiUrl: "https://test.com/"
};

const prod = {
  apiUrl: "https://production.com/"
};

const config =
  process.env.REACT_APP_ENV === "production"
    ? prod
    : process.env.REACT_APP_ENV === "test"
    ? test
    : dev;

export default {
  ...config
};
  