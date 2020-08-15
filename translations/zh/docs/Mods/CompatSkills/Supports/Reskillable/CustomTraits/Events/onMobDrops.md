### onMobDrops

| 设置/获取/方法 | 方法名称                             | 名称                                                  | Input/Output                                       |
|:-------- |:-------------------------------- |:--------------------------------------------------- | -------------------------------------------------- |
| 获取器      | gettDamageSource();              | 破坏源                                                 | 返回 [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| 方法       | addItem(IItemStack item);        | addItem(IItemStack item);                           | Takes an [IItemStack](/Vanilla/Items/IItemStack/)  |
| 方法       | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem);                    | 拿起 [IEntityItem](/Vanilla/Entities/IEntityItem/)   |
| 获取器      | getLootingLevel();               | 抢掠级别                                                | 返回整数                                               |
| 获取器      | getIsRecentlyHit();              | 近期命中                                                | 返回一个布尔值                                            |
| 获取器      | getDrops();                      | drops();                                            | 返回 [实体项](/Vanilla/Entities/IEntityItem/) 的列表       |
| Setter   | setDrops();                      | drops(列表)<ientityitem> 5. 请秘书长向大会第五十八届会议报告本决议的执行情况。 | 拿出 [实体项目的列表](/Vanilla/Entities/IEntityItem/)       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDros = function(event as craftbiner.event.EntityLivingDeathDropsEvent) }
    
    };