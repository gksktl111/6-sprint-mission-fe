const productRegisterValidation = (data) => {
  let isValidateCheck = {
    isName: false,
    isDescription: false,
    isPrice: false,
    isTags: false,
    isAllCheck: false,
  };

  const { name, description, price, tags } = data;

  if (name && name.length <= 10) {
    isValidateCheck.isName = true;
  } else {
    isValidateCheck.isName = false;
  }

  if (description.length >= 10) {
    isValidateCheck.isDescription = true;
  } else {
    isValidateCheck.isDescription = false;
  }

  if (Number.isFinite(parseInt(price))) {
    isValidateCheck.isPrice = true;
  } else {
    isValidateCheck.isPrice = false;
  }

  if (tags) {
    tags.forEach((tag) => {
      if (tag.length <= 5) {
        isValidateCheck.isTags = true;
      } else {
        isValidateCheck.isTags = false;
      }
    });
  } else {
    isValidateCheck.isTags = false;
  }

  if (
    isValidateCheck.isName &&
    isValidateCheck.isDescription &&
    isValidateCheck.isPrice &&
    isValidateCheck.isTags
  ) {
    isValidateCheck.isAllCheck = true;
  } else {
    isValidateCheck.isAllCheck = false;
  }

  return isValidateCheck;
};

export { productRegisterValidation };
