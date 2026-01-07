import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaultModule } from './vault/vault.module';

@Module({
  imports: [VaultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
