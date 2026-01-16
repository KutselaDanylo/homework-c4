class NewsApiService{
  constructor(){
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 5;
    this.API_KEY = 'YOUR_NEWS_API_KEY';
    this.BASE_URL = 'https://newsapi.org/v2/everything';
  }
  async fetchArticles(){
    const url = `${this.BASE_URL}?q=${this.searchQuery}&pageSize=${this.perPage}&page=${this.page}&apiKey=${this.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    this.incrementPage();
    return data.articles;
  }
  incrementPage(){
    this.page += 1;
  }
  resetPage(){
    this.page = 1;
  }
  get query(){
    return this.searchQuery;
  }
  set query(newQuery){
    this.searchQuery = newQuery;
  }
}


const refs ={
  searchForm: document.getElementById('search-form'),
  articleList: document.getElementById('article-list'),
  loadMoreBtn: document.getElementById('load-more'),
};
const newsApiService = new NewsApiService();
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchArticles);
async function onSearch(e){
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value.trim();
  if (newsApiService.query === '') return;
  newsApiService.resetPage();
  refs.articleList.innerHTML = '';
  fetchArticles();
}
async function fetchArticles(){
  refs.loadMoreBtn.classList.add('is-hidden');
  try{
    const articles = await newsApiService.fetchArticles();
    if (articles.length === 0) return;
    renderArticles(articles);
    refs.loadMoreBtn.classList.remove('is-hidden');
  } catch (error){
    console.error(error);
  }
}
function renderArticles(articles){
  const markup = articles.map(({ url, urlToImage, title, author, description }) =>{
    return `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${urlToImage || 'https://via.placeholder.com/480'}" alt="${title}" width="480">
            <h2>${title}</h2>
            <p>Posted by: ${author || 'Unknown'}</p>
            <p>${description || ''}</p>
          </article>
        </a>
      </li>`;
  }).join('');
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}