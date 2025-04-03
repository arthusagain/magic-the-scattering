export enum FieldType {
    text,
    select,
    checkbox,
    compare,
    symbol,
    file
}
export function isValidFieldType(testedType: string){
    return testedType in FieldType;
}

export enum Comparables {
    "Mana value",
    "Power",
    "Toughness",
    "Loyalty"
}

export interface IFormField {
    type: string;
    label: string;
    context: any;
}

export interface ILabel {
    text: string;
    image?: string;
}
