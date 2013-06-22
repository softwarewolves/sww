const GameEngine = require('../lib/game_engine');

var xmppSrv = 'pi.software.wolf';
var gameCoordinator = 'sww@pi.software.wolf';
var gameCoordinatorPw = 's0ftwarew0lf';
var moderator = 'softwarewolf@pi.software.wolf';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);