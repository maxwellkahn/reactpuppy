import { getToken } from './users-service';
const BASE_URL = '/api/puppys'

export function create(puppy) {
    return sendRequest(BASE_URL, 'POST', puppy)
}

export function getAll() {
    return sendRequest(BASE_URL)
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function update(id) {
    return sendRequest(`${BASE_URL}/${id._id}`, 'PUT', id)
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE') 
}

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}