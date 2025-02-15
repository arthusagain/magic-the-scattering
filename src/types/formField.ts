export enum FieldType {
    text,
    select,
    checkbox,
    compare,
    symbol
}

export enum Comparables {
    "Mana value",
    "Power",
    "Toughness",
    "Loyalty"
}

export interface IFormField {
    type: FieldType;
    label: string;
    context: any;
}

export interface ILabel {
    text: string;
    image?: string;
}
