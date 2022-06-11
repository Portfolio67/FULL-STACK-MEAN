const eachAsync = async (arr, func) => {
  for (let key in arr) {
    await func(arr[key], key, arr);
  }
};

eachAsync.default = eachAsync;
module.exports = eachAsync;
