# 工作台

### 添加工作台配方
```zenscript
#格式为:
craftingTable.addShaped(String recipeName , IItemStack output, IIngredient[] components, @ZenCodeType.Opy RecipeFunctionMatrix recipeFunction);
#以下为两钻石两燧石合成一个弓箭的示例:
craftingTable.addShaped("shaped_mirror_test", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:diamond>], [<item:minecraft:air>, <item:minecraft:flint>], null;

```

```zenscript
#镜像合成格式
addShapedMirrored(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);

```

```zenscript
#无序合成格式
addShapeless(String recipeName, IItemStack output, IIngredient[] ingredients, @ZenCodeType.Optional RecipeFunctionArray recipeFunction);

```

