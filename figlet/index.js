var figlet = require("figlet");

figlet("fatima", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

/*  method of installinga package 




*/