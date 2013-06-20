const GameEngine = require('../lib/game_engine');

var xmppSrv = '172.16.1.2';
var gameCoordinator = 'sww@172.16.1.2';
var gameCoordinatorPw = 's0ftwarew0lf';
var moderator = 'softwarewolf@172.16.1.2';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);