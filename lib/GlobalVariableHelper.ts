export class GlobalVariableHelper {
	public static initGlobal(): void {
		if (!global.kahve) global.kahve = {};
	}
}
