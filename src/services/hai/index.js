'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/hai', async function (request, reply) {
    let data = await fastify.mongo.db.collection('user').find().toArray()
    fastify.io.emit('hello',data)
    reply.send(data);
    // return 'hai, world!'
  })
}
