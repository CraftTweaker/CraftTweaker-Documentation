# 锯子

## 基本配方

* 添加锯齿配方 - 输入 *MUST* 有一个与他们相关联的方块。

```zenscript
mods.betterwithmods.Saw.add(IIngredient input, IItemStack[…]output);
//examps
mods.betterwithmods.Saw.add(<minecraft:fence>[<minecraft:stick>,<minecraft:stick>]);
```

## 通过输入删除

* 删除基于输入成分的配方

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## 按输出移除

* 移除基于输出的配方

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[…]输出);
```

## 移除所有

* 删除所有配方

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## 构建器

圣有一个配方构造器。 由于看到它的性质，目前它没有特殊的构造方法，我将记载这种方法。

* 创建一个新的锯齿构建器。 `mods.betterwithmods.Saw.builder()`

* 锯齿方法
     
     * 设置配方的输入和输出  
              zenscript
              buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
     
     * 完成配方并将其添加到游戏  
              zenscript
              build()

### 示例生成器使用情况

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();