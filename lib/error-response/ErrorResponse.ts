interface IErrorResponse {
	timestamp: Date;
	status: number;
	error: string;
	message: string;
	path: string;
	data?: any;
}

export class ErrorResponse implements IErrorResponse {
	public timestamp: Date;
	public status: number;
	public error: string;
	public message: string;
	public path: string;
	public data?: any;

	constructor(obj: IErrorResponse) {
		if (obj !== undefined && obj !== null) Object.assign(this, obj);
	}
}
