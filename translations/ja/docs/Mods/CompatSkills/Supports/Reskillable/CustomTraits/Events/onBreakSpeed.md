### onBreakSpeed

| Setter/Getter/Method | メソッド名                        | 名前                        | Input/Output                                      |
|:-------------------- |:---------------------------- |:------------------------- | ------------------------------------------------- |
| Getter               | getBlockState();             | blockState();             | [IBlockState](/Vanilla/Blocks/IBlockState/) を返します |
| Getter               | getBlock();                  | block();                  | [IBlock](/Vanilla/Blocks/IBlock/) を返します           |
| Getter               | getOriginalSpeed();          | originalSpeed();          | Float を返します。                                      |
| Getter               | getNewSpeed();               | newSpeed();               | Float を返します。                                      |
| Setter               | setNewSpeed(float newSpeed); | newSpeed(float newSpeed); | 浮動小数点数を獲得                                         |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5');
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };