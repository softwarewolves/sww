const GameEngine = require('../lib/game_engine');


var xmppSrv = 'softwarewolves.org';
var gameCoordinator = 'sww@' + xmppSrv;
var gameCoordinatorPw = 's0ftwarew0lf';

var moderator = 'softwarewolf@' + xmppSrv;
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);