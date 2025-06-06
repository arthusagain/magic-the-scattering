export enum FieldType {
    text,
    select,
    checkbox,
    compare,
    symbol,
    addList,
    file
}

export enum DependencyType {
    filled,
    notFilled,
    notEqualTo,
    greaterThan,
    greaterOrEqualTo,
    equalTo,
    lessOrEqualTo,
    lessThan,
    contains,
    notContains
}
export function isValidFieldType(testedType: string){
    return testedType in FieldType;
}

export function isValidDependencyType(testedType: string){
    return testedType in DependencyType;
}
/*export enum Comparables {
    "Mana value",
    "Power",
    "Toughness",
    "Loyalty"
}*/
export interface IDependency{
    fieldIndex: number;
    type: DependencyType;
    value: string;
}

export interface IContext{
    info: string;
    dependencies?: IDependency[];
}

export interface IContextArray extends IContext{
    infoList: string[];
}

export interface IContextDictionary extends IContext{
    infoDictionary: Record<string, string>;
    default?: string;
    isLabelImage?: boolean;
}

export interface IFormField {
    type: string;
    label: string;
    context: IContext;
}

export interface ILabel {
    text: string;
    image?: string;
}

export function dictToILabels(dict: Record<string, string>){
    const labels: ILabel[] = [];
    for(const key in dict){
        labels.push({text: key, image: dict[key]});
    }
    return labels;
}
export function arrayAsDictionary(array: string[]) {
        const dict: Record<string, string> = {};
        for (let i = 0; i < array.length; i++) {
            dict[array[i]] = array[i];
        }
        return dict;
    }
