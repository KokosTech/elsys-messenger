const name = "elsys messenger";

const en = {
  SIGN_IN: "Sign In | " + name,
  signIn: "sign in",
  username: "username",
  usernamePlaceholder: "sabev123",
  usernameError:
    "username must be between 3-18 characters long and contain only letters and numbers",
};

const bg = {
  SIGN_IN: "Вход | " + name,
  signIn: "влез",
  username: "име",
  usernamePlaceholder: "гошо",
  usernameError:
    "името трябва да е между 3 и 18 символа и да съдържа само букви и цифри",
};

const i18n = navigator.language === "bg" ? bg : en;

export default i18n;
