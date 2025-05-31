const checkForName = (targetName) => {
  if (typeof targetName !== "string") return false;
  if (targetName == null) return false;

  console.log("===== check for Name function =====", targetName);

  let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou",
    "Diaa Sharqawi",
  ];

  return names.includes(targetName);
};

module.exports = checkForName;
