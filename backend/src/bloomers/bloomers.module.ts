import { Module } from '@nestjs/common';
import { LeavingArrivingController } from './controllers/leaving-arriving.controller';
import { LeavingArrivingService } from './services/leaving-arriving.service';

@Module({
  imports: [],
  controllers: [LeavingArrivingController],
  providers: [LeavingArrivingService],
})
export class BloomerModule {}
