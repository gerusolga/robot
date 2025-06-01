function main() {
    putBeeperAndMoveTwice();
    putBeeperAndMoveTwice();
    putBeeperTurnUpLeftAndMove();
    putBeeperAndMoveTwice();
    putBeeperAndMove();
    turnUpRight();
    putBeeperAndMoveTwice();
    putBeeperAndMoveTwice();
    putBeeperTurnUpLeftAndMove();
    putBeeperAndMoveTwice();
    putBeeperAndMove();
    turnUpRight();
    putBeeperAndMoveTwice();
    putBeeperAndMoveTwice();
    putBeeper();

}

function putBeeperAndMove() {
    putBeeper();
    move();
}

function putBeeperAndMoveTwice() {
    putBeeperAndMove();
    move();
}

function turnUpLeft() {
    turnLeft();
    move();
    turnLeft();
}

function turnUpRight() {
    turnLeft();
    turnLeft();
    turnLeft();
    move();
    turnLeft();
    turnLeft();
    turnLeft();
}

function putBeeperTurnUpLeftAndMove() {
    putBeeper();
    turnUpLeft();
    move();
}
