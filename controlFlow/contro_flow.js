let userRole = prompt("who are you select 1 for admin and 2 for manger");
let accessLevel;

if (userRole === "1") {
  accessLevel = "Full access granted";
} else if (userRole === "2") {
  accessLevel = "Manager access granted";
} else {
  accessLevel = "no access granted";
}
console.log("access level " + accessLevel);

let isLoggedin = false;
let UserMessage;

if (isLoggedin) {
  if (userRole === "1") {
    UserMessage = "Welcome Admin you are Logged in";
  } else if (userRole === "2") {
    UserMessage = "Welcome Manager you are logged in";
  }
} else {
  UserMessage = "You are not logged in";
}
console.log("Message for user" + UserMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "administration";
    break;
  case "manger":
    userCategory = "management";
    break;
  case "subscriber":
    userCategory = "subscriber";
    break;
}
console.log("User Category:", userCategory);
