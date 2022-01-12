var objectLiteral = {
  firstname: "Mary",
  isAPRogrammer: true,
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse({ firstname: "Mary", isAProgrammer: true });
