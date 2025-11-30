import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import {
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";

import { JwtAuthGuard } from "src/modules/auth/auth.guard";
import { UserSession } from "src/modules/authorization/session.decorator";
import { SessionDto } from "src/modules/auth/dto/session.dto";
import { UseRoles } from "src/modules/authorization/ac-options";
import { ACGuard } from "src/modules/authorization/ac.guard";

import { PoliticPartyEntity } from "src/entities/politic-party.entity";

import {
  CreatePoliticPartyInput,
  UpdatePoliticPartyInput,
} from "./dto/politic-party.input";
import { PoliticPartyService } from "./politic-party.service";

@Resolver(() => PoliticPartyEntity)
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class PoliticPartyResolver {
  constructor(private readonly politicPartyService: PoliticPartyService) {}

  @UseGuards(ACGuard)
  @UseRoles({ action: "read", possession: "any", resource: "politic-party" })
  @Query(() => [PoliticPartyEntity], {
    name: "politicParties",
    nullable: true,
  })
  findAll(@UserSession() ssn: SessionDto) {
    return this.politicPartyService.findAll(ssn);
  }

  @UseGuards(ACGuard)
  @UseRoles({ action: "read", possession: "any", resource: "politic-party" })
  @Query(() => PoliticPartyEntity, {
    name: "politicPartyById",
    nullable: true,
  })
  findById(@Args("id", { type: () => String }) id: string) {
    return this.politicPartyService.findById(id);
  }

  @UseGuards(ACGuard)
  @UseRoles({ action: "read", possession: "any", resource: "politic-party" })
  @Query(() => PoliticPartyEntity, {
    name: "politicPartyBySlug",
    nullable: true,
  })
  findBySlug(@Args("slug", { type: () => String }) slug: string) {
    return this.politicPartyService.findBySlug(slug);
  }

  @UseGuards(ACGuard)
  @UseRoles({ action: "create", possession: "any", resource: "politic-party" })
  @Mutation(() => PoliticPartyEntity)
  createPoliticParty(
    @Args("input") input: CreatePoliticPartyInput,
    @UserSession() ssn: SessionDto
  ) {
    return this.politicPartyService.create(input, ssn);
  }

  @UseGuards(ACGuard)
  @UseRoles({ action: "update", possession: "any", resource: "politic-party" })
  @Mutation(() => PoliticPartyEntity)
  updatePoliticParty(
    @Args("input") input: UpdatePoliticPartyInput,
    @UserSession() ssn: SessionDto
  ) {
    return this.politicPartyService.update(input, ssn);
  }

  @UseGuards(ACGuard)
  @UseRoles({ action: "delete", possession: "any", resource: "politic-party" })
  @Mutation(() => [String])
  removePoliticParty(
    @Args("id", { type: () => String }) id: string,
    @UserSession() ssn: SessionDto
  ): Promise<string[]> {
    return this.politicPartyService.remove(id, ssn);
  }
}
