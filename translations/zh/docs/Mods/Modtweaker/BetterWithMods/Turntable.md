# 可转动

## 基本配方

* 添加 Turntable 食谱-输入 *MUST* 有一个与他们相关联的方块。 产品状态是在配方完成后放置的块

```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[……]output);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[……]output);

///examps
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## 通过输入删除

* 删除基于输入成分的配方

```zenscript
mods.betterwithmods.Turntable.remove(IIngredient input);
```

## 按输出移除

* 移除基于输出的配方

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[…]输出);
```

## 移除所有

* 删除所有配方

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## 按产品删除

* 由产品国移除配方 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## 构建器

Turntable有一个配方生成器，可以更准确地控制配方。 所有以前的方法都是使用构建器的简单捷径。

* 创建一个新的 Turnable 构建器。 `mods.betterwithmods.Turntable.builder()`

* 可转换的方法
     
     * 设置配方的输入和输出  
              zenscript
              buildRecipe(IIngredient[…]输入, IItemStack[…]输出)
     
     * 设置完成配方所需的旋转. 默认为8。  
              zenscript
              setRotations(int 旋转)
     
     * 设置配方完成后放置的方块。  
              zenscript
              setProductState(ItemStack productState)
     
     * 完成配方并将其添加到游戏  
              zenscript
              build()

### 示例生成器使用情况

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```