export type socialType = "instagram" | "facebook" | "twitter";

export function getSocialUrl(type: socialType): string {
  switch (type) {
    case "instagram":
      return "#";
    case "facebook":
      return "#";
    case "twitter":
      return "#";
    default:
      return "#";
  }
}
