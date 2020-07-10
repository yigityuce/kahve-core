declare namespace Kahve {
	type Constructor = { new (...args: any[]): {} };
	type ClassAnnotationReturnType = <T extends Constructor>(ctor: T) => T;
	type MethodAnnotationReturnType = (src: any, fname: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
	type ParameterAnnotationReturnType = (src: any, propertyKey: string, index: number) => void;
}
