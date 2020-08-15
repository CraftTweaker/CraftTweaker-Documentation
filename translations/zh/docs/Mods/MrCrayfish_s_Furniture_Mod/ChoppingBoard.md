# 查找棋盘

聊天板允许你把一个项目砍成另一个项目的许多块。

默认情况下，只将面包切为 6 个面包切割。

## 正在删除聊天室

## 删除匹配的切换配方。

```zenscript
mods.cfm.ChoppingBoard.remove(@Opinion final IIngredient output, @Opinion final IIngredient input);

// 删除配方作为输入项
mods.cfm.ChoppingBoard. 表情符号(null,<minecraft:bread>);
// 删除会导致6个面包切片的配方(与上面的配方相同，如果后来使用，将不会产生任何效果)
模组。 fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withamount(6))；
```

## 正在添加聊天室

添加一个chopping配方。

## 输入的堆栈大小为1。

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack 输入)；

// 将配方添加到chop wheat 到 2 sticks
mods.cfm.ChoppingBoard. ddRecipe(<minecraft:stick>.witter (2),<minecraft:wheat>);
// 将配方添加到chop bread 到3 wheat
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.witter (3),<minecraft:bread>);
```