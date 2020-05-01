export const getColor = (key) =>{
  switch (key) {
    case "Full Time":
      return "green";
    case "Part Time":
      return "orange";
    default:
      break;
  }
}