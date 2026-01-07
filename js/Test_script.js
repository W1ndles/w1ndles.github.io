
const np__create_key = document.querySelector('#name__np-key1');
const np__create_key1 = document.querySelector('#name__np-key2');
const np__create_key2 = document.querySelector('#name__np-key3');

const np__create_name_key = document.createElement('h2');
const np__create_name_key1 = document.createElement('h2');
const np__create_name_key2 = document.createElement('h2');

if (np__create_key) {
    np__create_name_key.textContent = 'Крупное Обновление';
    np__create_key.appendChild(np__create_name_key);
};

if (np__create_key1) {
    np__create_name_key1.textContent = 'Новость';
    np__create_key1.appendChild(np__create_name_key1);
};

if (np__create_key2) {
    np__create_name_key2.textContent = 'Обнорвление';
    np__create_key2.appendChild(np__create_name_key2);
};

