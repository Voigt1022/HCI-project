function confirm_form() {
  alert("You have finished. Thanks.");
  window.location.href='../1_Homepage/Result.html';
};

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;

  if (detect_username(username) == false) {
    alert("Please type a valid username. It should be an email address which includes an \'@\' and a \'.\'");
  }
  else if (detect_phone(phone) == false) {
    alert("Please type a valid phone. The phone should consists of 10 digits.");
  }
  else if (detect_empty(username, phone, password) == true) {
    alert("Please fill in all the values");
  }
  else {
    window.location.href="profile.html";
  };

};

function detect_empty(username, phone, password) {
  var new_username = username.replace(/(^\s*)|(\s*$)/g, '');
  var new_phone = phone.replace(/(^\s*)|(\s*$)/g, '');
  var new_password = password.replace(/(^\s*)|(\s*$)/g, '');

  if (new_username == '' || new_username == undefined || new_username == null) {
    return true;
  }
  else if (new_phone == '' || new_phone == undefined || new_phone == null) {
    return true;
  }
  else if (new_password == '' || new_password == undefined || new_password == null) {
    return true;
  }
  else {
    return false;
  };

};


function detect_username(username) {
  if (username.match("@") == null || username.match(".") == null) {
    return false;
  }
  else {
    return true;
  };
};

function detect_phone(phone) {
  if (phone.length != 10 || IsNum(phone) == false) {
    return false;
  }
  else {
    return true;
  };
};

function IsNum(s) {
    if (s!=null && s!="")
    {
        return !isNaN(s);
    }
    return false;
};
