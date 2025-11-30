import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { BallotEntity } from "src/entities/ballot/ballot.entity";
import { ELECTORAL_LEVEL } from "src/common/enums";
import { CustomException } from "src/custom/save-db.exception";

import {
  BallotStandartDto,
  BallotCongressDto,
  CandidateCongressDto,
  CandidateDto,
} from "./dto/ballot.dto";
import {
  Get_Ballot_President_Info,
  Get_Ballot_Mayor_Info,
  Get_Ballot_Congress_Info,
} from "./query";

@Injectable()
export class BallotService {
  constructor(
    @InjectRepository(BallotEntity)
    private readonly ballotRepo: Repository<BallotEntity>
  ) {}

  async findByLevel(
    level: ELECTORAL_LEVEL,
    location_id: string = ""
  ): Promise<BallotStandartDto[]> {
    let query: string = "";
    switch (level) {
      case ELECTORAL_LEVEL.PRESIDENT:
        query = Get_Ballot_President_Info();
        break;
      case ELECTORAL_LEVEL.CONGRESS:
        query = Get_Ballot_Congress_Info();
        break;
      case ELECTORAL_LEVEL.MAYOR:
        if (!location_id) {
          throw new CustomException(null, "location_id is empty", true);
        }
        query = Get_Ballot_Mayor_Info(location_id);
        break;
    }

    const manager = this.ballotRepo.manager;
    const output = await manager.query(query);

    if (output?.length > 0) {
      return output.map((item: any) => {
        return {
          candidate_id: item?.candidate_id || "",
          candidate_name: item?.candidate_name || "",
          candidate_box: item?.candidate_box || 0,
          candidate_image: item?.candidate_image || "",
          candidate_falg: item?.candidate_flag || "",
          politic_party: {
            politic_party_id: item?.politic_party_id || "",
            politic_party_name: item?.politic_party_name || "",
            politic_party_code: item?.politic_party_code || "",
            politic_party_image: item?.politic_party_image || "",
          },
          political_alliance: {
            political_alliance_id: item?.political_alliance_id || "",
            political_alliance_name: item?.political_alliance_name || "",
            political_alliance_code: item?.political_alliance_code || "",
            political_alliance_image: item?.political_alliance_image || "",
          },
        } as BallotStandartDto;
      });
    }

    return [];
  }

  async findByCongress(): Promise<BallotCongressDto[]> {
    let query: string = Get_Ballot_Congress_Info();

    const manager = this.ballotRepo.manager;
    const CandidateCongress = await manager.query(query);

    type party = {
      politic_party_id: string;
      politic_party_code: string;
      politic_party_name: string;
      politic_party_image: string;
      sequence: 0;
    };

    const parties: party[] = [];

    const candidateCongress: CandidateCongressDto[] = CandidateCongress?.map(
      (item: any) => {
        const exist = parties.some(
          (p) => p.politic_party_id === item.politic_party_id
        );
        if (!exist) {
          const newParty: party = {
            politic_party_id: item.politic_party_id || "",
            politic_party_code: item.politic_party_code || "",
            politic_party_name: item.politic_party_name || "",
            politic_party_image: item.politic_party_image || "",
            sequence: item.sequence || 0,
          };
          parties.push(newParty);
        }

        return {
          politic_party_id: item.politic_party_id || "",
          candidate_id: item?.candidate_id || "",
          candidate_name: item?.candidate_name || "",
          candidate_box: item?.candidate_box || 0,
          candidate_image: item?.candidate_image || "",
        } as CandidateCongressDto;
      }
    );

    const result: BallotCongressDto[] = parties.map((item) => {
      const candidates = candidateCongress.filter(
        (c) => c.politic_party_id === item.politic_party_id
      );
      return {
        politic_party_id: item.politic_party_id || "",
        politic_party_code: item.politic_party_code || "",
        politic_party_name: item.politic_party_name || "",
        politic_party_image: item.politic_party_image || "",
        sequence: item.sequence || 0,
        candidates: candidates.map((c) => {
          return {
            candidate_id: c?.candidate_id || "",
            candidate_name: c?.candidate_name || "",
            candidate_box: c?.candidate_box || 0,
            candidate_image: c?.candidate_image || "",
          } as CandidateDto;
        }),
      } as BallotCongressDto;
    });

    return result;
  }
}
