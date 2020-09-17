# 磨机

## 基本配方

* 添加一个磨料配方 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[…]输入, IItemStack[…]输出);
/examps
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## 移除

* 移除基于输出的 Mill 配方

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[…]输出);
```

* 移除所有磨料配方

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## 构建器

制造厂有一个配方生成器，可以更准确地控制配方。 所有以前的方法都是使用构建器的简单捷径。

* 创建一个新的制造厂商。 `mods.betterwithmods.Mill.builder()`

* 制造商方法
     
     * 设置配方的输入和输出  
              zenscript
              buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
     
     * 设定配方的优先级，优先级越早确定。 默认=0。  
              zenscript
              setPriority(int priority)
     
     * 设置磨机配方的声音.  
              zenscript
              setSound(声音位置)
     
     * 完成配方并将其添加到游戏  
              zenscript
              build()

### 示例生成器使用情况

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```