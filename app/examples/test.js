const GameEngine = require('../lib/game_engine');

var gameCoordinator = 'testgamecoordinator@jabber.org';
var gameCoordinatorPw = 'testgamecoordinator';
var xmppSrv = 'jabber.org';
var moderator = 'softwarewolf@jabber.org';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);