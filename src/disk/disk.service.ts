import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {

  constructor(private powerModule: PowerService) {}

  read() {
    this.powerModule.supplyPower(100);
    console.log(`DiskService: Reading`);
    return 'data';
  }
}
