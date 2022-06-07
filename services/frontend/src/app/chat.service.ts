import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Chat } from './chat.model';
import { environment } from '../environments/environment';

const baseUrl = `${environment.BASE_URL}/messages`;
const tenantIdUrl = `${environment.BASE_URL}/userTenantId`;
const authUrl = `${environment.BASE_URL}/auth/google`;
const authCallbackUrl = `${environment.BASE_URL}/auth/google-auth-redirect`

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) { }

  get(token: string, channelId: string) {
    const authHeader = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<Chat[]>(baseUrl, {
      headers: authHeader,
      params: {
        ChannelID: channelId,
      },
    });
  }

  post(message: Chat, token: string) {
    const authHeader = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(baseUrl, message, { headers: authHeader });
  }

  getUserTenantId(token: string) {
    const authHeader = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(tenantIdUrl, {
      headers: authHeader,
      responseType: 'text',
    });
  }

  login() {
    location.href = authUrl
  }

  authGoogleCallback(data: any) {
    return this.http.post(authCallbackUrl, data);
  }
}
