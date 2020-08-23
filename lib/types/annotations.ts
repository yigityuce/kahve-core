import { Constructor } from './base';

export type ClassAnnotationReturnType = <T extends Constructor>(ctor: T) => T;
export type MethodAnnotationReturnType = (src: any, fname: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export type PropertyAnnotationReturnType = (src: any, pname: string) => void;
export type ParameterAnnotationReturnType = (src: any, propertyKey: string, index: number) => void;
