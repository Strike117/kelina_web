/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Request = require('./request.model');

exports.register = function(socket) {
  Request.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Request.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('request:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('request:remove', doc);
}