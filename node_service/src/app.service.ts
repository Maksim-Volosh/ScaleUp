import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  
  getHelo(): string {
    return 'Hello World! (.Y.) rferwfwfeweewwerweewrwerewrewerwwre';

  }

  async getJson(): Promise<any> {
    const url = 'http://fast_service:8000'; // URL-адрес JSON-ресурса

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data; // `data` — это уже распарсенный JSON
  }
}
