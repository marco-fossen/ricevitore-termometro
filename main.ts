radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    soundExpression.hello.playUntilDone()
})
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . # #
    # # . # #
    # # . # #
    `)
