const GameEngine = require('../lib/game_engine');

var xmppSrv = 'pi.softwarewolves.org';
var gameCoordinator = 'sww@pi.softwarewolves.org';
var gameCoordinatorPw = 's0ftwarew0lf';
var moderator = 'softwarewolf@pi.softwarewolves.org';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);