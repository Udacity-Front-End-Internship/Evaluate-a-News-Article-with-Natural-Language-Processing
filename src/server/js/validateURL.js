const validateURL = (inputURL) => {
  console.log("---- Running validateURL ---->", inputURL);

  return /^(ftp|http|https):\/\/[^ "]+$/.test(inputURL);
};

export { validateURL };
