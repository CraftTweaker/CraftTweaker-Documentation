# 尖括号引用

ZenScript 使用尖括号引用来封装游戏中诸如物品、实体、矿物词典之类的东西。

## 如何使用尖括号引用

在 ZenScript 中，在 `<` 和 `>` 字符间的任意字符串均被定义为尖括号引用。

一个经典的尖括号引用就是物品尖括号引用，它能够访问游戏内的物品。

## 示例

一个[物品尖括号引用](/Vanilla/Brackets/Bracket_Item)大致如下：

```
<minecraft:apple>
```

这给予了你访问游戏中`苹果`[物品](/Vanilla/Items/IItemStack)的能力。

一个[矿物词典尖括号引用](/Vanilla/Brackets/Bracket_Ore)大致如下：

```
<ore:ingotIron>
```

这给予了你访问游戏中 `ingotIron` [矿物词典](/Vanilla/OreDict/IOreDictEntry)的能力。
