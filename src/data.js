import { reactive } from 'vue';

export const data = reactive({
    language: 'Italian',
    flag: 'english.png',
    languageToggle() {
        if (this.language == 'Italian') {
            this.language = 'English'
            this.flag = 'italian.png'
        } else {
            this.language = 'Italian'
            this.flag = 'english.png'
        }
    }
})

