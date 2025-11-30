import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsUUID, IsOptional } from "class-validator";

@InputType()
export class CreatePoliticPartyInput {
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: false })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field({ nullable: false })
  code: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  description: string;
}

@InputType()
export class UpdatePoliticPartyInput extends CreatePoliticPartyInput {
  @Field({ nullable: false })
  @IsNotEmpty()
  @IsUUID()
  politic_party_id: string;
}
