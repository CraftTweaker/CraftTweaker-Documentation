# 基尔文

## 基本配方

* 添加 Kiln 配方 - 输入 *MUST* 有一个与他们相关联的方块。

```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[…]输出);
//examps
mods.betterwithmods.Kiln.add(<minecraft:fence>[<minecraft:stick>,<minecraft:stick>]);
```

## 通过输入删除

* 删除基于输入成分的配方

```zenscript
mods.betterwithmods.Kiln.remove(IIngredient 输入)；
```

## 按输出移除

* 移除基于输出的配方

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## 移除所有

* 删除所有配方

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## 构建器

玉米有一个配方生成器，可以更准确地控制配方。 所有以前的方法都是使用构建器的简单捷径。

* 创建一个新的 Kiln 构建器。 `mods.betterwithmods.Kiln.builder()`

* 公斤法
     
     * 设置配方的输入和输出  
              zenscript
              buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
     
     * 设置配方的热量要求。 热能用来检查配方是否可以用炉灶或未炉灶。 无炉热=1，存储热=2。 您可以使用 [热注册表](/Mods/Modtweaker/BetterWithMods/HeatRegistry/) 添加自定义的热源，甚至自定义的热量。  
              zenscript
              setHeat(int heat)
     
     * 设置配方以忽略热值和制作任何方式  
              zenscript
              setIgnoreHeat(布尔值忽略热)
     
     * 完成配方并将其添加到游戏  
              zenscript
              build()

### 示例生成器使用情况

```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## 结构块

基尔是一个基于它的方块的多方块； 这允许注册一个可以用于创建结构的模块。

输入必须是 *块*

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack 输入);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```