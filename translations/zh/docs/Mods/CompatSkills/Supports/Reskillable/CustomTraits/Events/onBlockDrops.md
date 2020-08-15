### onBlockDrops

| 设置/获取/方法 | 方法名称                                                 | 名称                                                 | Input/Output                                      |
|:-------- |:---------------------------------------------------- |:-------------------------------------------------- | ------------------------------------------------- |
| 获取器      | getDropChance();                                     | dropChance();                                      | 返回浮点数                                             |
| Setter   | setDropChance(浮点下拉机)；                                | dropChance(浮动投递机会)；                                | 领取浮点数                                             |
| 获取器      | getFortuneLevel();                                   | 幸运级别();                                            | 返回整数                                              |
| 获取器      | getDrops();                                          | drops();                                           | 返回 [IItemStack](/Vanilla/Items/IItemStack/) 的列表   |
| Setter   | 设置Drops(列表)<iitemstack> 5. 请秘书长向大会第五十八届会议报告本决议的执行情况。 | drops(列表)<iitemstack> 5. 请秘书长向大会第五十八届会议报告本决议的执行情况。 | 取出 [IItemStack](/Vanilla/Items/IItemStack/) 的列表   |
| 方法       | addItem(IItemStack itemStack);                       | addItem(IItemStack itemStack);                     | Takes an [IItemStack](/Vanilla/Items/IItemStack/) |
| 获取器      | (ii) isSilkTouch);                                   | silkTouch();                                       | 返回一个布尔值                                           |
| 获取器      | isPlayer();                                          | isPlayer();                                        | 返回一个布尔值                                           |
| 获取器      | getPlayer();                                         | 玩家();                                              | 返回 [IPlayer](/Vanilla/Players/IPlayer/)           |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as craftbinstrer.event.BlockHarvestDropsEvent)
    ...
    };