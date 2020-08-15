### onEnderTeleport

| 设置/获取/方法 | 方法名称                        | 名称                       | Input/Output |
|:-------- |:--------------------------- |:------------------------ | ------------ |
| 获取器      | getTargetX();               | targetX();               | 返回双精度        |
| Setter   | setTargetX(double targetX); | targetX(double targetX); | 双精度          |
| 获取器      | getTargetY();               | targetY();               | 返回双精度        |
| Setter   | 设置目标Y(双目标Y)；                | targetY(双目标Y)；           | 双精度          |
| 获取器      | getTargetZ();               | targetZ();               | 返回双精度        |
| Setter   | 设置目标Z(双目标Z))；               | targetZ(双目标Z)；           | 双精度          |
| 获取器      | getAttackDamage();          | a. 攻击伤害()；               | 返回浮点数        |
| Setter   | setAttackDamage(浮点攻击损害)；    | 攻击伤害(浮点攻击伤害)；            | 取一个浮点数       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as craftbiner.api.event.EnderTeleportEvent)
    ...
    };