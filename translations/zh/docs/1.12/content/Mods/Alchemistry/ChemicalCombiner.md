# 化学化合机（Chemical Combiner）

# 所属包
```zenscript
mods.alchemistry.Combiner
```

## 使用方式
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - 配方的输出。

- **[IItemStack](/Vanilla/Items/IItemStack/)[] input** - 配方的输入。


## 添加
```zenscript
mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## 移除
```zenscript
mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();
```


# 游戏阶段综合性

## 新建配方
```zenscript
mods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## 已有配方

```zenscript
mods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
