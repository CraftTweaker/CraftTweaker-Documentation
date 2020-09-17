# 化学组合

# 所属包名
```zenscript
mods.alchemistry.合并器
```

## 方法
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** - 该配方的输出。

- **[IItemStack](/Vanilla/Items/IItemStack/)输入** - 该配方的输入。


## 添加配方
```zenscript
mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>, null,
     <alchemistry:element:5>]);
```

## 删除配方
```zenscript
mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();
```


# 游戏阶段集成

## 新配方
```zenscript
mods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## 现有配方

```zenscript
mods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
