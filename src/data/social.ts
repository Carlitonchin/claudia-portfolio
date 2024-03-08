export type socialType = "instagram";

export function getSocialUrl(type: socialType): string {
  switch (type) {
    case "instagram":
      return "#";
    default:
      return "#";
  }
}
