import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PoliticPartyDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_name: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;
}

@ObjectType()
export class PoliticalAllianceDto {
  @Field()
  political_alliance_id: string;

  @Field()
  political_alliance_name: string;

  @Field()
  political_alliance_code: string;

  @Field()
  political_alliance_image: string;
}

@ObjectType()
export class BallotStandartDto {
  @Field()
  candidate_id: string;

  @Field()
  candidate_name: string;

  @Field()
  candidate_box: number;

  @Field()
  candidate_image: string;

  @Field()
  candidate_falg: string;

  @Field()
  politic_party: PoliticPartyDto;

  @Field()
  political_alliance: PoliticalAllianceDto;
}

@ObjectType()
export class CandidateCongressDto {
  @Field()
  politic_party_id: string;

  @Field()
  candidate_id: string;

  @Field()
  candidate_name: string;

  @Field()
  candidate_box: number;

  @Field()
  candidate_image: string;
}

@ObjectType()
export class BallotCongressDto {
  @Field()
  politic_party_id: string;

  @Field()
  politic_party_name: string;

  @Field()
  politic_party_code: string;

  @Field()
  politic_party_image: string;

  @Field()
  sequence: number;

  @Field(() => [CandidateDto])
  candidates: CandidateDto[];
}

@ObjectType()
export class CandidateDto {
  @Field()
  candidate_id: string;

  @Field()
  candidate_name: string;

  @Field()
  candidate_box: number;

  @Field()
  candidate_image: string;
}
