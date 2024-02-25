import mock from '../../mock.json';

// function getWether using mock.json in this project
export default function getWether() {
    return Promise.resolve(mock);
}