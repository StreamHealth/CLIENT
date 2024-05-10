import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private axiosService: AxiosService) {}

    async register(username: string, name: string, password: string) {
        try {
            return this.axiosService
                .request('POST', '/api/v1/auth/register', {
                    login: username,
                    name: name,
                    password: password,
                })
                .then(response => {
                    this.axiosService.setAuthToken(response.data.token);
                    return response.status;
                });
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async login(username: string, password: string) {
        try {
            return this.axiosService
                .request('POST', '/api/v1/auth/login', {
                    login: username,
                    password: password,
                })
                .then(response => {
                    this.axiosService.setAuthToken(response.data.token);
                    return response.status;
                });
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async logoutUser() {
        try {
            return this.axiosService.logout();
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getProfile() {
        try {
            return this.axiosService
                .request('GET', '/api/v1/user', {})
                .then(response => {
                    return response;
                });
        } catch (err) {
            return Promise.reject(err);
        }
    }
}
