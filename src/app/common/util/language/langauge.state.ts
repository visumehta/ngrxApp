export interface LanguageState {
    selectedLanguage: string;
    translations: { [key: string]: any };
}

export const initialLanguageState: LanguageState = {
    selectedLanguage: 'en',
    translations: {}
}