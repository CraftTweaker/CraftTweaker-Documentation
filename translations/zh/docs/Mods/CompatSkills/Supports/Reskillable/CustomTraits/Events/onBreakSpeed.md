### onBreakSpeed

| 设置/获取/方法 | 方法名称                         | 名称               | Input/Output                                   |
|:-------- |:---------------------------- |:---------------- | ---------------------------------------------- |
| 获取器      | getBlockState();             | blockState();    | 返回 [IBlockState](/Vanilla/Blocks/IBlockState/) |
| 获取器      | getBlock();                  | block();         | 返回 [IBlock](/Vanilla/Blocks/IBlock/)           |
| 获取器      | getoriginalSpeed();          | originalSpeed(); | 返回浮点数                                          |
| 获取器      | getNewSpeed();               | 新Speed();        | 返回浮点数                                          |
| Setter   | setNewSpeed(float newSpeed); | newSpeed(浮点新速度)； | 取一个浮点数                                         |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as craftweeper.event.PlayerBreakSpeedEvent)
    ...
    };