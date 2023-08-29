const timezone = process.env.TIMEZONE

async function Create(database, parameters) {
  return await database.run(
    `CREATE (a:Education {
      name    : $name,
      course  : $course,
      type    : $type,
      start   : $start,
      end     : $end,
      fixed   : $fixed,
      created : datetime({timezone: $timezone})
    }) RETURN a
    `,
    {
      ...parameters,
      timezone
    }
  )
}

async function Update(database, id, parameters) {
  return await database.run(
    `MATCH (a:Education)
      WHERE ID(a)   = $id
      SET a.name    = $name
      SET a.course  = $course
      SET a.type    = $type
      SET a.start   = $start
      SET a.end     = $end
      SET a.fixed   = $fixed
      SET a.updated = datetime({timezone: $timezone})
    RETURN a
    `,
    {
      id: parseInt(id),
      ...parameters,
      timezone
    }
  )
}

async function Get(database) {
  return await database.run(
    'MATCH (a:Education) RETURN a',
    {}
  )
}

async function GetUnique(database, id) {
  return await database.run(
    'MATCH (a:Education) WHERE ID(a) = $id RETURN a',
    {id : parseInt(id)}
  )
}

async function Delete(database, id) {
  return await database.run(
    'MATCH (a:Education) WHERE ID(a) = $id DELETE a',
    {id : parseInt(id)}
  )
}

module.exports = {Create, Update, Get, GetUnique, Delete}
