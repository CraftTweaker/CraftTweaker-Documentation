# 尖括号引用

ZenScript 使用尖括号引用游戏中诸如物品、实体、矿物词典之类的东西。

## 如何使用尖括号

在 ZenScript 中，在 `<` 和 `>` 字符间的任意字符串均被定义为尖括号引用。

尖括号引用的经典示例是物品尖括号引用，用于访问游戏内的物品。

## 例子

一个[物品尖括号引用](/Vanilla/Brackets/Bracket_Item/)的例子：

    <minecraft:apple>
    

这将允许你访问游戏中的[物品](/Vanilla/Items/IItemStack/)`苹果`。

一个[矿物词典尖括号引用](/Vanilla/Brackets/Bracket_Ore/)的例子：

    <ore:ingotIron>
    

这将使您可以访问[矿物词典条目](/Vanilla/OreDict/IOreDictEntry/)中的 `ingotIron`条目。