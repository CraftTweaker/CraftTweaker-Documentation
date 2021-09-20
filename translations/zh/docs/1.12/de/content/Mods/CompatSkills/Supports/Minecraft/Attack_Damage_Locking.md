# 攻击伤害锁定

## 功能：

这个特性锁定了玩家使用攻击伤害大于等于设定值的武器/工具的能力。 就是说，在下面的例子中，任何攻击伤害大于等于0.75的武器只能在末地使用。

For reference: 1 Damage = 0.5 Hearts You can see a quick reference guide to damage under [This Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Syntax:

    mods.compatskills.DamageLock.addDamageLock(double damage, String... requirements);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");