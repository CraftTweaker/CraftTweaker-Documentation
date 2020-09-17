# 转炉类

CraftTfinde允许您添加 `添加` 和 `删除` 熔炉配方并更改项目的燃料值。

## 配方

### 移除

有两种方法去除熔炉配方：

```zenscript
熔炉.remove(Ingredient 输出)
```

和

```zenscript
炉.remove.remove(I成分输出, IIngredient 输入)；
```

第一个语法更灵活，会删除所有输出 `给定输出` 的熔炉配方。  
第二个语法对被删除的配方更加严格，会移除输出 `输出` 并输入 `输入`的所有熔炉配方。

还有第三种方法去除熔炉配方，但这种方法将删除在游戏中注册的所有熔炉配方。

```zenscript
熔炉.移除所有();
```

### 加

添加熔炉配方有两个命令：

```zenscript
furace.addRecipe(IItemStack 输出, Ingredient 输入)；
```

和

```zenscript
furace.addRecipe(IItemStack 输出, Ingredient 输入, 双倍xp)；
```

第一个语法将添加一个熔炉配方，会给熔炼提供0xp。

第二个语法将添加一个熔炉配方，在熔炼中给予 `xp` xp 。

## 燃料

### 设置

设置燃料值的命令是：

```zenscript
furace.setFuel(Ingredient input, int burning Time)；
```

这将把 `输入` 的燃烧值设置为 `燃烧时间` 刻录。 Minecraft煤烧焦1600秒，80秒，8个物品。 Minecraft炉中的1个物品需要200个勾才能完成。

将 `燃烧时间` 设置为 `0` 将停止 `输入` 将不再是燃料物品。

### 获取

检索物品燃料值的命令是：

```zenscript
furnace.getFuel(IItemStack item); 
```

这将作为整数返回刻录值

## 例子

### 移除

这将移除输出的所有熔炉配方 `<minecraft:glass>`

```zenscript
炉.移除(<minecraft:glass>)；
```

这将移除所有熔炉配方 `<minecraft:quartz>` 这些配方使用 `<minecraft:quartz_ore>` 作为输入。

```zenscript
转炉.移除(<minecraft:quartz>, <minecraft:quartz_ore>)；
```

### 加

这将添加一个熔炉配方，在熔炼 `<minecraft:apple>` 时输出一个 `<minecraft:golden_apple>`

```zenscript
furace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

这将添加一个熔炉配方，在一个 `<minecraft:melon>` 被熔化时输出一个 `<minecraft:speckled_melon>` ，并将给玩家1500 xp 点数。

```zenscript
furace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500)；
```

### 燃料

这将把燃料值设置为 `<minecraft:rotten_flesh>` 到 `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## 其他功能

### 获取所有注册转炉配方

```zenscript
所有炉；
```

返回 [`列表<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/)。