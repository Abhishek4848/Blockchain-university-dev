var CreditContract = artifacts.require("Credit");

module.exports = function(deployer) {
  deployer.deploy(CreditContract);
};
