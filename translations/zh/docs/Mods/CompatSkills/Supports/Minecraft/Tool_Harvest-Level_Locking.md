# 工具挖掘等级锁定

## 功能：

这个锁定允许整合作者通过挖掘等级锁定所有或者 "types" 类型的工具。 就是说，你可以通过条件锁定所有挖掘等级 3 的镐。 或者通过条件锁定所有挖掘等级为 3 的工具。

## 语法：

    mods.compatskills.HarvestLock.addToolLevelLock(int level, String... requirements);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... requirements);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("pickaxe", 3, "dim|1");