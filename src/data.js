import { reactive } from 'vue';

export const data = reactive({
    language: 'Italian',
    languageMessage: 'English',
    languageToggle() {
        if (this.language == 'Italian') {
            this.language = 'English'
            this.languageMessage = 'Italiano'
        } else {
            this.language = 'Italian'
            this.languageMessage = 'English'
        }
    }
})

