const GameEngine = require('../lib/game_engine');

var xmppSrv = 'raspberrypi.softwarewolves.com';
var gameCoordinator = 'sww@raspberrypi.softwarewolves.com';
var gameCoordinatorPw = 's0ftwarew0lf';
var moderator = 'softwarewolf@raspberrypi.softwarewolves.com';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);