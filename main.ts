input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P8, 45)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P8, 79)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P8, 110)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    kalibre = kalibre + 1
    if (kalibre == 0) {
        pins.servoWritePin(AnalogPin.P8, 45)
    } else if (kalibre == 1) {
        pins.servoWritePin(AnalogPin.P8, 79)
    } else if (kalibre == 2) {
        pins.servoWritePin(AnalogPin.P8, 110)
    } else {
        pins.servoWritePin(AnalogPin.P8, 45)
    }
})
let kalibre = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
kalibre = 0
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "mutlu")
        huskylens.writeOSD("mutlu", 150, 30)
        huskylens.clearOSD()
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "uykulu")
        huskylens.writeOSD("uykulu", 150, 30)
        huskylens.clearOSD()
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(3, "Mutsuz")
        huskylens.writeOSD("Mutsuz", 150, 30)
        huskylens.clearOSD()
    }
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Happy)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Asleep)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Sad)
    }
})
