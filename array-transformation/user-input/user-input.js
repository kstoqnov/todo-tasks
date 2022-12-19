const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = async (tuple) => {
  const credentials = {
    GroupName: await new Promise((rsl) =>
      rl.question("enter GroupName: ", (answer) => rsl(answer))
    ),
    Label: await new Promise((rsl) =>
      rl.question("enter label: ", (answer) => rsl(answer))
    ),
    IdUser: await new Promise((rsl) =>
      rl.question("enter idUser: ", (answer) => Number(rsl(answer)))
    ),
    Id: await new Promise((rsl) =>
      rl.question("enter id: ", (answer) => Number(rsl(answer)))
    ),
  };

  tuple.push(credentials);

  console.log(tuple);

  rl.close();
};

module.exports = questions;
