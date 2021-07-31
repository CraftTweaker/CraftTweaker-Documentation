# 方块挖掘等级锁定

## 功能：

这个锁定使玩家不能破坏特定挖掘等级的方块，除非满足条件。 在下面的例子中，你只能在末地破坏挖掘等级为 3 的方块。 这个例子实际上不太好，但它确实显示了这种锁定能做的事。

## 语法：

    mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... requirements);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");