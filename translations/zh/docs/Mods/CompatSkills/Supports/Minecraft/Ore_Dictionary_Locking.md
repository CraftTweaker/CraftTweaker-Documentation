# 矿物字典锁定

## 功能：

这个锁定可以锁定特定矿物字典下的所有物品。 就是说，如果你锁定了矿物字典条目 "oreIron" ，所有带有 "oreIron" 标签的物品/方块都会在设定条件之外被锁定。 这个锁定还支持[IData](/Vanilla/Data/IData/) 参数，就是说，这只作用于这个矿物词典标签下匹配了提供给锁的 IDATA 标签的东西。

## 语法：

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntry entry, String... locked);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry entry, IData tag, String... locked);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim|1");