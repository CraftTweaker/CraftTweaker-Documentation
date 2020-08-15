### onAttackMob

| 设置/获取/方法 | 方法名称                | 名称         | Input/Output                                       |
|:-------- |:------------------- |:---------- | -------------------------------------------------- |
| 获取器      | gettDamageSource(); | 1. 损害源码(); | 返回 [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| 获取器      | getAmount();        | 数量()；      | 返回浮点数                                              |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onAttackMob = function(event as craftweeper.event.EntityLivingHurtEvent)
    ...
    };