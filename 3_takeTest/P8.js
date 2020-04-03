var count_list = Array(20);
for (var i = 0; i < 20; i++) {
  count_list[i] = 0;
};

var click_list = Array(20);
for (var i = 0; i < 20; i++) {
  click_list[i] = 10;
};

// Load count_list from localstorage
if (window.localStorage["count"]) {
  var storage = window.localStorage;
  count_list = storage.count;
  count_list = count_list.split(",");
  for (var i = 0; i < 20; i++) {
    count_list[i] = parseInt(count_list[i]);
  }
}

if (window.localStorage["click"]) {
  var storage = window.localStorage;
  click_list = storage.click;
  click_list = click_list.split(",");
  for (var i = 0; i < 20; i++) {
    click_list[i] = parseInt(click_list[i]);
  }
}


function load_page(index) {
  // init the count and background color
  var count_number = count_list.reduce((a,b) => a + b, 0);
  document.getElementById("count_number").innerHTML = count_number;
  determine_part_finish();

  // init the clicks
  for (var i = 1+parseInt(index)*5; i < 6+parseInt(index)*5; i++) {
    if (click_list[i] != 10) {
      var name = 'Q' + i;
      var clicks = document.getElementsByName(name);
      clicks[click_list[i]].checked = true;
    }
  }

}


function click_radio(id) {
  count_list[id-1] = 1;
  var count_number = count_list.reduce((a,b) => a + b, 0);
  document.getElementById("count_number").innerHTML = count_number;
  determine_part_finish();

  // update the click list
  var name = 'Q' + id;
  var clicks = document.getElementsByName(name);
  for (var i = 0; i < clicks.length; i++) {
    if (clicks[i].checked) {
      click_list[id-1] = i;
      break;
    }
  }
  };


function determine_part_finish() {

  // for part 1
  for (var j = 0; j < 4; j++) {
    var sum = 0;
    for (var i = 0+j*5; i < 5+j*5; i++) {
      sum = sum + count_list[i];
    };
    var index = j+1;
    if (sum == 5){
      document.getElementById('change_question_index_'+index).classList.replace("Q_part", "Q_full");
    }
    else {
      if (document.getElementById('change_question_index_'+index).classList == "Q_full") {
        document.getElementById('change_question_index_'+index).classList.replace("Q_full", "Q_part");
      }
    };
  };

}


function change_page(page) {
  var storage = window.localStorage;
  storage["count"] = count_list;
  storage["click"] = click_list;

  if (page == '../1_Homepage/Result.html') {
    confirm(page);
  }
  else {
    window.location.href=page;
  }
};


function confirm(page) {
  var count_number = count_list.reduce((a,b) => a + b, 0);
  if (count_number == 20) {
    alert("You have finished all the questions!");
    window.location.href=page;
  }
  else {
    alert("Please finish all the questions before submitting!")
  }
}
