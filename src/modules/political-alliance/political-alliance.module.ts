import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PoliticalAllianceEntity } from "src/entities/political-alliance.entity";
import { PoliticPartyModule } from "src/modules/politic-party/politic-party.module";

import { PoliticalAllianceService } from "./political-alliance.service";
import { PoliticalAllianceResolver } from "./political-alliance.resolver";

@Module({
  imports: [
    PoliticPartyModule,
    TypeOrmModule.forFeature([PoliticalAllianceEntity]),
  ],
  providers: [PoliticalAllianceService, PoliticalAllianceResolver],
  exports: [PoliticalAllianceService],
})
export class PoliticalAllianceModule {}
