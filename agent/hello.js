/*!
 * Dependencies
 */

var agent = require('./_header')
  , device = require('../device');

/*!
 * Send message
 */

agent.createMessage()
  .device(device)
  .alert('Hello Universe!')
  .badge(1)
  .send();
