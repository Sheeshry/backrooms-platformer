enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Potion = SpriteKind.create()
    export const Shroom = SpriteKind.create()
    export const Water = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numberofjumps < maxjumps) {
        numberofjumps += 1
        Explorer.vy = -150
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Explorer.isHittingTile(CollisionDirection.Bottom)) {
        numberofjumps = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    music.stopAllSounds()
    game.setGameOverMessage(true, "YOU ESCAPED!!")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numberofjumps < maxjumps) {
        numberofjumps += 1
        Explorer.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shroom, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    music.stopAllSounds()
    game.setGameOverMessage(false, "OOPS =)")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    info.setLife(3)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffeeeeebee444442222222eeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeee2222222444eeeeeeeeffffffffffffffeffffffff
        fffffffeefffffffffffffceeeeebee44422222222eeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeee222222224eeeeeeeecffffffffffffeeeffffffff
        ffffffffeefffffffffffffceeeeeeee4422222222eeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeee22222222eeeeeeeecffffffffffffeefeffffffff
        fffffffffeefffffffffffffceeeeeeee222222222eeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeee2222222eeeeeeeeffffffffffffeeffeffffffff
        ffffffffffeefffffffffffffceeeeeeee2222222eeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeee222e2eeeeeeeeffffffffffffe2efeeffffffff
        ffffffffeefe2effffffffffffceeeebeee222222eeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefeeeeeeffffffffffffe2eeeeeffffffff
        fffffffffeeee2effffffffffffeeeeebeee2222eeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefeeeeeeffffffffffffe2eeeeeeffffffff
        fffffffffee2ee2effffffffffffeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffe2ee2eeeeffffffff
        fffffffffee22ee2effffffffffffeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefefeeeffffffffffffe2ee22eeeeffffffff
        fffffffffee222eeeeffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeefefeeeffffffffffffe2ee222eeeeffffffff
        fffffffffee2222eee2ffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeefefeeecfffffffffffeeee2222eeeeffffffff
        fffffefffeee22222ee2efffffffffffeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffeecfffffffffffe2ee22222eeeeffffffff
        fffffeffeeeee22222ee2efffffffffffeeeeeefeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffeeefffffffffffe2ee2222eeeeeeffffffff
        fffffeffeee2ee22222ee2efffffffffffeeeeeefeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeffffeeefffffffffffeee22222ee22eeeefffffff
        fffffeffeee222ee2222ee2efffffffffffeeeeeffeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffeefffffffffffeee22222ee44eeeeefffffff
        effffeffeee2222ee2222ee2efffffffffffeeffeffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefeeffeffffffefffffffffff2ee22242ee444eeeeefffffff
        eefffeffeee22222ee22222eeefffffffffffeeffeffffefefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffc2ee24442ee4444eeeeefffffff
        eefffeffeee2222222e22222ee2cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffc2ee44442e444444eeeeefffffff
        eefffeffeee44444444ee2222ee2efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffc2ee44442e4444444eeeeeffeffff
        eefffeffeee444444444ee2442ee2efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefeffffffffffffffe2ee4444ee44444444eeeeeffeffff
        eefffeffeee4444444444ee24422e2efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeefefeefffffffffffffe2ee4444ee444444443eeeeeffeffff
        eefffeffeee444444444444e24422eeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffefffffffffffffeeee4444ee44444444334eeeeffecfff
        eefffeffeee3334ddb444444ee4422eeefffffffffffffeffffeeeeeeefffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefefefffffffffffeeee2442e4444444d433d4eeeeffecfff
        eeffeeffeeedddbdddd444444ee4422eeefffffffffffffeefeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffeee22442e444444dddb3ddbeeeeffecfff
        eeffeeffeeedddbddddd3444444e4222eeffffffffffffeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeffffffffffffe2224ee444443ddddbdddbeeeeffecfff
        eeffeeffeebdddbddddddd444444e222efffffffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeefffffffffffffe222ee44444ddddddbdddbeeeeffecfff
        eeffeeffeebdddbdddddddd344444ee2effffffffffffffeeeee222222eeeeeeeeeffffffffffffffffffffffffffffeeeeeee222222eeeeeefffffffffffffe22e444443dddddddbdddbeeeeffecfff
        eeffeeffeebdddbdddddddddd44444eeefffffffffffffffeeee22222222eeeeeeeefffffffffffffffffffffffffeeeeeee22222244eeeefffffffffffffffe2e44444dddddddd1bdd1beeeeffecfff
        eeffeeffeebdddbd1ddddddddd34444eefffffffffffffffceeee444442222eeeeeeefffffffffffffffffffffffeeeeee222222444eeeeffffffffffffffffe2e4444ddddddddd1bdd1beeeeffeffff
        eefffeffeeedddbd1ddddddddddd444eeffffffffffffffffceeee444422222eeeeeeefffffffffffffffffffffeeeeee222222244eeeeeffffffffffffffffe2e444dddddddddd1bdddbeeeeffeffff
        eefffeffeeedddeddddddddddddd4342effffffffffffeffffeeeee422222222eeeeeeefffffffffffffffffffeeeeeee22222222eeeeefffffffffffffffffe2e444ddddddddddde3dd4eeeeffeffff
        effffeffeee333e3dddddddddddd4d42ecfffffffffffefffffeeeee2222222eeeeeeeefffffffffffffffffffeeeeeeeee22222eeeeeffffffffffffffffffe4e334d1ddddddddde434eeeeefffffff
        fffffeffeee444e444ebdddddd1dbd324ccffffffffffeffffffeeeee222222eeeeeeeeffffffffffffffffffffeeeeeeee2222eeeeeffffffeffffffffffffe44d3b11ddddd3ee4e444eeeeefffffff
        fffffeffeee444eeeeee4ddddd1dbdd44ccffffffffffeeffffffeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeffffffeeffffffffffffe44ddb11ddddbeeeee222eeeeefffffff
        fffffeffeee222eeeeeeee3dddddb1d44ccffffffffffeeeffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeefffffceeeffffffffffcfe4bddbdddddeeeeeee222eeeeefffffff
        fffffeffeee222eeeeeeeee43dddb1d4dccffffffffffeeeecfffffeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeefffffeee2effffffffffcfbbbddbdddbeeeeeeeee22eeeeefffffff
        fffffeffeee222eeeeeeeeeee3d3bdd4dccffffffffffe22eeeffffffeeeeeeeeeeeeffffffffffffffffffffffffffffeeeeeeffffffeee22effffffffffcfbbbddbdddeeeeefeeee22eeeeefffffff
        fffffeffefe22eeeeefeeeeee444ed44bfcfffffffffcee22eeeffffffefffffeeeeffffffffffffffffffffffffffffffffeeffffffeee222ecfffffffffffeb4ddedd4eeeeeffefe22eeeeffffffff
        fffffeffffe22eefeffeeeeee444e34ebffffffffffceeee222eefffffffffffeeeeeffffffffffffffffffffffffffffffffffffffee22222eeccfffffffffe4434e344eeeeeffefe22efeeffffffff
        ffffffffffe2eeffffffeeeee24ee44ebffffffffffcee444222eefffffffeeeeeeeeefffffffffffffffffffffffeeeeeeeffffffee22e444eeeecffffffffe4e44e444eeeeeffffee2efeeffffffff
        ffffffffffeeeeffffffeeeee22ee42eeffffffffcceee444442eccffffffeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffce244444eeeecffffffffeee44e442eeeeeffffee2efeeffffffff
        ffffffffffeeeeffffffeeeee22ee42eeffffffffcceee3dd344ecccffffffeeeeeeeeeeeeeffffffffffffeeeeeeeeeeeffffffffee444dddeeeeeffffffffeee42e222efeeeffffee2efeeffffffff
        ffffffffffeeeeffffffeeefe22ee22eefffffffceeee4dddd34eeeccffeffcee22eeeeeeeeeefffffffeeeeeeeeee2eefffcffffcee44dddd4eeeeffffffffeee22e222efeeeffffee2efeeffffffff
        ffffffffffeeeeffffffefefe22ee22eefffffffcceee4d1ddd4eeeeccfefffcee222eeeeeeeeeffffeeeeeeeee222eeefffeffccce44ddd1d4eeeeffffffffeee22e222efeeeffffeeeeffeffffffff
        ffffffffffeeeeffffffefefe22ee2eeeffffffffceee4d1ddd34eeeecceefffeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeefffeefcceee43ddd1d4eeeeffffffffeee22e222effefffffeeeeffeffffffff
        ffffffffffeeeeffffffeeffe22ee2eeeffffffffcceee4dddd34eeeeece2efffeeeeeeeeeeeeeffffeeeeeeeeeeeeecffe2eccceee4ddddd4eeeecffffffffeee22e222effeeffffeeeeffeffffffff
        ffffffffffeeeefffffffeefe22ee2eeefffffffffceee443ddddeeeeeee4ecceceeeeeeeeeeeeeffeeeeeeeeeeeeefece24eeeeeeedddd444eeecfffffffffeee22e222efeefffffeeeeffeffffffff
        ffffffffffeeeefffffffffee22ee2eeeffffffffffcee22ee43beeeeeee4eeceefeeeeeeeeeeeeeeeeeeeeeeeeeeffeee44eeeeeeeb34ee22eccffffffffffeee22f222effffffffeeeeffeffffffff
        ffffffffffeeeeffffffffeeee2ef2eeefffffffffffcee2eee4eeeeeee434eeeeffeeeeeeeeecffffceeeeeeeeeeffeee43eeeeeee442ee22effffffffffffeee2efe2eeefffffffeeeeffeffffffff
        ffffffffffeeeeefeeeffeeeee2ef2eeeffffffffffffee2eee2eeeeeeebd3eeeeffeecceeeccfffffffcceeeeceefceeeddeeeeeeee22eeeeeffffffffffffeee2efe2eeeefeeeeeeeeeffeffffffff
        ffffffffffeeeeeeeeeeeeeeee2ef2eeeffffffffffffeeeeeeeeceeeeeb1deeeecceefffffffffffffffffffefeecceeb1deeeeeceeeeeeeeeffffffffffffeee2efeeeeeeeeeeeeeeeeffeffffffff
        ffffffffffeeeeeeeeeeeeeeee2ef2efeffffffffffffeeeeeeeeccccee4ddeeb4eceefffffffffffffffffffeceecebebddeeeccceeeeeeeeeffffffffffffeee2efeeeeeeeeeeeeeeeefffffffffff
        ffffffffffeeeeeeeeeeeeeeeeeefeefeffffffffffffeeeeeeeefccccee44eed3eeeecffffffffffffffffffeeeecebbe34eecccfceeeeeeefffffffffffffeee2efeeeeeeeeeeeeeeeefffffffffff
        ffffffffffeeeeeeeeeeeeeeeeeefeefeffffffffffffeeeeeeeeffcccce4eeebdeebeecccffffffffffffccceebbeceee44eccfffceeeeeeefffffffffffffeeeeefeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeefeefefffffffffffffeeeeeeefffffce2eeee4eedeecceffffffffffffeeeeebbcceee22effffffeeeeeeefffffffffffffeeeeefeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeefeefefffffffffffffeeeeeeeffffffe2ecceeceeeeeeecffffffffffceeebeeeffeee22effffffeeeeeeefffffffffffffeeeeefeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeefeefefffffffffffffeeeeeeeffffffe2ecfeecceeeee4effffffffffebeeeeeeffeee2eeffffffeeeeeeeffffffffffffffeeeefeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeefeefefffffffffffffeeeeeeeffffffe2effeeffeeeee3efffeeecfffe4eeeeeeffeeeeefffffffeeeeeeeffffffffffffffefeefeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeffeefefffffffffffffeeeeeeeffffffeeeffeeffeeeceecfffe34efffeeececeeffeeeeefffffffeeeeeeeffffffffffffffffeefeeeeeeeeeeefeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeefefffffffffffffeeeeeeeffffffeeeffeeffeecfeecfffeeeefffeecfefeeffeeeeefffffffeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeffffffeeeffeeffeecfeeffffeeecfffeeffefeeffeeeeefffffffeeeeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeffffffe2effeeffecffeeffffeeeffffeeffefceffeeeeefffffffeeeeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeefffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeffffffeeeffeeffecffeefffffefffffeeffeffefffeeeefffffffeeeeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeffffffeeeffeeffefffeefffffefffffeeffeffefffeeeefffffffeefeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffeeeeeeeffffffeeeffeeffefffeefffffefffffeeffeffefffefeeffffffffeeeeeeffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffff
        fffffffffffeeeeffffffffffffffeefffffffffffffffeeeeeeeffffffeeeffeeffefffeeeccceeecccceeffeffffffefeeffffffffeeeeeeffffffffffffffffeeffffffffffeeeeeeffffffffffff
        fffffffffffeeeffffffffeeeeeffeefefffffffffffffeeeeefeffffffeeeffeeffeeffeeeee4444444eeeffeffffffffeeffffffffeeeeeeffffffffffffffffeeffefffffffffffeeffffffffffff
        fffffffffffeeeeeeeeeeeeeeeeffeefffffffffffffffeeeeefeffffffeeeffeeffeeffeeeeeeeeeeeeeeeefeffefffffeeffffffffeeeeeeffffffffffffffffeefeeeeeeeeeeeeeeeffffffffffff
        fffffffffffeeeeeeeefffffeeeffeefffffffffffffffeeeeefeffffffeeeffeeffeeeeeeeee222222eeeeeeeffffffffeeffffffffeeeeeeffffffffffffffffeefffffffffeeeeefeffffffffffff
        fffffffffffeeeefeeeeeeeeeeeffeefffffffffffffffeeeeeffffffffeeefffeffe2e4444444444444444422eefffffeeeffffffffeeeeeeffffffffffffffffeeffeefefffffffffeffffffffffff
        fffffffffffefeeeeeeeeeeeeeeffeffffffffffffffffeeeeeffffffffeeefffeee244444443333333344444442effffeeeffffffffeeeeeeffffffffffffffffefffeffffffffffffeffffffffffff
        fffffffffffefeefffffeeeeeeeffeffffffffffffffffeeeeefffffffffeefffee2244444444444444444444222eeeeeeeeffffffffeeeeeeffffffffffffffffefffeffffffffffffeffffffffffff
        fffffffffffeffffffffffffffeffeffffffffffffffffeeeeefffffffffeeeeeee222222222222222222222222222eeeeeefffffffffeeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffeffffffffffffffeffeffffffffffffffffeeeeeeffffffffeeeeee44444444444444444444444444444eeeeeffffffffeeeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffeffffffffffffffeffefffffffffffffffffeeeeefffffffeeeee44444444444444444444444444444444444effffffffeeeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffefffffffffffffffffefffffffffffffffffeeeeeffffffeeeeee24e24422222222222222222222222e22eeeeefffffffeeeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffefffffffffffffffffeeeeeecffeeeeeeeeeeeeeeee2222222222222e22eee2eeeeeeeeeeeeffceeeeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffefffffffffffffffffeeeeeccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccceeeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffefffffffffffffffffeeccefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffcceeeeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeffffffffffffffffcccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcceeffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeffffffffffffffffceffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffccffffffffffffffffefffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffeffeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeefffffffffffffffffffffffff
        fffffffffffffffffffffeeeeeeeeffefffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffefeeefffffffffffffffffffffff
        ffffffffffffffffffeeeeeeeefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffeeeeeeefffffffffffffffffffff
        ffffffffffffffffeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffeeefeeefffffffffffffffffff
        ffffffffffffffeeeeeeeeffffffffeeccffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffeeefeeefffffffffffffffff
        ffffffffffffffffeeefffffffffeecccffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffcefffffffffeeefeeefffffffffffffff
        ffffffffffffffeeeffffffffffecccffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffcccefffffffffeeeffeffffffffffffff
        fffffffffffffffffffffffffecccfffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffcccefffffffffeeffffffffffffffff
        fffffffffffffffffffffffecccfffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffcceffffffffffeeffffffffffffff
        fffffffffffffffffffffeeccffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffceeffffffffffffffffffffffff
        fffffffffffffffffffecccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffccefffffffffffffffffffffff
        fffffffffffffffffeeccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffccefffffffffffffffffffff
        ffffffffffffffffeccffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffccefffffffffffffffffff
        ffffffffffffffeccfffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffceffffffffffffffffff
        ffffffffffffeccffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffcccffffffffffffffff
        fffffffffffccffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffcefffffffffffffff
        ffffffffffffffffffffffffffffeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffcefffffffffffff
        fffffffffffffffffffffffffffeeefeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffcccfffffffffff
        ffffffffffffffffffffffffffeeefeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeffffffffffffffffffcecfffffffff
        fffffffffffffffffffffffffeeffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefeeefefffffffffffffffffcfffffffff
        ffffffffffffffffffffffffeeffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeffeeffffffffffffffffffffffffffff
        ffffffffffffffffffffffeefffeeeeeeeeeeffeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeffeefffffffffffffffffffffffffff
        fffffffffffffffffffffeefffeeeeeeeeeeffeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeffeeeeffffeffeeffffffffffffffffffffffffff
        ffffffffffffffffffffeeffeeeeeeeeeeeffeffffeeeeffeeeffeeeeeefeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeefeeeffffeefeffeeeeeffffffeefffffffffffffffffffffffff
        fffffffffffffffffffeeffeffeeeeefeeffffffeefefffeefefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeefeefeffffeffffefeeeffffffeeffffffffffffffffffffffff
        ffffffffffffffffffeeffeffffeeeefeffffffeeeeffffefffffffffefffeeffffeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeefeffeffffeeeeffffffeefeeffffffffefffffffffffffffffffffff
        fffffffffffffffffefffffffffefffeffefeeeeeeffffeefffffffffffffffffffeeeefffefffffffffffffeeeeffffefeffffeffffeeffffeeeeefffffeffffffffffffeffffffffffffffffffffff
        ffffffffffffffffffffffffffffffeffeffffffffffffefffffffffffffffffffefffffffffffffeeeeeeeffffeeeeeeeeeeeefeffffeffffffeeeefffffeffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffeffefffffffffffffffeeffffffffffffffffffffffffeefffffffffffffffffffffffffffffefffffffefffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffe22efcccfcfcccfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffe432cbbbbbbcbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffeeeeffcccccffccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    numberofjumps = 0
    maxjumps = 2
    sprites.destroyAllSpritesOfKind(SpriteKind.Flower)
    sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.showLongText("Whew! Nice job surviving the Infinite Garden! The final level you will have to survive contains Smilers, poisonous drinks that spawn Howlers, along with lava and floating objects (be careful!!). WARNING: THE DIM LIGHTING WILL MAKE THINGS HARD TO SEE. Make sure you know where you're going =)", DialogLayout.Full)
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004600000000400012904000800012908000c0001290c001000012510001400012414001800012518001c0001241c002000012020002400012224002800012228002c0001222c003000012030003400012434003800011b38003c00011d3c004000011d06001c00010a006400f401640000040000000000000000000000000000000002420008000c0001180c001000011d1400180001201c002000011d20002400011b28002c00011b2c003000011d30003400011b34003800011638003c0001183c004000011208001c000e050046006603320000040a002d0000006400140001320002010002330000000400011108000c00011410001800020d121c002000011120002800020a0f2c003000011130003800020f163c004000010f`), music.PlaybackMode.LoopingInBackground)
    info.startCountdown(60)
    Explorer.setPosition(10, 95)
    tiles.setCurrentTilemap(tilemap`level16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        coinlevel3 = sprites.create(assets.image`myImage0`, SpriteKind.Coin)
        tiles.placeOnTile(coinlevel3, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        coinlevel3,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
        Flower3 = sprites.create(assets.image`myImage4`, SpriteKind.Flower)
        tiles.placeOnTile(Flower3, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value22 of tiles.getTilesByType(assets.tile`myTile11`)) {
        potion = sprites.create(assets.image`potion10`, SpriteKind.Potion)
        tiles.placeOnTile(potion, value22)
        tiles.setTileAt(value22, assets.tile`transparency16`)
    }
    for (let value23 of tiles.getTilesByType(assets.tile`myTile12`)) {
        chair = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
        tiles.placeOnTile(chair, value23)
        tiles.setTileAt(value23, assets.tile`transparency16`)
        animation.runMovementAnimation(
        chair,
        "c 0 100 0 -100 0 0",
        3000,
        true
        )
    }
    for (let value24 of tiles.getTilesByType(assets.tile`myTile13`)) {
        shroom = sprites.create(assets.image`myImage7`, SpriteKind.Shroom)
        tiles.placeOnTile(shroom, value24)
        tiles.setTileAt(value24, assets.tile`transparency16`)
        animation.runMovementAnimation(
        shroom,
        "c 0 100 0 -100 0 0",
        3000,
        true
        )
    }
    for (let value25 of tiles.getTilesByType(assets.tile`myTile14`)) {
        water = sprites.create(assets.image`potion4`, SpriteKind.Water)
        tiles.placeOnTile(water, value25)
        tiles.setTileAt(value25, assets.tile`transparency16`)
        animation.runMovementAnimation(
        water,
        "c 0 -100 0 100 0 0",
        3000,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Water, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    info.setLife(3)
    numberofjumps = 0
    maxjumps = 2
    sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
    game.showLongText("Congrats on making your way out of the Poolrooms! That was really easy, wasn't it? Well, you better brace yourself for the Infinite Gardens and level \"Run For Your Life!\", where entities such as Smilers and Howlers reside. They will follow you around! A few tips: Don't pick any flowers, don't ingest strange substances, and avoid lava if it's present. Finally, if you haven't realized already, you are able to double jump (you might need that now)! I wish you the best of luck, explorer.", DialogLayout.Full)
    music.play(music.createSong(hex`00fa000408040305001c000f0a006400f4010a000004000000000000000000000000000000000269000000040002111d08000c00011e1000140002162218001c00011e2000240002111d28002c00011e3000340002111d38003c0001164000440002111d48004c00011e5000540002111d58005c0001226000640002142068006c00011d70007400020f1b78007c00020a1606001c00010a006400f401640000040000000000000000000000000000000002600000000800011d08001000011e10001800012218002000011e20002800011d28003000011e30003800011d38004000011640004800011d48005000011e50005800011d58006000012260006800012068007000011d70007800011b78008000011607001c00020a006400f401640000040000000000000000000000000000000003300000000800010a10001800010d20002800010c30003800010540004800010650005800010860006800010c70007800010a`), music.PlaybackMode.LoopingInBackground)
    info.startCountdown(45)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level11`)
    Explorer.setPosition(10, 95)
    scene.setBackgroundImage(img`
        ccffcfcfcfccccccccccbbbdddddddddbbbbbdddddbddddbddbbbdddbbddddbdddbbdddbbdddbdbdbbdddbbdddbdddbbdddbdddbbdddbdddbbdddbddbbdddbbc66bbbbbbbbbbcccccccccccccccffcfc
        ccffcfcfcccfcccccccccbbddddddddddbbbbdddddbbdddbdddbbddddbddddbddddbdddbddddbdddbddddbbdddbdddbbddbbdddbdddbbdddbdddbdddbddddbcb6bbb999bbbcccccccccccccccffcfcfc
        ccfccfcfcccccfccccccccbbddddddddddbbbbdddddbdbddbdddbddddbddddbddddbddddddddbdddbdddddddddbdddbdddbddddbdddbdddbdddbbddbddddbcbbb9999999bccccccccccccccccffcfcfc
        fcfccfcfcccccccccccccccebdddddddddbbbbddddddbbdddddddbddddbddddddddbddddbdddbdddbddddbbdddbdddbdddbdddbddddbdddbdddbddbbdbbbbbbb9999999bcccccccccccccccfcfcffcfc
        fcfccfcfccccccccccccccccebdddddddddbbbbdbdddbbdddbdddbddddbddddbddddddddbdddbdddbddddbddddbdddbdddbdddbdddbbddbbddbbdbbdddbbbb99999999bccccccccccccccfcfcfcffcfc
        fcfccfcfccccccccfccccccccee3ddddddddbbbbdbdddbddddbdddbddddddd1dddddddddddddbdddbdddddddddbdddbdddbdddbdddbddbbddbddddddddbbb99999999beccccccccccccccfcfcfccfcfc
        fcfccfcfcccccccccccccccccccebdddddddddbbbdbdddbdddddddddddddddddddddddddbdddbdddbbdddbdddbbdddbddbbddbdddbdddbddbbdbbddddbb999999999becccccccccccccfcccfcfccfcfc
        fcfccfcfcccccccccccccccccccccbdddddddddbbddddddbd1dddddbd11dd11dddd1dd1dd11dd1ddbd111dd11ddddddddbdddbdddbddbbddbddbddddbb9999999ddbeccccccccccccccfcccfcfccfcfc
        fbfccfcfccccccccccccccccccccccbdddddddddbbddbdddbdddbdddbdddbdddbdddbddbbdddbdddbbdddddddddddbdddbddbdddbdddbddbd1dddddbb999999dddbeccccccccccccfccfcfcfcfccfcfc
        fbfccfcfccccccccccccccccccccccebdddddddddbbdbbbbbbbbbbb3bbbbbbbdbbddbbbbbbbbbdddbbbddddddddddbddbbddbddbbddbddbbddddddbb999999dddbcccccccccccccccccfcfcfcfccfcfc
        fbfccfcfccccccccccccccccccccccccbdddddddddddbbcebbebbbeb3bbbbcb99cb9bc99cb9bc999bccb9b699cb99cb9b69bc9dbbbbbbbb99bbbbbb999999dddbecccccccccccccccccfcfcfcfccfcfc
        fbcccfccccccccccccccccccccccccccccdddddddddd9bcebbebbeeebecbbccbcccbccbcccbccbbccccbbccbbccbcccbccbcbbbebbbbbbcb9bbbb99999dddddbcccccccccccccccccccfcccfcfccfcfc
        cbccbccccccccccccccccccccccccccccccdddddddddbbbdbbdbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99dddddddcebccccccbcccccccccccfcccfccccfcfc
        cbccbcbcbcccccccccccccccccccccccccccdddddddddddddd1dddddddddddddddddddddddddddbdbddddddddddddddddddddddddddddddbbddb999dddd1beebccccccbccccccccccccfcccfccccfcfc
        cbccbcbcbccccccccccccccccccccccbccccbdddddddddddddd1ddddddddddddddddddddddddddbdbdddddddddddddddddddddddddddbdbbddb9999ddd1beebcbbbcbccccccccccccccccccfccccfcfc
        cbcbbcbcbcccccccccccccccccccccccbcccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999dd1becbbbbbbbcccccccccccccccccccfccccfcfc
        fbcbbcbcbccccccccccccccccccccccccccccccbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd9dd1d999dddddbecbbbbbbbccccccccccccccccccccfccccccfc
        cbcbbfbcbcbcccccccccccccccccccccffcccbccd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd1dd9ddddddeebbbbbbbccccccccccccccccccccccfccccccfc
        cbcbbfbcbcbccccccccccccccccccccccffcbbbccd1d111dddddddddddddddddddddddddddddddddddddd11dd1dd1dd1dd1dddd1dd9d11dddd11d1deebbbbbbbccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbbbccccbccccccccccccccccefccbbccd1d111ddddddddddddddddddddddddddddbdddddddddddddddddddddddddddd99dddddd11d1debbbbbbbeeccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbbbbcbcbbbcbccccccccccccccffcbbbcbd1111dddddddddd1ddddddddddddddddbdddddbbbdddddddddddddddddddd9dddddd1111debbbbbbeeeeccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbbcbcbbbbbbbbccccccccccccffcbbbcb11111ddddddddddddddddddddddddddddddddbdddddddddddddddddbdbd1ddddd11111bebbbbbbeeeecccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbbcbcbbbbbbbbbbccccccccccccfccbbcbd1d11ddbbbbbbbbbbbbbbbbcbbbccccbbbbcccccccbcbcbbbbbbbdbbbb9bbdd11111bebbbbbbeeeeecccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbccbcbbbbbbbbbbbccccccccccceefcbbbbd1d11dddddddddddddddddddddbbbbbddddbdbbdbddddddddddddddb9ddd111111bebbbbbeeecceecccccccccccccccccccccccccccccccfb
        cbcbbfbcbcbcbccbcbbbbbbbbbbbcccbbcbccccceeffcbbbd1111dddddddd1ddd1ddd11dddddddddddddddddddddddddddddddbddd111111bbbbbbeeeeecccccccccccccccccccccccccccccccccccfb
        cbcbbfbcbcbcbccbcbbbbbbbbbbbbccbbcbccccccceefcbbcb1dd1dddddddddddddddddd99ddddbdddd9999dddddddddddd9999dd11111dbbbbbbeeeeeecccccccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbccbcbbbbbbbbbbbbbcbbcbbccccccceeffebcb1d11dd1ddd1d11ddd1dd9999dddddddddd999999ddd99999999dd11111dbbbbbbeeeeeeccccccccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbccbcbbbbbbcbbbbbbcbbbbbbcccbcccceefcbcb11d11dddddddddddddd999ddddddddddd99ddddddddd9d9dddd11111dbbbbbeeeeeccbccccccccccccccccccccccccccccccccccccfc
        cbcbbfbcbcbcbccbcbbbbbbcbbbbbbcbbbbbbcccbcccccccfcbbbd1d1ddddd1dddd1dd99999dddddddbdd99dddddddddddddddd1111bbbbbeeeeccbbbbbcbcccccbcccccccbcccccccccccccccccccfc
        cbcbbfbcbcbcbbcbcbbbbbbcbbbbbccbbbbbbbccbbbccccccccbbbd1d11d1dd11111ddd9999dddddddbdd99dddddddddddddd11111bbbbbeeeeeccbbbbbcbcccccbccbcbbcbcccccccccccccccccccfc
        cbcbbfbcbcbcbbcbcbbcbbbcbbbbbccbbbbbbbbcbbbcccbbbcccbbbd1d11d1ddddd1dd99bd9dddddbbddd9dddddddddddddbd1d1dbbbbbeeebcbbbbbbbbcbccbccbcbbbbbcbccccccccccccccccccccc
        cbcbbfbcbcbcbbcbcbbbbbbcbbbbbccbbbbbbbbbbbbbccbbbbccccbbbd111d1dddd11d99bdddddddbbdddddddddddddddddd1d1dbbbbeeeebbbbbbbbbbbcbccbcbbcbbbbbccccccccccccccccccccccb
        cbcbbfbcbcbcbbcbcbccbbbcbbbbbccbbbbbbbbbbbbbccbbbbcccccbbbd1111dddddd1ddddddddddddddddddddddddddddd1d1dbbbbebbbbbbbbbbbbbbbbbcbbcbbcbbbbbcbccccccccccccccccccccb
        cbcbbfbcbcbcbbcbcbcbbbbcbbbbbccbbbbbdbbbbbbbbbbbbbcccccccbbd11ddddddddddbdddbddddddddddddddddddddddd1dbbbbebbbbbbbbbbbbbbbbbbbbbcbbcbbcbbcbccccccccccccccccccccb
        cbcbbfbcbcbcbbcbcbcbbbbcbbbbbccbbcbbd9bbbbbbbbbbbbcbccccccbbd11dddddd1ddddddbddddddd9dddddddd9ddddd1dbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbcbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbcbbbbcbbbbbccbbcbbbdbbbbbbbbbbbbbbccccccccbd11dddddddddddddddd999999999d999d1ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbcbbbbbbbbbbccbbcbbbd9bbbbbbbbbbbcbbbbccccccbd11dddddddddddddddd999999999999dddddbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbcbbbbbbbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbcbbbbbbbbbbccbbcbbbdd9bbbbbbbbbbcbbbbbbcccccbd111dddddd99d99dddd999999999bdddddbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbcbbbbbbbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbccbbbbbbbbbccbbbbbbdd99bbbbbbbbbbbbbbbbbbccccbd111dddddddbbbbbbbbbbbbbbbbdd99bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbcccbbbbbbbbbcbbbbcbbb999bbbbbbbbbbbbbbbbbbcccccbd111dddddd99999bbbbbbbbbd99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcccccccccccbccccccccc
        cbcbbfbcbcbcbbcbcbcbcbbbbbbbbbcbbbbcbbb9999bbbbbbbbbbbbbbbbbbbbcccbd11dddddd99999999b9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbcbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbddd99bbbbbbbbbbbbbbbbbbbbbbccb1d9ddd999dd99999999d9dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbcbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbccbbbbcbbbdbd999bbbbbbbbbbbbbbbbbbbbbbcbd1d1d1ddd11dd11dddd1dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbccbbbbcbbbdbd9999bbbbbbbbbbbbbbbbbbbbbbbd1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbb999999999b9999999bbbbbbbbdbd1111111111111111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbbddd9999999ddddddd999999bddbd11ddbbbbbbbbddddd11dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbbbbbd9ddd9ddddddddddddddddddd11ddbbbbcbbbbdddd11dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbbbbbddddddddddddddddddddddddd1111dd11dd1dd1dd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbbdbbddddddddddddddddddddddddd1111dddddd1ddddd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbbdbbdbbdbddddddddddddddddddddddd111ddddddd1ddddd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66bbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbb9bbbdbdbddddddddddddddddddddddd11dbddddbd1dd1dd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbb9bbbdbdbddddddddddddddddddddddd1111ddddbdddd1dd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc6cccccccccccbccccccc
        cbcbbfbcbcbbbbcbcbcbcbbbbbbbbbcbbbbcbbb9bbbddbbddddddddddddddddddddddd111dddddbd1dd1dd111ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc6cccccccccccbccccccc
        cbcbbcbcbcbbbbcbcbcccbbbbbbbbbcbbbbcbbb9bbbddbbdddddddddddddddddddddd111ddbd1dbddddddd111d9dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc6cccccccccccbccccccc
        cbcbbcbcbcbbbbcbcbcccbbbbbbbbbcbbbbcbbb9bbbddbbdddddddddddddddddddd111ddbdbdddbddbd1dd111d999bbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bcccccccccccccbccccccc
        cbcbbcbcbcbbbbcbcbcccbbbbbbbbbcbbbbcbbb9bbbddb9dddddddddddddddd11111dbbd11dd11dd1dddbbddd99999ddddddd999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bc6cccccccccccbccccccc
        cbcbbfbcbcbbbbcbbbcccbbbbbbbbbcbbbbcbbb9bdbdddddddddddddddddd1111ddbbdd1dbbb4b44334eeeeecb99ddddd999999b9bbbbbbbbbbbbbbbbbbbbbbbbbbbbb6bb6bc6cccccccccccbccccccc
        cbcbbcbcbcbbbbcbbbcccbbbbbbbbbcbbbbcbbbdbdbdddddddddddddd11111ddbbbdd11deeeee444444eeeeeecb99ddd11d9999999bbbbbbbbbbbbbbbbbbbbbbbbb6bb6bb66c6ccccccccccc6ccccccc
        cbcbbcbcbcbbbbcbbbcccbbbbbbbbbcbbbbcbbbdbdbdddddddddd1111111ddbbbddd1dd4eeeeeeee444eeeeeefcb999bddd999999999bbbbbbbbbbbbbbbbbbbbbbb6bb66666c6ccccccccccc6ccccccc
        cbcbbcbcbcbbbbcbbbcccbbbbbbbbbcbbbbbbbdddddddddddd1111111dddbbbddd111bee4e4444444444eeeeeeeeb999bbbbd999999999bbbbbbbb9b6bbbbbbbbbb6bb66666c6ccccccccccc6ccccccc
        cbcbbcbcbcbbbbcbbbcccbbbbbbbbbbbbbbbbddddddddd11111ddddddbbbdddd11ddbeee4e444444444eeeeeeeeeeb9999bbbbd9999999999999999b6b96bbbbbbb6bb66666c6ccccccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbcccbbbbbbbbbbdb6bbbddddddd11111dd1ddbbbbdddd111db4442244444442444eeeeeeeeeeee999999bbb999999999999999b6b96bbbbb6b6bb66666c6ccccccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbc6bbbbbbbbbbbdbcbbddddd11111ddddddbbbbdddd1111d7eeeee4444442224444eeeeeee2eeeeb999999bbbd9999999999999699bbbb6b6b6666666666cc6cccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbbbbbbbbbbbbbbdbbdddd11111ddd1ddbbbbddddd111111beeeeeeeee44424444442eeeeeeeeeeecb9999999cbbb99999999999b9969bb6b666666666666cc6cccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbbbbdbbbddddbbdbbdd11111ddd1ddbbbbbdddd111111d7ee442244444e4e444442eeeeeeeeeeeeecb9999999bbbbbd9999999999999bb6b6666666666666c6cccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbbbbddddddddbddd1111ddddd1ddbbbbddddd1111111d7ee42222224444442244422eeeeeeeeeeeeecc999999999bbbbb99999999999996bb66666666666666cccc6ccc6ccccccc
        cbcbbcbcbcbbbbbbbbbbddddddddddd111ddddd11dbbbbbddddd11111111dee42222222224422222444422eee22eeeeeeeeccb999999999bbbbb99999999999999b6666666666666c6cc6ccc6ccccccc
        cbcbbcbbbcbbbbbbbdbddddddd11111dddddd1ddbbbbbdddddd111111ddd7ee44ee222244444444444422eeeeeeeeefeeeecccb999999999999bbbb99999999999999b6666666666c6cc6ccc6ccccccc
        cbcbbcbbbbbbbbbbddddddd11111dddddd11dbbcbbbdddddd1111111dd77eee4442222244444444442222e2eeeeeeeeeeefeeccb999999999999bccbbb99999999999999b6666666666c6ccc6ccccccc
        cbcbbcbbbbbbbbbddddd11111ddddddd1ddbebbbbbddddd1111111dddbeeeeeeeeeeeee44444442e42242eeeffeeeeeffeeccccc6b999999999999bbbbbb999999999999999b6666666c6ccc6ccccccc
        cbcbbcbbbbbbbbbdd1111dddddddddddbeccbbbbbdddd11111111dddbeeee44222244ee444222222442222eeeeee2eeeeeeeceecccb99999999999999bbcbb9999999999999999bb666c6ccc6ccccccc
        bbcbbbbbbbddddd111ddddddddddddbecbbbbbbddddd1111111dddd7eee2224e222224444222422222222eeeeeeeeeeeeeeecfcecccbb99999999999999bccbbb99999999999999bb66c6ccc6c6ccccc
        bbbbbbdbdd1111dddddddddddddbeccbbbbbb999ddd1111111dd1d7eeee2eeeeeeeeeeeeeeeeeeee2222eeeeee2ee2eeeeeeeeeeeccc6b9999999999999996cccbb99999999999999bb66c6c6c6ccccc
        bdbbdbd111dddbb9dddddddddbecbbbbbbb999ddd11111111dddb7eeeeeeeeeeeeeeeeeeeeeeeee224222e22222222222eeeeeee2eccccbb99999999999999b66bccbb99999999999999666c6c6ccccc
        bdbdd11ddbbbbbddddddddbeccbbbbbbb9999ddd1111111ddddbeeeee2eeee44e444ee4e444444444442ee2222e22e222ee2e2ee22eccccbb99999999999999bbbbbcc66b999999666666966666c6ccc
        dd1ddbbbbbbbddddddddbeccbbbbbbb9999ddd1111dd11dd1dbeeeeee222eeeeeeeeee4eeee444e224442ee22eeeee22eeeeee22efeeeffc66b9999999999999bbbbbbcccb6bbb666666666666666ccc
        1dbbbbbbbbddddddddbeccbbbbbbbb999dddddddd1d1ddd1dbeeeeeeeee222ee24eeee4222222eee24222ee2ee2eeeeeeeeee2222222efffcc66b99999999999999bbbbcccc666b6666666666666666c
        bbbbbbbbbbbdddbbecccbbbbbbbbb99dddddddddd11ddddd7eeeeeeeeeeeeeeeeee42222222224e422222eeeeeeeeeeeee2eee2222222efffcc66b999999999999999bbbbcfccc666666666666666666
        bbbbbbbbbdddbecccccbbbbbbbbb99dddddddddd1ddd11d7eeeeeeeeeeeeeeeeeeeeeeeeee22e2222222eeeeeee2eeeeeeeeeeeffffffffffffcb669999999999999999bbbccccccc666666666666666
        bbbbbbbd3beeffccccbbbbbbbb999dddddddddd1dddddb7eeeeeeee22e222222eeeeee2e222e224eeeeeeeeeeee22eeeeeeeeffffefffefeeffccc66b999999999999999b6b6c6ccccccc66666666668
        bbbbbbbeeffccccccbbbbbbbb99ddddddddddddddd1dbeeeee2eeeee2ee222eee42e22eee4e22e22eeeeeeeeeeeeeeeeeeeeffeeeeeffffefffffcb666b999999999999996666666cccccccc66666666
        bbbbbeffccccccccbbbbbbbbdddddddddddddddddddbeeeeeeeeeeeeeeeeeeeeeee222ee2222222422222222eeeeeeeeeeeeeee2eeeeefeeffcfffc6b6669999999999996666666666ccccccccccc666
        bbeeffcccccccccbbbbbbbddddddddddddddddd1dbeeeeeeeeeeeee2eeeeeeeeeeee2eee2ee224222222222eeeeeeeefffeeeefeffffeeeefffffffcc6666b999999999966666666666ccccfcccccccc
        eeffccccccccbbbbbbbbbdddddddddddddddddddbeeeeeeeeeeeeeeeeeeee2e422222e2e2e222222e2222eeeeeeeeeefceccfefeeeffeefffffffefffc6b666b99999966666666666666cccccffccccc
        ffcccccccccbbbbbbbbdddddddddddddddbdddbbeeeeeeeeeeeeeeeeeee22222222222eeee2eee2222222eeeeee2eeeccececeeeeeee2eeeffffffffffc666c6666666666666666666666ccccccfffcc
        ccccccccc6bbbbbbbbddddddddddddddbbdddbeeeeeeeeeeeeeee2e2222222222222222222222222e22222e22ee2eeefeeeeeeeeeefeefeefffefffffffcc666c666666666666666666666cccccccfff
        ccccccc666bbbbbbbddddddddddddddbbdddbeeeeeeeee22e2ee22222222222222222222222222222222222ee2e2eeeeeeeeeeeeeef2eeeeefffeefffffffc66ccc66666666666666666666ccccccccf
        cccccc666bbbbbbbbddddddddddddbbdddbbeeeeeeeeeeeee222eeee2eee22e22e222222222eee22eeeeeeeee222eeeeefeeeeeeeeeeeeecfeefffffeeffffcccccc666666666666666666666ccccccc
        ccccc666bbbbbbbbddddddddddddbbddbbbeeeeeeeeeeeeeeeeeee222ee222222e2222ee22eeeeeeeeeeeeeee2eeeeeeffeee22efeeeeeeefefffffeeeffffffcccccc66666666666666666666cccccc
        cccc666bbbbbbbbbddddddddddbbbddbbeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeee2eee2eeefeeeeeeffffffffeeeeeeeeefeeeeeffffffffffeffffffc6ccc666666666666666666688cccc
        cccc66bbbbbbbbbbbdddddddbbbddbbbeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeefefffeffffffffffffeffeeeeeeeeeeeeeeffeffffffffffccccccc66666666666666666888ccc
        ccc66bbbbbbbbbbbbbdddddbbbddbbeeefeeeeeeefeeeeeeeeeeeefeeefeeeeeeeeeefeeeee2eeee2eeeee22efeefffffffeefccffeeeeecfeeefffffffffffffffffccccc66666666666666668888cc
        cccbbbbbbbbbbbbbbbbbddbbbddbbcefffeeeeeeeeeee2eeeeeeeeeeeeffeeeeeeeeeeeeee2e2eeeeee22eeeee22efffffccffeeeeee2effeeffffffffffffffffffffccccc66666666666666688888c
        ccbbbbbbbbbbbbbbbbbdbbbbdbbceefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2e222222eeeeeee2eeeeefffffeeeffeeeeeeefefcffefeeeeeffffffffffffcccccc6666666666668888888
        bbbbbbbbbbbbbbbbbbbbbbddbbccfffffeeeeeffeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeffcefeffeeeffeefeeeeeeeeffffeccffffffffffffffcccccc666666666688888888
        bbbbbbbbbbbbbbbbbbbbbddbcccfffffcfcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeee2efeeeeeeffffffffffeeeeeffefeeefffffffffffffffccccccc6666666888888888
        bbbbbbbbbbbbbbbbbbbb1dbbccffffffcccccecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee2eeeeeeeffeeffe2eeeffffeeeeeefeffffeeefefeffffffffffffccccccc68888888888888
        bbbbbbbbbbbbbbbbbbddbbbccffffffffcccccceeeeeeeeeeeeeeeeceeceeeeeeeeeeeeeeeeeeeceeeeeeeee2eeeeeeeeeeeeeeefeefeeeeeefeeffeeeeeeeeeefffffffffffccccccc6888888888888
        bbbbbbbbbbbbbbbbbddbcbcffffffffffccffeceeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeefffffffffffcccffcc88888888888
        bbbbbbbbbbbbbbbbddbccccfffffffffeccfeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeeeeefeeeeeeeeeeeeefffeeeffffffffffffccccfccc888888888
        bbbbbbbbbbbbbbbddbcccfffcffffffeeccceccfeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeefffeeeeefeeefeefffffffeffffefffffffffffffccccfccc8888888c
        bbbbbbbbbbbbbddbbccffeefffeefcccfeeccefeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeffeeeeefeeeeeefffffffffeffffefffffffffffffffffffcccccfccc88888c
        bbbbbbbbbbbbddbbccffffefffeeeecefeeccfceeeefeeeeeeeeeeeeeeeeceeccceeeeeeeeeee2eeeeeeeeeeeeeffeeffffeeeeeffeffeeefffffffeeeeeefeefffffeefffefffffffffccffcccc88cc
        bbbbbbbbbbbdbbbbccffffffffffefeeeecccfeeceeeeceeeeeeeeceeeeeeeecce2ecee2eeeee2eeeeeeeeeeeeeefeeeeecffffffffffffefffffefffefffeefffeeffffffefffffffffffcccccccccc
        bbbbbbbbbddbbccccfffffeeffefffeeeeeccceeeeceeceeeeecceccceceeecceeeeeceeeeeeeeeeeeeeceeceeeeeeeeeeeffffffffffffffffffffffffffefffeeffeefffffffffffffffcccccccccc
        bbbbbbbbddbbbcccffffffffffefeeeeffeeeccfeeeefceeceeccccccceecceeceeeeceefeeeeeeeceeeeeeeeeeefefefeeeffeffefffffeffffffffffeefffeefefffffffffffffffffffffcccccccc
        bbbbbbbddbcbbcffffffffffffefffeefcfeecfffceefeecceeeccccccccccceecceefeefeefffceeee2eeeeeeeeffffffffffeeeffeeeeeeffffffffeeeeffffffeffffffffffffffffffffcccccccc
        bbbbbd1bbbccccffffffffefffffffffcfceefcfcfffffeccceeefcccccfccceeffceeeeeeccccceeceeeeeeeeefefffcffffefffefffffffffffffffeffffffffffffffffeffffffffffffffffccccc
        bbbbddbcbcccffffffeeffeefffeeffffecfffffffffffeecffeefcccfffcccefffeeeeeeeecccccceeeceeeecffffffefcefffffffffffffffffeffffffffffffffffffffffffffffffffffffffcccc
        bbbddbcccccffffffffffefefffffffffeffcfffffffcffffffffeecffffcceceefee2eeeeffffcffefffceeeffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc
        bbdbbccccccfffffffffffffeffeffefffffeeffefeecfffffeffffcfffffceeeeeeceeeeeeefffceefffeeffffcffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffcc
        bdbccccccfffffffffffffffffffffffffffffffffffeeffffeffffffcceeeeeeeeeeeffeeeffffeeffffeefffecfeeeeeeefefffefffefffffffffffffffffffffffffffffffffffffffffffffffffc
        dbcccccffffffffffffefffeffffffffffcfffffffeffefffffffcfffcceeeeeeeee2eeee2eceeeeeeeeeffeefeeeefefffeefffffffefffffffffffffffffffffffffffffffffffffffffffffffffff
        bccccccffffffffffffffffeffefffeffffffcffffffffffffffffcffccccceeeeeeeee2eee2eeeeeeeeeeceeefffffeeffeffffffffeffeefeffffffffffffffeffffffffffffffffffffffffffffff
        ccccccfffffffffffffffffffffffffefcffcfffffffffffffffffcfccffcefeeeeeeeeeeee2eeeeeeeeeeeeeffffffffffffffffffeffffefffffffffffffffffeefefffffffffffeffffffffffffff
        ccce2eefcfcccfcccfccfffffffffffffcfffffffffffffffffffffceeffefeeeeeeeeeeeeeeeeeeeeeeeeeeeefefeffffffffffeffffffffffffffffffffffffeffffefeefeeeefefffffffffffffff
        ccce432fbbbbbbcbbbbbcfffffffffffffffffffffcfffffffffffceeeceeeeefffeeeeeefeeeefeefeeeeeeeeeeffeefeeeeffeffffeffffffffffffffffffffeffffeeffefefefffffffffffffffff
        ccfeeeefccccccffccfcfffffffffffffffffcffffffffffccffffccffffeeeefffffefffeffffffffffffefffffffefffffffffeeeffffffffefffffffffffffffffffeffefefffffffffffffffffff
        cfffffffcfffffffffffffffffffffffffcffffffffffffffcfffcfffffffffefffffffffffffffcfffffffffeeefeeffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffff
        cfffffffffffcfffffffffffffffffffffcfcffffffffffffffffccfffffffffffffffffffffffffcffffffffeeeeefffffffffffffffffeffffffefffffffffffffffffffffffffffffffffffffffff
        `)
    for (let value3 of tiles.getTilesByType(assets.tile`myTile3`)) {
        coinlevel2 = sprites.create(assets.image`myImage0`, SpriteKind.Coin)
        tiles.placeOnTile(coinlevel2, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
        animation.runImageAnimation(
        coinlevel2,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    for (let value26 of tiles.getTilesByType(assets.tile`myTile7`)) {
        Flower2 = sprites.create(assets.image`myImage4`, SpriteKind.Flower)
        tiles.placeOnTile(Flower2, value26)
        tiles.setTileAt(value26, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Smiler = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
    Smiler.setPosition(Explorer.x - 80, Explorer.y + 80)
    Smiler.follow(Explorer)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Potion, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    howler = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
    howler.setPosition(Explorer.x - 80, Explorer.y + 80)
    howler.follow(Explorer)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
})
let howler: Sprite = null
let Smiler: Sprite = null
let Flower2: Sprite = null
let coinlevel2: Sprite = null
let water: Sprite = null
let shroom: Sprite = null
let chair: Sprite = null
let potion: Sprite = null
let Flower3: Sprite = null
let coinlevel3: Sprite = null
let coin: Sprite = null
let maxjumps = 0
let numberofjumps = 0
let Explorer: Sprite = null
game.setGameOverMessage(false, "YOU DIED :(")
music.stopAllSounds()
scene.setBackgroundImage(img`
    8888cc888cc8888c88cc888c888888888888888888dddd699999999999999999999999ddd1dddddddddddd1d99999999999999999999999999ddd8888888cc8888888888888888c688c8cc88cc888ccc
    88888cccccccc868c88cc888c88888888888888888bdd9699999999999999999999999ddd1dddddddddddd1d99999999999999999999999999dbb88866c8cc8888888888888888688cc8ccccc888ccc8
    888888cc8c88ccc68c88c888888888c88888888666bd96699999999999999999999999ddd1dddddddddddddd99999999999999999999999999dd66968888cc8888888888c8888c88cc88ccc888888888
    8888888c8c8cccc88c888c888888888c88888886666dd9699999999999999999999999ddd1dddddddddddddd99999999999999999999999999dd99968888c8888888888c8888888c6688ccccccccc888
    8888888c8c8cc6ccc8888cc888888888c88cc888666dd9699999999999999999999999ddd1dddddddddddddddd999999999999999999999999dd9666888cc8888c8888cc8888888c66c8ccc888888888
    8888888c8c8cc6c888888888888c88888888888866ddd9999999999999999999999999ddd1dddddddddddddddd999999999999999999999999ddd66688888888c88888c88888888c66c8ccc888888888
    88cc88cccc8cc6c88888888c8888c8888888888866ddd9999999999996699999999999ddd1dddddddddddddddd999999999999999999999999ddd6668888888888888c888888888c66c8ccc888888888
    888888ccccccc6cc8cccccc8cc88cc8888c8888cb669999999999999966999999d999999d1dddddddddddddddd99999d9999999999999999999996666688888c8888cc888888888c66cccccc88888888
    8888888cccccc6c888888888888888c88888888bdd99999999999999966999999d999999d1dddddddddddddddd99999d999999999999999999669996668888c6888888888888888c66c6ccc888888886
    8cc8888cccccc6c88ccccc8cccc888888888888bdddd999999999999999999999d999999d11ddddddddddddddd9999999999999999999999999999d996888868888888888cccc88c66c6ccc888888c68
    888c888c8ccccbc88cccccceeccc888c88888886dddd999999999ddd999999999d966999dddddddddddddddddd9999999999999999999999999999d99b6666688888888ccccccccc66ccccc88888b688
    8888cccc8cccc6ccccceeeeeeeecc888c8888888bdddddddddddddddd99999999d9999999ddd1ddddddddddd9d999999999999999999ddddddddddd666886688888ccceeeeeeeccc66ccccc888c6c868
    cf8c88cc8cccc6c88cceeeeeeeeecc888c888888cddddddddddddddddd999999999999999ddd11ddddddd11d99999999999999999ddddddddddddd9666886888888ceb4444eeeccc66ccccc886688c8c
    6cc8c8ccccccc6c88cccceeeeeeeec888c8888c886bdddddddddddddddd9999999999999999d1111dddddddd99999999999999999ddd9dddddddddd66686688888cbbbbbbbebcc8c66cccccc68cc88cd
    66ccc88cccccc6c88cccccccccccc88888888888886dddddddd33dddddd9999999999999966d1dd111d1d9999d999999999999999ddd9dddddd3d3db86668888888cbbbbecccc88c66ccccc6886ccbdd
    6666c888cccccbc8888cccccccccc88cc88c888c8886bbbbbbbbb99dddddd999999999999999dddd1d11d99999999999999999d99d999bb666bbbbb68866888c8888cccc8888888c66ccc6c888cbdddd
    666bb6888cbccbc8888888ccc888cc88888888886868c88888886999ddddd999999999999dddd9dd1d11d99999969999999999d99d9996866666666688688888888888c88888888c6cccccc68cbddddb
    bc6bbb6c8cdbcbb88888888c88888c8888888888c888c88888c66669ddddd999999999999d9dd9dd1dd1d9999996669999999dd9996666666666666686688888888888888888888cdbccccc8cddddbbd
    6b6bbb6dbcddbbb888888888888888c888888c888886666666666666dddddd99999999999ddd99d111d1d99999966699999999d9966666666666686666888888888888888888888cdbcccccbddddbbdd
    c66bbb6dddddddb8888888888888888c888888c888888666666666669dddd999999999999d9999911111d9999996669996669999966666666666666668888888888888888888888cdbbcccddddddddbd
    bbcbdb6bddddddb88888888888888888c888888c888888c888666888666dd99999999999999999911111d999999666999669999996666666666666c888888888888888888888888cdddbb1dddddddddd
    bbb6dbbbddddddb888888888888888888c8888888888888688888888666bd99999999999999999911111d9999996669996699999966666666666668888888888888888888888888cddddddddddddddbb
    bbbbdbbddddddddc888888888888888888c88888c88888888888888666669999669999999999999dddddd9999996669999999999966666686666668888868888888888888888888cdddddddddddddbbd
    bbb6db6bddddbddccc88c888c8888888888888888c8888888888888bd99669996669996699999999999996669996669996666999d9688688666666688866668c88cccccccccccccbdddddddddddbdddd
    bbbbbb6ddbddddd8cbc88cc88c8888888c8888c888c88888888888bddd999999999999999999999999999999999999999999999dd9688888666666688ccc88cccccccc8c8cc8c66b1ddddddddddddddb
    bbbbdbcbddddddd888ccc88888888888888886c8888888888888886dddd9999999999ddd9dd999999ddd99d99d999999999999ddd96666666666868888868888888888888888688bdddddddbbddddbbd
    bcbcdbbddbdddddc888c6c888888888888886668cccc88888888888bddd9999999999ddd9dd99999ddddd9d99d999999999999ddd968888666ccccccc8666888888888888866668bddddbbdddddddddd
    c6bbbbbdddddddddbc8c8ccc888888888888666cccccccc888888886ddd66999999999999999999dd99d99999999d999999969ddb6688888ccbbbbccc66668888888888886bc88bbddddddddbbbd3dbb
    cccbbbbbddddbdddddcc8886c88888888888666cceebeecc88888868bdd66999999dd9999999d99ddddd9999dddddd99999969ddb888888ccbbbbbccc66668888888888c66cc8bddddbddddbbbb3bbbb
    cbbbbbbbbddddddddddbc8cb86c888888888666ccbbbbbbb8888888666b66666999999999999999999dd999999999966666669d66666666cbbbbbbccc66668888888886668ccbddddddddddddbbbbbbd
    bcbbdbbbbbdddddddddddbbb8c6c88888888666ccccccccc8866666666666666999999999dd999999ddd999999999966666669b6666668888cccccc8866668888888866668bddddddddddddbbbbbbddd
    cbccbbbbbbdddddddddddddbcbc668888888666888ccccc88888668666666666696999999999999999dd9999999999666666666666668668866ccc8886668888888c66c8cbdddddddddddddbdddddddb
    cc66cbbbbbdddddddddddddddbb886888888666888888c886666666666666666666999666666666999999999999666666666666666666668866688888b668888886668cbddddddddddddddddddddddcc
    cccc6cbbbbbbddddddddddddddb8688688886666888888866666666666666666666999666666666999999999996666666666669666666666888888886966888866668cddddddddddddddddddddddbccc
    cccccbbbbbbbdddddddddddddddbc8886688666688888888666666666666666666699999999999b99999699999999966666666666666666688888888696688866686bddddddddddddddddddddddbcccc
    cc8ccbbcbbbddddddddddddddddbbcc8888866b68888888886666666666666666669999999999999999969999d999966666666966666666688888888896c8866c88bddddddddddddddddddddddbccccc
    ccccccbccbdddddddddddddddddbbbbc888c666688888888888666666666666666666666699999b99999b9969966666666666666666666688888888889b8cc68cbddddddddddddddddbddddddbcccccc
    cccccccbcbddddddddddddddddbbbbbbbc8c666c88888888888c66666666666666666666699999999d11d999999666666666669666666c8888888888c96bb8ccbdddddddddddddddddb3ddddbccccccc
    ccccccccbbddddddddddddddddbbbbbbbbcc666c88888888888866666666666666666666666696b99b999696666666666666666666668888888888886dddbcbdddddddddddddddbd3db3bdddcccccccc
    ccccccccbbbddddbbdddddddddbbbbbbbbbb666c888888886888666666666666666666666666999999999966666666666666666666668888888888866dddbbddddddddddddddddddddbddddcc8cccccc
    cccccccccbbdddddbbddddddbbbbbbbbbbbbbbbc88888886668cc6666666666666666666666666699b996666666666666666666666666cccc88888886dddddddddddddddddddddddddbdddbccccccccc
    cccccccccbbbddddddddddbbbbbbbbbbbbbbbbbc8888888866ccbbbbbc86666666666699699999b9999999999996966666666666666bbbbbccc888886dddddddddddddddddddddddddbdddcccccccccc
    cccccccccbbbdddbbbddddbbbbbbbbbbbbbbbbbc888888886ccccbbbbb66666666666669699699b9999999999966966666666666666bbbbbccc888886dddddddddddddddddddddddddbdddcccc8ccccc
    ccccccccccbbdddbbbbbbbbbbbbbbbbbbbbbbbb6888888886888cccb666666666666666666666666666669996666666666666666666666cc888888886dddddddddddddddddddddbbddbddbcccccccccc
    ccccccccccbbdddbbbbbbb66ccccc666bbbbbbb6888888886888886688866666666666666666666666666dd9666666666666666666688688888888886ddddddddddddddddddbbbbbdddddcc8c8cccccc
    ffffccccccbbdddbbbbbbcccccccccc666bbbbbc888888886888886666666666666666666666666666666666666666666666666666688688888888886ddddddddbbccccccbddddbbdddddcccc8cccccc
    ffffcc8cccbbdddbbb6cccccccccc8ccc666b6bc88888888688888666666666666666666666699999999666669666666666666666666668888888888cddddddbcc8cccccc8ccbdddddddbccccccccccc
    fffffcccccccbddb66cccc88ccc8cccccc66b66c888888886888888666666666666666666666666666666666666666666666666666666688888888886dddddbcccccccccccccccddddddcccccccfcccc
    ffffccccccc8bdd66ccccccccccccccccc66bbbc888888886888888666666666666666666666666666666999666666666666666666666688888888886ddddbcccccccccccccccfcbddddc6ccc8cccccf
    fffcccccccccbddccccccc88888cccccccc666bc88888886b88888886666666666666666666666666666699666666666666666666666666888888888cdddbcccccccccccccccccfcddddccccccccffff
    fffcfcccccccccbc8ccc8cc888888cccccc66bbc8c88888bb88888668686666666666666666699699666669666666666666666666668c68888888888cdddbccccccccc8cccc8888cdbbccccccccfcfff
    fffffccccccc8bdfcccccccc8cc88cc8ccccbbbcc88cc86b66c886668686666666666666666666699666666666666666666666666688c688888888886ddbcccccc888cccccccccccbb66cccc88cfccff
    fffffcccccccbddcccccccccc8888888ccccbbbcc88c66666b6886688888688888866666668666666666666666666666666666688688c668888888c86ddbccccccccccccccccccfcd1dbcccccccfffff
    ffccccccccccbddc88ccccccccc888c8ccccbbbc8cc86666666666888888688888666666688666666666666666666666666666688688c688c88888686ddbccccccccccccccccccccddddcccccccfcfff
    fcccfcccccbcbddcccccccccccccccc8ccccc66c8ccc6666666b688888888888688666666666666666666666666666666666668886868688cc888668bdbbcccccc8cccccccccccccddddcccccccccccf
    ccfffcccccbbbddcccccc88ccccccccccccc6bbc8ccc66666bb6666cc888888868866666666666666666666666666666666666888688866ccbc66666bbbccccccccccccccc88cc8cddddcccccccfffff
    cffffcccccbbbddc88ccc88ccccccccccccc6bbc66cc66666b66bb66c888888888866666666866666666666666666666666666888688886cc66666666dbccccccccccccccc88ccccddddc6cccccfffff
    cccffcccccbbdddcccccc88cccccccc8cccc6bbc866666666666666cc888666666666666666888888888666666666666666666888688686cc6666666bbbcccccccccccc88c88ccccddddc6cccccfffff
    ccccfcccccbbbddccccccc8ccccccccccccc6bbc8cc8666666666666c888888886866666666888868888666666666666666668688666666bb66666bbbbccccccccccccc88c88ccccddddcccccccfffff
    ccccccccccbcbddcccccc88ccccccccccccc6bbc8cccc66666666666c8888888868666666666888886666666666666666668888886666666bb666bbbbbbcccccccccccc88c8cccccddddcccccccfffff
    ccccccccccccbddccccccc8ccccccccccccc66bccccccc866666666c888888888886666666688888866666666666666666688888866666666666666bcbbcccccccccccc88888ccccddddcccccccfffff
    ccccccccccbbbddccccccccccccccccccccc66bccc888c866666666c888888886686688888886666666666666666666668888888866666cccc6666c66b66ccccccccccc88cccccccddddcccccccfffff
    ccccccccccbbdddccccccccccccccccccccc666ccc8c888886cccbbb8888888888868888888866666666666666666666888888888666ccccccc6cc666b66cccccccccccc8ccccc8cddddcccccccfffff
    ffccccccccbbdddccccccccccccccccccccc666ccccccccc8cccccccbc8888888888888888686666666666666666668888888888cbbbccccccccccccc666cccccccccccc8ccccc8cddddcccccccfffff
    ccccccccccbbbddcccccccccccccebddbccc666cccccccccccc88888ccc8888888888888888888866666888886886888888888cddddbcccccccccccc6666ccccccccccccccccccccddddcccccccfffff
    ccccccccccbcbddccccccccccccbb33dd4cc666ccccccccccc888888888888888888888888888888888888888888888888888cdddd4bbcccccccccccc66cccccccccccccccccccccddddcccccccfffff
    ccccccccccbcbddccccccccccccebbe4b4ecccbcfcccccccccccc888888888888888888888888888888688888688888888888c444dbbccccccccccccc66ccccccccccccccccc88ccddbbcccccccccccc
    ccccccccccbcdddcccccccccccceeeeeeeeccbdcccccccccccccccc88888888ccc88888888888888888888888888888888888c44bbbccccccccccccccbbcccccccccccbdd1ddbc8cddbbcccc88cccccc
    ccccccccccccdddcccbbbbbbc8ceeeeeeeecccccccccccccccccccccc668888888888c88666666666666666666666688888888c44bbeccbccccccccccbbccccccccccd1d1dddd3ecddddccccc8cccccc
    ccccccccccccbddccbdddddddbceeeeeeeccccccc888cccccccccccc88866999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcceccccbccccccccccccccccccccbdddd4bbbbbecdbbbc888cccccc88
    ccccccccccccbbbcb43d343ddddccccccccccccccccc8ccccccccccc86bddddddddb888888888888888888888888888bdd1ddddb668888cccccccccccccccccccccdd4444bbbbceebbddbecc88cccccc
    fcccccccccccbbbe4444444444dbccccccccc88cc666688888888866bdddddddb688888888888888888888888888888886bdddddddddbbbbccccccccccccc888c8bd4444eeeeeebd11dd444eeccccfcc
    fcccccccccccbbbeeeeeee44444dccccccccccccc6666bbbbbbbbddddddddb688888888888888888888888888888888866866bddddddddd1ddddb6666c888888c8b44444eeeee3dddddddbbebecccfff
    fccccccccccce44eeeeeeee44444c8666666b99ddddddddddddddddddbb688888888888888888888888888888888888888666666bdddddd9999d99999999996666e44442eeeedddddddd4bbbeeeccccc
    cccccccccccce44eeeeeeeee4444b99999999dddddddddddddddddb68888888888888866666666666666666688888888888866666669ddddddddd9999999999999b44422eeeb44444222222eeeeccccc
    fffccfcccccce44eeeeeeeeee44b9ddddddddddd9999dddddddb688888888888888886666666666666666666666888888888bb6666666bddddddddddddddd999999e24222ee444222222ee22eeeccccc
    88cccccccccccbe4eeeeeeeee2b9dddddddddddddddddddbb6888888888888888888886666666666666666666668688888886bb666666666bddddddddddddddd9999beee2ee424eeeeeeeeeeeeeccccc
    888cccccccccccb4eccceeccc6999dddddddddddddddb68888888888888888888686666666666666666666666666666688666cc668886666666bdddddddd9999999996ccccceecceeeeeeeeeeecccccc
    88888ccccccccc4eecccccc866bddddddddddddddb6888888888888888888866666666666666666666666666666666666668886ccc88886666666669dddddd9999999668888cceeeeeecccceec888888
    88888ccccccccccccccc66bbddddddddddddddb6888886888888888888888866666666666666666666666666666666668888888888888666666666666bdddddddd9999999b6ccccccccccccc88888888
    8888888ccccc88886bdddddddddddddddddbc888886888888888888888866666666666696996666666666666669996666666666666666666666666666666bddddddbb99999996888ffcccc8888888888
    88888888888866bbdddddbbddddddddbbc888888888888888888888666666666999999996666666666666666666699666666666666666666666666669966666bddddddddb9999966cc88888888888888
    8888888886bdddddddddddddddddbcc888888888888888888888886666666666999999996666699999666696666699996666666666666666666666886966669666bdd11dddbb999dddddbbb6ccc8866b
    8866666bddddddddddddddddbbcc88888888888888888888888888666699669999666666666699999999999966666666996666666666666666666668666666999996bbddddddddbb99999999999999dd
    6b999ddddddddddddddddbccc8888888888c886888888888888666666666666666666666699999999999699966666699999966666666666666666666666866669999966bbddd99999bbddddddddddd99
    ddddddddddddddddddbccc88888888888cc8686888888888886666699666666666666699699699699666669966666999966666666666666666666666666688866699999b666b999dddddbbbdddddd999
    dddddbbbbddddddbcc8c8888888888ccccc8686888888888866666666666666666999999999666666669966666666666666666666666666666666886666888888cc6699996bb9bbddddddddbbbdddddd
    99bbbdddddddbcc888888888888cccccccc8686888888888886666666666999999996699999999999999999999999999999999999666666688866688666888888cdbbc699996666bbbdddddddddbbbdd
    bbbddddddbcc888888888888ccccccccccc666688886666666999999999999999999999999999999999996666666666666666699999996666666666666688888cddddbc866996b6bb666bddddddddbbb
    6666bb6bcf88888888888ccccccccccccc8666688886666666999999999999999999999999999999999999999999999999999996666666666688888866688888cdbbbbbcccc669996666ddb6bddddddd
    ddb68888888888888888ccccccccccccc666669686688888666666666999919999991999999999999999999999999999999999999999666666888888666888886bbbbbcccccc8669b666bdb66bb66699
    bcc8888888888888888cccccccceeeccc8866666666666666999999999119999999999999666666669999999999999999666999666666666888888886668888886bb6eccccccc8866b6666666d96666b
    888888f8888888888cccccccbeebbc8888866666666666666666666699999911119999999999999999999999999999966999966666666666666696666666688888bbbccccccccc688666666666b66688
    88888f888c888c88cccccebbbbdb68888886866666666666666666666666699999999999999999999999999999999999999966666666666666666669996666888886bccccccccc6666c6666668866688
    8888888888888888cc888ccebb68888888866696666666666666666666999999999119991199999999999999999999911999666666666666666666666668888888866ccccccccc668888c66666666668
    8888888888cf8888c8888888888888888888869666666666666666669999999999999999999999999999199999999999999999999666666666666666666888888666686cccccc66668888fc669666666
    8f8888888ff888888888888c88888888886669999111111111999999999666666666669999999999999999999996666666666666999999999666666666688888866666668666666668888888c6966666
    fc8888ffff8888888c8888888888888888669999669999999666666966666666666666669999991111999999996666666666666666666666666666666668888888668888888888668888c88888c66666
    88888888888888888888888888888886666666666666666666999999666699666699996669999ddd99999b99999666999b99bb99bb9bbbbbbb6666b66666bbbb666666666bbbbbbbb688888888886666
    666666666888866666666666666666699966666669999666911ddddb666ddd666d111d6669999ddb66699666b99666911dd1dd11ddddddddddd99bddd9999d11d9969999ddddddddd666666666688888
    88888888888888888888888888888cdddddddddd66666668666bddb666bddd66bb666669bdddb696666ddb69bddddddddddddddddd666bddb66b99b696dddddddd996666666666bdd688888866666888
    688888888888ccccccccc6666bbbbbddddddd9db666bbbbbbb6bbbbbdbddbbbddb999b99bddddddbddbddddddd9bbbbbdddd99bdddb99bddd666b666dddd99bbbbbddbbdbbbbbbbbbc88888888886888
    66688888888cbbdddddbbbbbdddddddddddb9966666ddbbdddb999dddbd99bdddb9ddb999ddddddddddddddddb99b6bb9996996b99bd99b99bbbb666bddd6666666bdddddddddddddc88888866688888
    8866686666cbbdb666cc6c66666bdbbdd9dddb866cddd6666b999bdddbd9bb99bdddb666bddddddb999699b99b99b999bddddddbdddbdddd99bbdb666699bbddbdddbddb69bbdddddb88888888666666
    c666666666cbbbb66cc6cc6666bbbbbbbbddbb666bddbbbb6bddbbddbdd9bb9bbdddb696dddddddb999699bb9b999999ddddddddbdddbddb999bddb868699bbbbbbbbbbbb666bbbbbbc8888888866666
    88888888cc8886c6666cccccccccccc86666bdddbbbbbdddbdddddddbdddbdddb999bddddddd999b999ddddddd9996999dddbdddbdddb66666666996888666688866666666c8888888888888888c8888
    888888888888ccc8c8c8888888cccc88c6ccbbbbbbbccccccccccccc66b66b6b6666666666666666666666c66cc8866666c6ccccccccc888c888ccc8cbbbbbbbc888888cc6bc88888888888888888888
    8c8888888c888888888888888888888888cc666bbbbc888c888888888888666666666666666666666666668888c88c6666888c8888888888cc8c8cc8cbddb6996888ccc8cbbb88888888888888888888
    cfffcccccccccccc8c8888ccccccccccccccc8c888bddddb88888888888c888888888888dddd66666666666868bddbc88888cddddbdddbbbbbbbbbbbbc88886666666bd99999ddc88cccfcc88888cccc
    cccccccc8888888888888888888888888888cc8888cc666bbbbc8888888888888888888866bbbbb6666666688866668888888cccccccccccccccccccccc888cccccc88cccccccc888cccffffffccccff
    cc8ccc88888888888888888888888888888888888886666bbbbc888888888888888888886666bbb66666666ccc68888888888888888888888888888888c8c8888cccccf8ffffff888cfcffffffffffff
    fccccc88888888cccc888888888888cc8cc8888888ccccc888888888888888888888888cbbb666666666666bddb888888888888c8c8c8888888cccc8ccfccffccfffcfffcfffcc888ffffffffcffffff
    ffffcccccccfccffccfcc88cccc8ccc88ccc8cccccc8cccccc88888888888888888888866666ddddddd66666666888888888888c888888888888cc888ccc8fffcffffcffffffffc88fffffffffffffff
    fffffccccfccfffcffffcffffccfff8cfcfccccc8c8cccccc88888c888888888888888866666d11111d6666666688888888888888888ccc88c888ccc8cfcccfffcfffffffffffff88fffffffffffffff
    ffff888ffffffffffffffffffcfffffffffcfffccccc8888ccc8cc8888888888888888866666ddddddd666668668888888888888c8888c888cccc88888cffcffffcffffffffffff88fffffffffffffff
    fffeeeecccccccccccccfffccfffccfffccfffccccccc8888cccccc888888888888866866666d1ddddd6666688888888888888888c8888c888888888c8cfffcfffccfffffffffff88fffffffffffffff
    fffe432cbbbbbbcbbbbbcffffffffffffcffffcffff888888888888888888888888888866666d1ddddd6666688888888888888888c8888888888888fff8ffffcfffffffffffffff88fffffffffffffff
    ccfceeeccccccccccccccccffffcffffccfffccfcf8888888888888888888888888888866666d1ddddd666668888888888888888888888888888888ccc88ccc88fff8ffffccffff88ffffffcffffccff
    fffffffffffffffccffffcfffffffffffffffcffff8ffff88888888888888888888888866666d1ddddd66666888888888888888888888888888888888888ffff8ffffcfffffffffc8fffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffcffff888888888888888888888888866666d1ddddd66666888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
    `)
scene.setBackgroundColor(15)
game.showLongText("Oh no! You woke up realizing you no-clipped out of reality! Navigate the levels of the Backrooms using your D-pad in order to return home, and collect coins along the way. Watch for time, and each coin you collect increases your score by 2 points. MUSIC CREDS GO TO WoofWoof\"", DialogLayout.Full)
music.play(music.createSong(hex`0064000408080100001c00010a006400f401640000040000000000000000000000000005000004620100000200012002000400012204000600012506000800012208000a0001290e001000012914001600012720002200012022002400012224002600012526002800012228002a0001272e00300001273400360001253a003c0001243c003e00012240004200012042004400012244004600012546004800012248004a0001254e00500001275400560001245a005c0001225c005e00012064006600012068007000012770007800012580008200012082008400012284008600012586008800012288008a0001298e0090000129940096000127a000a2000120a200a4000122a400a6000125a600a8000122a800b000012cb000b4000124b400b8000125b800ba000125ba00bc000124bc00c0000122c000c2000120c200c4000122c400c6000125c600c8000122c800d0000125d000d4000127d400d8000124d800da000124da00dc000122dc00e0000120e000e8000120e800f0000127f000f8000125f80000010125`), music.PlaybackMode.LoopingInBackground)
info.startCountdown(30)
Explorer = sprites.create(img`
    ......ffff......
    .....f5555f.....
    ....f5555fff....
    ....f555f69f....
    ....f555f66f....
    ....ff555fff....
    ...f55f5555f....
    ..f5555ffffff...
    ..f55f555555f...
    ..f55f555555f...
    ..f55f555555f...
    ..f555f5555f5f..
    ..f555f5555f5f..
    ..f555ffffff5f..
    ...fff555f5ff...
    .....f555f5f....
    ....f5555f5f....
    ....f55fffff....
    ....f5fd11f1f...
    ....fffffffff...
    `, SpriteKind.Player)
controller.moveSprite(Explorer, 100, 0)
tiles.setCurrentTilemap(tilemap`level`)
Explorer.setPosition(10, 15)
Explorer.ay = 350
numberofjumps = 0
maxjumps = 2
scene.cameraFollowSprite(Explorer)
for (let value32 of tiles.getTilesByType(assets.tile`myTile3`)) {
    coin = sprites.create(assets.image`myImage0`, SpriteKind.Coin)
    tiles.placeOnTile(coin, value32)
    tiles.setTileAt(value32, assets.tile`transparency16`)
    animation.runImageAnimation(
    coin,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
}
game.onUpdate(function () {
    Explorer.setImage(img`
        ......ffff......
        .....f5555f.....
        ....f5555fff....
        ....f555f69f....
        ....f555f66f....
        ....ff555fff....
        ...f55f5555f....
        ..f5555ffffff...
        ..f55f555555f...
        ..f55f555555f...
        ..f55f555555f...
        ..f555f5555f5f..
        ..f555f5555f5f..
        ..f555ffffff5f..
        ...fff555f5ff...
        .....f555f5f....
        ....f5555f5f....
        ....f55fffff....
        ....f5fd11f1f...
        ....fffffffff...
        `)
    if (Explorer.vx < 0) {
        Explorer.image.flipX()
    }
    if (Explorer.vy < 0 && Explorer.vx > 0) {
        Explorer.setImage(assets.image`myImage`)
    }
    if (Explorer.vy < 0 && Explorer.vx < 0) {
        Explorer.setImage(assets.image`myImage`)
        Explorer.image.flipX()
    }
})
