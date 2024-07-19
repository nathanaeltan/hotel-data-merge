export class StringUtils {
  static trimString(str: string): string {
    return str ? str.trim() : "";
  }

  static removeSpace(str: string): string {
    return str.replace(/\s/g, "");
  }

  static removeSpaceArray(arr: string[]): string[] {
    return arr
      .map((str) => StringUtils.removeSpace(str))
      .filter((str) => str !== "");
  }
}
