import { Controller, Get } from '@nestjs/common';
import { LeavingArrivingService } from '../services/leaving-arriving.service';
import { Mission } from '../mission';

@Controller()
export class LeavingArrivingController {
  constructor(
    private readonly LeavingArrivingService: LeavingArrivingService,
  ) {}

  @Get()
  async getMissions(): Promise<Mission[]> {
    return this.LeavingArrivingService.getMissions();
  }
}
