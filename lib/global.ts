/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IGlobalKahve } from './types';

declare global {
	namespace NodeJS {
		export interface Global {
			kahve: IGlobalKahve;
		}
	}
}
