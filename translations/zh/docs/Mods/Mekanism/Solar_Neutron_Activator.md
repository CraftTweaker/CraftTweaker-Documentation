# 太阳中子激活器

截至Mekanism 9.7。 现在可以通过命令 `/ct mek配方solarneutronactivator` 查看太阳中子激活器的所有配方字符串。

## 加

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanis.solarneuactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## 移除

```zenscript
mods.mekanism.solarneutractivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutractivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

由于Mekanism 9.7.0，现在可以移除所有太阳中子激活器配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.solarneutronactivator.removeAllRecipes();
```