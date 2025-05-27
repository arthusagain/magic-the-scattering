export enum FieldType {
    text,
    select,
    checkbox,
    compare,
    symbol,
    addList,
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
    context: string | string[];
}

export interface ILabel {
    text: string;
    image?: string;
}
