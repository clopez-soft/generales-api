import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PoliticPartyEntity } from "src/entities/politic-party.entity";

import { PoliticPartyService } from "./politic-party.service";
import { PoliticPartyResolver } from "./politic-party.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([PoliticPartyEntity])],
  providers: [PoliticPartyService, PoliticPartyResolver],
  exports: [PoliticPartyService],
})
export class PoliticPartyModule {}
