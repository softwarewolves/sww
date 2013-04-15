const GameEngine = require('../lib/game_engine');

var gameCoordinator = 'sww@awtest1.vm.bytemark.co.uk';
var gameCoordinatorPw = 's0ftwarew0lf';
var xmppSrv = 'awtest1.vm.bytemark.co.uk';
var moderator = 'softwarewolf@awtest1.vm.bytemark.co.uk';
var moderatorPw = 's0ftwarew0lf';

new GameEngine(gameCoordinator, gameCoordinatorPw, moderator, moderatorPw, xmppSrv);