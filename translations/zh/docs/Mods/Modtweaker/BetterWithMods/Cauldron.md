# 炼药店

## 基本配方

* 添加一个未炉灶的炼药剂配方 

```zenscript
mods.betterwithmods.Cauldron.adde Unstoked(IIngredient[] inputes, IItemStack[] outputs;
/examps
mods.betterwithmods.Cauldron.addunstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addunstoked(<minecraft:dirt>],[<minecraft:grass>]);
```

* 添加一个炼焦厂配方 

```zenscript
mods.betterwithmods..Cauldron.addStoked(IIngredient[…]输入, IItemStack[…]输出);
//examps
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked(<minecraft:dirt>],[<minecraft:grass>]);
```

## 移除

* 基于输出删除炼药剂配方 ```mods.betterwithmods.Cauldron.remove(IItemStack[…]输出);```

* 移除所有炼药剂 ```mods.betterwithmods.Cauldron.removeAll();```

## 构建器

炼药厂有一个配方生成器，可以对配方进行更精确的控制。 所有以前的方法都是使用构建器的简单捷径。

* 创建一个新的Cauldron构建器。 `mods.betterwithmods.Cauldron.builder()`

* 炼药法
    
    * 设置配方的输入和输出  
            buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
    
    * 设定配方的优先级，优先级越早确定。 默认=0。  
            设置优先级(优先级)
    
    * 设置配方的热量要求。 热能用来检查配方是否可以用炉灶或未炉灶。 无炉热=1，存储热=2。 您可以使用 [热注册表](/Mods/Modtweaker/BetterWithMods/HeatRegistry/) 添加自定义的热源，甚至自定义的热量。  
            setHeat(int heat)
    
    * 设置配方以忽略热值和制作任何方式  
            setIgnoreHeat(布尔值忽略热)
    
    * 完成配方并将其添加到游戏  
            build()

### 示例生成器使用情况

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```