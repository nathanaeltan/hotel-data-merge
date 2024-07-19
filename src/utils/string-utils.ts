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

  static createSpaceBetweenWords(str: string): string {
    return str.replace(/([A-Z])/g, " $1").trim();
  }

  static createSpaceBetweenWordArray(arr: string[]): string[] {
    return arr
      .map((str) => StringUtils.createSpaceBetweenWords(str))
      .filter((str) => str !== "");
  }

  static trimAndCapitalize(str: string): string {
    return str.toUpperCase().trim();
  }

  static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static capitalizeEveryWord(items: string[]): string[] {
    return items.map((item) => StringUtils.capitalizeFirstLetter(item));
  }


}
