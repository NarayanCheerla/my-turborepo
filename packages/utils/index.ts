export const ConvertAsHeading = (key: string) => {
  return key
    .split("-")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
    .join(" ");
};
