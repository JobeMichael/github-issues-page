export const SERIVCE_URL = 'https://api.github.com/repos/angular/angular.js/issues';

export const getData = (service = '') => {
    return fetch(`${SERIVCE_URL}${service}`).then(data => data.json());
}