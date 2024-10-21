export type IsTuple<Type> = Type extends readonly any[] ? (number extends Type["length"] ? never : Type) : never;
