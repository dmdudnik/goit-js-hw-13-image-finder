const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '21877826-44f3194c1367c30c7423c56f3'

export default {
    page: 1,
    query: '',
    async fetchPicture() {
            const reguesParam = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`;
            const response = await fetch(baseUrl + reguesParam);
            const parsePicture = await response.json();
            this.incrementPage();
            return parsePicture.hits;
    },
    
        get searchQuery() {
         return this.query;
        },
        set searchQuery(string) {
         this.query = string;
        },
        incrementPage() {
       this.page += 1;
        },
        resetPage() {
        this.page = 1;
        },
    }