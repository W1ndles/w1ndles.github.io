let name__np = {
    "key1": ["Big Update", "Update"],
    "key2": ["News"]
};


const np__create = document.querySelector('#name__np');
const np__create__news = document.querySelector('#news__np');

const np__news__create = document.createElement('h2');
const np__name__create = document.createElement('h2');


if (name__np.key1[0]) {
    np__name__create.textContent = 'Крупное Обновление';
    np__create.appendChild(np__name__create);
};
if (name__np.key2[0]) {
    np__news__create.textContent = 'Новости';
    np__create__news.appendChild(np__news__create);
}


