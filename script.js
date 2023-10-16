const username_register_input = document.getElementById(
  "username_register_input"
);
const email_register_input = document.getElementById("email_register_input");
const password_register_input = document.getElementById(
  "password_register_input"
);
const confirm_input = document.getElementById("confirm_input");
const username_login_input = document.getElementById("username_login_input");
const password_login_input = document.getElementById("password_login_input");
const register_btn = document.getElementById("register_btn");
const login_btn = document.getElementById("login_btn");
const info_p = document.getElementById("info_p");
const login_info_p = document.getElementById("login_info_p");
const register_close_btn = document.getElementById("register_close_btn");
const login_close_btn = document.getElementById("login_close_btn");
const account_container = document.getElementById("account_container");
const username_p = document.getElementById("username_p");
const email_p = document.getElementById("email_p");
const password_p = document.getElementById("password_p");
const sign_out = document.getElementById("sign_out");
const delete_account = document.getElementById("delete_account");
const login_modal = document.getElementById("login_modal");

let username_register, password_register, email_register;

register_btn.onclick = () => {
  if (username_register_input.value.length >= 6) {
    if (
      email_register_input.value.length >= 6 &&
      email_register_input.value.includes("@")
    ) {
      if (password_register_input.value.length >= 6) {
        if (password_register_input.value == confirm_input.value) {
          username_register = username_register_input.value;
          password_register = password_register_input.value;
          email_register = email_register_input.value;

          info_p.style.color = "green";
          info_p.innerText = "Notification: Successfully registered";

          username_register_input.value = "";
          password_register_input.value = "";
          email_register_input.value = "";
          confirm_input.value = "";
        } else {
          info_p.innerText = "Notification: Password mismatch";
        }
      } else {
        info_p.innerText =
          "Notification: Password must be at least 6 character";
      }
    } else {
      info_p.innerText =
        "Notification: Email must be at least 6 character and must include @ symbol";
    }
  } else {
    info_p.innerText = "Notification: Username must be at least 6 character";
  }
};

login_btn.onclick = () => {
  if (username_login_input.value.length >= 6) {
    if (password_login_input.value.length >= 6) {
      if (username_login_input.value == username_register) {
        if (password_login_input.value == password_register) {
          login_info_p.style.color = "green";
          login_info_p.innerText = "Notification: Successfully loged";
          account_container.style.display = "block";
          username_p.innerText = "Username:" + username_register;
          email_p.innerText = "Email:" + email_register;
          password_p.innerText = "Password:" + password_register;
        } else {
          login_info_p.innerText = "Notification: Password is not correct";
        }
      } else {
        login_info_p.innerText = "Notification: Can not find this user";
      }
    } else {
      login_info_p.innerText =
        "Notification: Password must be at least 6 character";
    }
  } else {
    login_info_p.innerText =
      "Notification: Username must be at least 6 character";
  }
};

register_close_btn.onclick = () => {
  username_register_input.value = "";
  password_register_input.value = "";
  email_register_input.value = "";
  confirm_input.value = "";
  info_p.innerText = "";
};

login_close_btn.onclick = () => {
  username_login_input.value = "";
  password_login_input.value = "";
  login_info_p.innerText = "";
};

delete_account.onclick = () => {
  document.location = "index.html";
};

sign_out.onclick = () => {
  account_container.style.display = "none";
};
