// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f000800010101010101010301010101010101010101010101010201010101010101010101010101010401010101010101010101010101010401010101010101010101010101010401010101010101010101010101010401010101010101010101010101010401010101010101010101010101010401010101010101`, img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.dungeon.stairNorth,sprites.dungeon.floorDark0,sprites.castle.tilePath5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000606060606060606060606060b060606050505050b05050505050505050505050202020202020202020202020202020202090103090209030909010102020202020909090902090909090101020202020209090909020202020909090202020202090909090909090909090902020202020901020202020909090909020202020209010209010209090101090202020202090902090909090901010902090109020109020202020909010109020901010209090909090909090909090909090902020202020202020a0a020202020202080804070708070707070708070804070808080407080707070708080708080808080804040804040808080407070807`, img`
. . . . . . . . . . . . 2 . . . 
. . . . 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 . . 2 2 . . 2 . 
2 . . . . 2 . . . . 2 2 2 . 2 . 
2 . . . . 2 2 2 2 . . . 2 . 2 . 
2 . . . . . . . . . . . 2 . 2 . 
2 . 2 2 2 2 2 . . . . . 2 . . . 
2 . 2 2 2 2 2 . . 2 2 . 2 2 2 2 
2 . . 2 . . . . . 2 2 . 2 . . 2 
2 2 . 2 2 2 2 . . 2 2 . 2 . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.stairLadder,sprites.dungeon.floorDark0,sprites.dungeon.chestOpen,sprites.castle.tileGrass3,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.floorLight2,sprites.dungeon.floorLight3,sprites.castle.rock0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
