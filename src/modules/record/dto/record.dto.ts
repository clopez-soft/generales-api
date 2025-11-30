import { Field, ObjectType } from "@nestjs/graphql";

import {
  PoliticPartyDto,
  PoliticalAllianceDto,
  CandidateDto,
} from "src/modules/ballot/dto/ballot.dto";

@ObjectType()
export class RecordDetailDto {
  @Field()
  detail_id: string;

  @Field()
  record_id: string;

  @Field()
  politic_party: PoliticPartyDto;

  @Field()
  political_alliance: PoliticalAllianceDto;

  @Field()
  candidate: CandidateDto;

  @Field()
  number_box: number;

  @Field()
  votes: number;
}

@ObjectType()
export class QuotientPartyDto {
  @Field()
  politic_party_id: string;

  @Field()
  marks: number;

  @Field()
  positions: number;

  @Field()
  quotient: number;

  @Field()
  positions_extra: number;
}

@ObjectType()
export class CandidateCongressDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;

  @Field()
  candidate_id: string;

  @Field()
  number_box: number;

  @Field()
  candidate_name: string;

  @Field()
  candidate_image: string;

  @Field()
  marks: number;
}

@ObjectType()
export class ResultsCongressDto {
  @Field()
  count_record: number;

  @Field()
  total_votes: number;

  @Field(() => [QuotientPartyDto])
  positions_by_party: QuotientPartyDto[];

  @Field(() => [CandidateCongressDto])
  candidate_congress: CandidateCongressDto[];
}

@ObjectType()
export class PartyMayorMarkDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;

  @Field()
  totalmark: number;
}

@ObjectType()
export class PartyMayorPositionDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;

  @Field()
  position: number;
}

@ObjectType()
export class ResultsMayorDto {
  @Field()
  count_record: number;

  @Field()
  total_votes: number;

  @Field(() => [PartyMayorPositionDto])
  positions: PartyMayorPositionDto[];

  @Field(() => [PartyMayorMarkDto])
  marks: PartyMayorMarkDto[];
}

@ObjectType()
export class PresidentVotesDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;

  @Field()
  political_alliance_id: string;

  @Field()
  political_alliance_code: string;

  @Field()
  political_alliance_image: string;

  @Field()
  candidate_id: string;

  @Field()
  number_box: number;

  @Field()
  candidate_name: string;

  @Field()
  candidate_image: string;

  @Field()
  candidate_flag: string;

  @Field()
  votes: number;
}

@ObjectType()
export class ResultsPresidentDto {
  @Field()
  count_record: number;

  @Field()
  total_votes: number;

  @Field(() => [PresidentVotesDto])
  president_votes: PresidentVotesDto[];
}
