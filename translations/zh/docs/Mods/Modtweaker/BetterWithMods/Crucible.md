# 关键的

## 基本配方

* 添加一个无炉灶的配方 

```zenscript
mods.betterwithmods.Crucible.addunstoked(IIngredient[……]inputes,IItemStack[……]输出);
//examps
mods.betterwithmods.Crucible.addunstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.crucible.addunstoked(<minecraft:dirt>],[<minecraft:grass>]);
```

* 添加一个商店的残忍配方 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[Ingredient]inputs;
//examps
mods.betterwithmods.crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked(<minecraft:dirt>],[<minecraft:grass>]);
```

## 移除

* 移除基于输出的关键配方

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[…]输出);
```

* 删除所有关键的配方

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## 构建器

残忍有一个配方生成器，可以对配方进行更准确的控制。 所有以前的方法都是使用构建器的简单捷径。

* 创建一个新的残酷建筑器。 `mods.betterwithmods.Crucible.builder()`

* 关键方法
     
     * 设置配方的输入和输出  
              zenscript
              buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
     
     * 设定配方的优先级，优先级越早确定。 默认=0。  
              zenscript
              setPriority(int priority)
     
     * 设置配方的热量要求。 热能用来检查配方是否可以用炉灶或无炉灶。 无炉热=1，存储热=2。 您可以使用 [热注册表](/Mods/Modtweaker/BetterWithMods/HeatRegistry/) 添加自定义的热源，甚至自定义的热量。  
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
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```