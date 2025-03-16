/*
Store theme
Store current calculator form

*/


const StorageKeys = {
    Display_Theme: 'light',
    Calculator_Type: 'Calculator'
}

type DisplayTheme = 'light' | 'dark';
type CalculatorType = 'Calculator' | 'Tip-Calculator' | 'Discount-Calculator';

type StorageKeysType = (typeof StorageKeys)[keyof typeof StorageKeys];

class StorageUtility {

    static setItem<T>(key:StorageKeysType, Value: T): void {
        try {
            const jsonValue = JSON.stringify(Value);
            localStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error(error);
        }
    }
}

export {StorageKeysType, DisplayTheme, CalculatorType, StorageUtility};