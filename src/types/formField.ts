export enum FieldType {
    text,
    password,
    select,
    checkbox,
    compare,
    symbol
}

export interface IFormField {
    type: FieldType;
    label: string;
}