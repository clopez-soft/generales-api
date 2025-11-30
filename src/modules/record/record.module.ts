import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// import { FilesModule } from "src/modules/file/files.module";
import { PoliticPartyModule } from "src/modules/politic-party/politic-party.module";
import { PoliticalAllianceModule } from "src/modules/political-alliance/political-alliance.module";
import { CandidateModule } from "src/modules/candidate/candidate.module";
import { JrvModule } from "src/modules/jrv/jrv.module";

import { RecordEntity } from "src/entities/record/record.entity";
import { RecordDetailEntity } from "src/entities/record/record-detail.entity";

import { RecordService } from "./record.service";
import { RecordResolver } from "./record.resolver";

@Module({
  imports: [
    // FilesModule,
    PoliticPartyModule,
    PoliticalAllianceModule,
    CandidateModule,
    JrvModule,
    TypeOrmModule.forFeature([RecordEntity, RecordDetailEntity]),
  ],
  providers: [RecordService, RecordResolver],
  exports: [RecordService],
})
export class RecordModule {}
