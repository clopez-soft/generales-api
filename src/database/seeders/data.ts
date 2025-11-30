import { ROLE_ACESS, USER_TYPE, ELECTORAL_LEVEL } from "src/common/enums";

import { RoleEntity } from "src/entities/security/role.entity";
import { UserEntity } from "src/entities/user.entity";

export type detailType = {
  sequence: number;
  party?: string;
  alliance?: string;
};

export type alliance = {
  code: string;
  name: string;
  level: ELECTORAL_LEVEL;
};

export const getSeedRoles = async (): Promise<RoleEntity[]> => {
  const def = <RoleEntity>(<unknown>{
    name: "",
    description: "",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    access_level: 1,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    active: true,
    code: ROLE_ACESS.VIEWER,
    slug: "",
  });

  // return [];
  // return [ def ];
  return [
    {
      ...def,
      code: ROLE_ACESS.ROOT,
      name: "root",
      description: "super user",
      access_level: 100,
      slug: "root",
      updateSlug: () => {},
      createSlug: () => {},
    },
    {
      ...def,
      code: ROLE_ACESS.ADMIN,
      name: "administrator",
      description: "site administrator",
      access_level: 80,
      slug: "administrator",
      updateSlug: () => {},
      createSlug: () => {},
    },
    {
      ...def,
      code: ROLE_ACESS.SUPERVISOR,
      name: "supervisor",
      description: "supervisor",
      access_level: 60,
      slug: "supervisor",
      updateSlug: () => {},
      createSlug: () => {},
    },
    {
      ...def,
      code: ROLE_ACESS.DIGITIZER,
      name: "digitizer",
      description: "digitizer",
      access_level: 40,
      slug: "digitizer",
      updateSlug: () => {},
      createSlug: () => {},
    },
    {
      ...def,
      code: ROLE_ACESS.VIEWER,
      name: "viewer",
      description: "end user/viewer",
      access_level: 10,
      slug: "viewer",
      updateSlug: () => {},
      createSlug: () => {},
    },
  ];
};

export const getSeedUsers = async (
  rootRole: RoleEntity | null,
  adminRole: RoleEntity | null,
  digiRole: RoleEntity | null,
  viewRole: RoleEntity | null
): Promise<UserEntity[]> => {
  // const root1 = <UserEntity>{
  //   email: 'fab@conteo.com',
  //   password: '@fab.admin1*',
  //   name: 'Fabricio Maldonado',
  //   created_at: new Date(),
  //   updated_at: new Date(),
  //   deleted_at: null,
  //   version: 1,
  //   updated_by: null,
  //   created_by: null,
  //   deleted_by: null,
  //   image_url: null,
  //   type: USER_TYPE.END_USER,
  //   active: true,
  //   role: rootRole,
  // };

  // const root2 = <UserEntity>{
  //   email: 'c.lopezh1288@gmail.com',
  //   password: 'May_2012*',
  //   name: 'Carlos Lopez',
  //   created_at: new Date(),
  //   updated_at: new Date(),
  //   deleted_at: null,
  //   version: 1,
  //   updated_by: null,
  //   created_by: null,
  //   deleted_by: null,
  //   image_url: null,
  //   type: USER_TYPE.END_USER,
  //   active: true,
  //   role: rootRole,
  // };

  // const digi1 = <UserEntity>{
  //   email: 'digitalizador@conteo.com',
  //   password: '@digi.digi*',
  //   name: 'Digitalizador',
  //   created_at: new Date(),
  //   updated_at: new Date(),
  //   deleted_at: null,
  //   version: 1,
  //   updated_by: null,
  //   created_by: null,
  //   deleted_by: null,
  //   image_url: null,
  //   type: USER_TYPE.END_USER,
  //   active: true,
  //   role: digiRole,
  // };

  const user0 = <UserEntity>(<unknown>{
    email: "carlos@conteo.com",
    password: "@carlos.admin*",
    name: "Carlos Lopez",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: rootRole,
  });

  const user1 = <UserEntity>(<unknown>{
    email: "fabricio@conteo.com",
    password: "@fabricio.admin*",
    name: "Fabricio Maldonado",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: adminRole,
  });

  const user2 = <UserEntity>(<unknown>{
    email: "sergio@conteo.com",
    password: "@sergio.admin*",
    name: "Sergio Javier",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: adminRole,
  });

  const user3 = <UserEntity>(<unknown>{
    email: "digitador1@conteo.com",
    password: "@digitador1.temp*",
    name: "Digitador1",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: digiRole,
  });

  const user4 = <UserEntity>(<unknown>{
    email: "digitador2@conteo.com",
    password: "@digitador2.temp*",
    name: "Digitador2",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: digiRole,
  });

  const user5 = <UserEntity>(<unknown>{
    email: "Vistante@conteo.com",
    password: "@Vistante.general*",
    name: "Vistante",
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    version: 1,
    updated_by: null,
    created_by: null,
    deleted_by: null,
    image_url: null,
    type: USER_TYPE.END_USER,
    active: true,
    role: viewRole,
  });

  return [user0, user1, user2, user3, user4, user5];
};

export const getSeedCountry = () => {
  return [{ name: "Honduras", code: "HN" }];
};

export const getSeedDepartment = () => {
  return [{ name: "Yoro", code: "18", countryCode: "HN" }];
};

export const getSeedMunicipality = () => {
  return [
    { name: "Yoro", code: "1801", departmentCode: "18" },
    { name: "Arenal", code: "1802", departmentCode: "18" },
    { name: "El Negrito", code: "1803", departmentCode: "18" },
    { name: "El Progreso", code: "1804", departmentCode: "18" },
    { name: "Jocon", code: "1805", departmentCode: "18" },
    { name: "Morazan", code: "1806", departmentCode: "18" },
    { name: "Olanchito", code: "1807", departmentCode: "18" },
    { name: "Santa Rita", code: "1808", departmentCode: "18" },
    { name: "Sulaco", code: "1809", departmentCode: "18" },
    { name: "Victoria", code: "1810", departmentCode: "18" },
    { name: "Yorito", code: "1811", departmentCode: "18" },
  ];
};

export const getSeedPoliticParty = () => {
  return [
    {
      name: "Democracia Cristiana",
      code: "DC",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Banderas/DC.png",
    },
    {
      name: "Libertad y Refundacion",
      code: "LIBRE",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Banderas/LIBRE.png",
    },
    {
      name: "PINU",
      code: "PINU",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Banderas/PINU.png",
    },
    {
      name: "Partido Liberal",
      code: "PL",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Banderas/LIBERAL.png",
    },
    {
      name: "Partido Nacional",
      code: "PN",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Banderas/NACIONAL.png",
    },
  ];
};

export const getSeedPoliticAlliance = (): alliance[] => {
  return [];
};

export const getSeedBallotPresident = () => {
  const detail: detailType[] = [
    { sequence: 1, party: "DC" },
    { sequence: 2, party: "LIBRE" },
    { sequence: 3, party: "PINU" },
    { sequence: 4, party: "PL" },
    { sequence: 5, party: "PN" },
  ];
  return [
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      marks: 1,
      name: "Presidente",
      detail: detail,
    },
  ];
};

export const getSeedBallotCongress = () => {
  const detail: detailType[] = [
    { sequence: 1, party: "DC" },
    { sequence: 2, party: "LIBRE" },
    { sequence: 3, party: "PINU" },
    { sequence: 4, party: "PL" },
    { sequence: 5, party: "PN" },
  ];
  return [
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      marks: 9,
      name: "Diputados Yoro",
      detail: detail,
    },
  ];
};

export const getSeedBallotMayor = () => {
  const detail: detailType[] = [
    { sequence: 1, party: "DC" },
    { sequence: 2, party: "LIBRE" },
    { sequence: 3, party: "PINU" },
    { sequence: 4, party: "PL" },
    { sequence: 5, party: "PN" },
  ];
  return [
    {
      level: ELECTORAL_LEVEL.MAYOR,
      municipality_code: "1804",
      marks: 1,
      name: "Alcaldes El Progreso Yoro",
      detail: detail,
    },
  ];
};

export const getSeedCandidatePresident = () => {
  return [
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      party: "DC",
      alliance: undefined,
      code: "1",
      box_number: 1,
      name: "Mario Rivera",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Presidente/Chano.png",
    },
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      party: "LIBRE",
      code: "2",
      box_number: 2,
      name: "Rixi Moncada",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Presidente/Rixi.png",
    },
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      party: "PINU",
      code: "3",
      box_number: 3,
      name: "Nelson Avila",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Presidente/NelsonAvila.png",
    },
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      party: "PL",
      code: "4",
      box_number: 4,
      name: "Salvador Nasralla",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Presidente/Nasralla.png",
    },
    {
      level: ELECTORAL_LEVEL.PRESIDENT,
      country_code: "HN",
      party: "PN",
      code: "5",
      box_number: 5,
      name: "Tito Asfura",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Presidente/Asfura.png",
    },
  ];
};

export const getSeedCandidateMayor = () => {
  return [
    {
      level: ELECTORAL_LEVEL.MAYOR,
      country_code: "HN",
      municipality_code: "1804",
      party: "DC",
      alliance: undefined,
      code: "1",
      box_number: 1,
      name: "Jaime Perez",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Alcalde/DC.png",
    },
    {
      level: ELECTORAL_LEVEL.MAYOR,
      country_code: "HN",
      municipality_code: "1804",
      party: "LIBRE",
      code: "2",
      box_number: 2,
      name: "Eduardo Diaz",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Alcalde/EduardoDiaz.png",
    },
    {
      level: ELECTORAL_LEVEL.MAYOR,
      country_code: "HN",
      municipality_code: "1804",
      party: "PINU",
      code: "3",
      box_number: 3,
      name: "Blanca Sabillon",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Alcalde/Pinu.png",
    },
    {
      level: ELECTORAL_LEVEL.MAYOR,
      country_code: "HN",
      municipality_code: "1804",
      party: "PL",
      code: "4",
      box_number: 4,
      name: "Alexander Lopez",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Alcalde/AlexanderLopez.png",
    },
    {
      level: ELECTORAL_LEVEL.MAYOR,
      country_code: "HN",
      municipality_code: "1804",
      party: "PN",
      code: "5",
      box_number: 5,
      name: "Kenya Perello",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Alcalde/Perello.png",
    },
  ];
};

export const getSeedCandidateCongress = () => {
  return [
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      alliance: undefined,
      code: "1",
      box_number: 1,
      name: "Juan Santos",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/01.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "2",
      box_number: 2,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/02.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "3",
      box_number: 3,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/03.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "4",
      box_number: 4,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/04.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "5",
      box_number: 5,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/05.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "6",
      box_number: 6,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/06.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "7",
      box_number: 7,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/07.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "8",
      box_number: 8,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/08.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "DC",
      code: "9",
      box_number: 9,
      name: "",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/09.png",
    },

    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "10",
      box_number: 10,
      name: "Felipe Ponce",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/10.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "11",
      box_number: 11,
      name: "Carlos Diaz",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/11.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "12",
      box_number: 12,
      name: "Araminta Pereira",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/12.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "13",
      box_number: 13,
      name: "Jennifer Diaz",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/13.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "14",
      box_number: 14,
      name: "Melbi Ortiz",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/14.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "15",
      box_number: 15,
      name: "Eblin Soto",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/15.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "16",
      box_number: 16,
      name: "Victor Matamoros",
      image_url:
        "https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/16.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "17",
      box_number: 17,
      name: "Nohemi Amaya",
      image_url: `https://electoral-general-yoro.sfo3.digitaloceanspaces.com/Candidatos/Diputado/17.png`,
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "LIBRE",
      code: "18",
      box_number: 18,
      name: "Edgar Martinez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },

    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "19",
      box_number: 19,
      name: "Carlos Assaf",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "20",
      box_number: 20,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "21",
      box_number: 21,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "22",
      box_number: 22,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "23",
      box_number: 23,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "24",
      box_number: 24,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "25",
      box_number: 25,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "26",
      box_number: 26,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PINU",
      code: "27",
      box_number: 27,
      name: "",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },

    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "28",
      box_number: 28,
      name: "Leonel Lopez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "29",
      box_number: 29,
      name: "Amanda Bonilla",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "30",
      box_number: 30,
      name: "Marco Tinono",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "31",
      box_number: 31,
      name: "Daniela Rivera",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "32",
      box_number: 32,
      name: "Yovanny Mejia",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "33",
      box_number: 33,
      name: "Johanna Bueso",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "34",
      box_number: 34,
      name: "Christian Quesada",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "35",
      box_number: 35,
      name: "Marlen Avila",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PL",
      code: "36",
      box_number: 36,
      name: "David Suarez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },

    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "37",
      box_number: 37,
      name: "Maxima Burgos",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "38",
      box_number: 38,
      name: "Marco Gamez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "39",
      box_number: 39,
      name: "Milton Puerto",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "40",
      box_number: 40,
      name: "Eder Mejia",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "41",
      box_number: 41,
      name: "Lina Casco",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "42",
      box_number: 42,
      name: "Jorge Gamez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "43",
      box_number: 43,
      name: "Maria Dominguez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "44",
      box_number: 44,
      name: "Jose Vasquez",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
    {
      level: ELECTORAL_LEVEL.CONGRESS,
      department_code: "18",
      party: "PN",
      code: "45",
      box_number: 45,
      name: "Lesli Ramos",
      // image_url:
      //   "https://electoral-count.nyc3.digitaloceanspaces.com/candiatos/julio-lopez.png",
    },
  ];
};
