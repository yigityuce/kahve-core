/* eslint-disable @typescript-eslint/interface-name-prefix */
declare namespace Kahve {
	interface IGlobalKahve {}
}

declare namespace NodeJS {
	export interface Global {
		kahve: Kahve.IGlobalKahve;
	}
}
