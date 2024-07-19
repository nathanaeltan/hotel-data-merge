export class StringUtils {
  static trimString(str: string): string {
    return str ? str.trim() : "";
  }

  static trimAndCapitalize(str: string): string {
    return str.toUpperCase().trim();
  }

  static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
