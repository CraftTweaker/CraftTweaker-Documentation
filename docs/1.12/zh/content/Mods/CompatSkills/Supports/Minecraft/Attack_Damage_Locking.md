# 攻击伤害锁定

## 功能：

这个特性锁定了玩家使用攻击伤害大于等于设定值的武器/工具的能力。 就是说，在下面的例子中，任何攻击伤害大于等于0.75的武器只能在末地使用。

注： 1 攻击伤害 = 0.5 颗心 你可以[点这里](https://minecraft.gamepedia.com/Damage#Dealing_damage)查看有关伤害的页面。

## 语法：

    mods.compatskills.DamageLock.addDamageLock(double damage, String... requirements);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");