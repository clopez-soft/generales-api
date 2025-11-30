export const Get_Ballot_President_Info = (): string => `
select b."name" 
      ,bd.politic_party_id 
      ,pp."name" as politic_party_name
      ,pp.code as politic_party_code
      ,pp.image_url as politic_party_image
      ,bd.political_alliance_id 
      ,pa."name" as political_alliance_name
      ,pa.code as political_alliance_code
      ,pa.image_url as political_alliance_image
      ,c.id as candidate_id
      ,c."name" as candidate_name 
      ,c.box_number as candidate_box
      ,c.image_url as candidate_image
      ,c.flag_url as candidate_flag
 from ballot b 
      inner join ballot_detail bd 
         on bd.ballot_id = b.id
        and bd.active = true
      inner join candidate c 
         on cast(c."level" as text)  = cast(b."level" as text)
        and (c.politic_party_id = bd.politic_party_id 
             or c.political_alliance_id  = bd.political_alliance_id
            )
        and (c.country_id  = b.country_id 
            or c.department_id = b.department_id
            or c.municipality_id = b.municipality_id 
            )
       left join politic_party pp 
         on pp.id = bd.politic_party_id 
        and pp.active = true 
       left join political_alliance pa
         on pa.id = bd.political_alliance_id 
        and pa.active = true 
where b.active  = true 
  and b."level" = 'president'
group by b."name" 
      ,bd.politic_party_id 
      ,pp."name"
      ,pp.code
      ,pp.image_url
      ,bd.political_alliance_id 
      ,pa."name"
      ,pa.code
      ,pa.image_url
      ,c.id
      ,c."name" 
      ,c.box_number
      ,c.image_url
      ,c.flag_url
order by c.box_number asc 
`;

export const Get_Ballot_Congress_Info = (): string => `
select b."name" 
      ,bd.politic_party_id 
      ,bd.political_alliance_id
      ,pp."name" as politic_party_name
      ,pp.code as politic_party_code
      ,pp.image_url as politic_party_image
      ,pa."name" as political_alliance_name
      ,pa.code as political_alliance_code
      ,pa.image_url as political_alliance_image
      ,bd.sequence
      ,c.id as candidate_id
      ,c."name" as candidate_name 
      ,c.box_number as candidate_box
      ,c.image_url as candidate_image
      ,c.flag_url as candidate_flag
 from ballot b 
      inner join ballot_detail bd 
         on bd.ballot_id = b.id
        and bd.active = true
      inner join candidate c 
         on cast(c."level" as text)  = cast(b."level" as text)
        and c.active = true
        and (c.politic_party_id = bd.politic_party_id 
             or c.political_alliance_id  = bd.political_alliance_id
            )
        and (c.country_id  = b.country_id 
            or c.department_id = b.department_id
            or c.municipality_id = b.municipality_id 
            )
       left join politic_party pp 
         on pp.id = bd.politic_party_id 
        and pp.active = true 
       left join political_alliance pa 
         on pa.id = bd.political_alliance_id
        and pa.active = true
where b.active  = true 
  and b."level" = 'congress'
group by b."name" 
      ,bd.politic_party_id
      ,bd.political_alliance_id
      ,pp."name"
      ,pp.code
      ,pp.image_url
      ,pa."name"
      ,pa.code
      ,pa.image_url
      ,bd.sequence
      ,c.id
      ,c."name" 
      ,c.box_number
      ,c.image_url
      ,c.flag_url
order by bd.sequence asc, c.box_number asc 
`;

export const Get_Ballot_Mayor_Info = (municipality_id: string): string => `
select b."name" 
      ,bd.politic_party_id 
      ,pp."name" as politic_party_name
      ,pp.code as politic_party_code
      ,pp.image_url as politic_party_image
      ,bd.political_alliance_id 
      ,pa."name" as political_alliance_name
      ,pa.code as political_alliance_code
      ,pa.image_url as political_alliance_image
      ,c.id as candidate_id
      ,c."name" as candidate_name 
      ,c.box_number as candidate_box
      ,c.image_url as candidate_image
      ,c.flag_url as candidate_flag
 from ballot b 
      inner join ballot_detail bd 
         on bd.ballot_id = b.id
        and bd.active = true
      inner join candidate c 
         on cast(c."level" as text)  = cast(b."level" as text)
        and (c.politic_party_id = bd.politic_party_id 
             or c.political_alliance_id  = bd.political_alliance_id
            )
        and (c.country_id  = b.country_id 
            or c.department_id = b.department_id
            or c.municipality_id = b.municipality_id 
            )
       left join politic_party pp 
         on pp.id = bd.politic_party_id 
        and pp.active = true 
       left join political_alliance pa
         on pa.id = bd.political_alliance_id 
        and pa.active = true 
where b.active  = true 
  and b."level" = 'mayor'
  and b.municipality_id = '${municipality_id}'
group by b."name" 
      ,bd.politic_party_id 
      ,pp."name"
      ,pp.code
      ,pp.image_url
      ,bd.political_alliance_id 
      ,pa."name"
      ,pa.code
      ,pa.image_url
      ,c.id
      ,c."name" 
      ,c.box_number
      ,c.image_url
      ,c.flag_url
order by c.box_number asc 
`;
