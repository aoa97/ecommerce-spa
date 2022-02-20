export const selColor = (color) => {
  switch (color) {
    case "primary":
      return "#dc3a1a";
    case "secondary":
      return "#5d58f5";
    case "black":
      return "#161616";
    case "white":
      return "#FFF";
    case "gray-l":
      return "#e4e7eb";
    case "gray-d":
      return "#707070";
    default:
      return "#161616";
  }
};
