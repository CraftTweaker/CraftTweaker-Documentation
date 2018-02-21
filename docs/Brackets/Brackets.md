# 括弧对象

ZenScript 使用括弧对象来封装游戏中诸如物品、实体、矿物词典之类的东西。

## 如何使用 Bracket 处理器

在 ZenScript 中，在 `<` 和 `>` 字符间的任意字符串均被定义为括弧对象。

一个经典的括弧对象就是物品括弧对象，它能够访问游戏内的物品。

## 示例

一个[物品括弧对象](/Vanilla/Brackets/Bracket_Item)大致如下：

```
<minecraft:apple>
```

这给予了你访问游戏中`苹果`[物品](/Vanilla/Items/IItemStack)的能力。

一个[矿物词典括弧对象](/Vanilla/Brackets/Bracket_Ore)大致如下：

```
<ore:ingotIron>
```

这给予了你访问游戏中 `ingotIron` [矿物词典](/Vanilla/OreDict/IOreDictEntry)的能力。
