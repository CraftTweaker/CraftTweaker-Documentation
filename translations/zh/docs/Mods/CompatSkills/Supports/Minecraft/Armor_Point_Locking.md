# 护甲值锁定

## 功能：

这类锁定，通过条件锁定了使用提供特定护甲值的装备的能力。 就是说，如果一个装备提供0.75护甲值，在下面的例子中，你可以使它仅用于末地(Dim 1)！

## 语法：

    mods.compatskills.ArmorLock.addArmorLock(double armor, String... requirements);
    
    mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");