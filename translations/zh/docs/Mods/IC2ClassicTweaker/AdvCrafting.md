# Advanced Recipes

## 所属包名

```zenscript
import mods.ic2.AdvRecipes;
```

## 配方类型
有几种配方：

### 形状配方
形状的配方是一种配方，在这种配方中，哪个项目进入哪个配置。 For example, you can't just arrange 7 different sized stacks of iron ingots in any order to create iron leggings. 形状很重要，因此它是一种形状的配方。

### 无缝配方
无缝配方是配方的，只有你放置在网格中的物品才是配方的，而形状则不重要。 例如，蓝色和黄色染料会产生绿色染料。 这个配方不关心你放在哪里的项目。

## 添加配方

### 添加了
```zenscript
mods.ic2.AdvRecipes.addShaped(output,inputs);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (see below)

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
So the recipe for Iron Leggings would be written as `[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
If that looks to confusing, try splitting the arrays up into one array per line
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

AdvRecipes.addShaped(leggings,
 [[iron * 5,iron * 7,iron * 5],
  [iron * 3,null,iron * 3],
  [iron,null,iron]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(output,inputs)
```

This creates a shapeless stacked recipe for `output` using `inputs` as Ingredients.

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack output, IIngredient[] ingredients);
mods.ic2.AdvRecipes.addHiddenShaped(IItemStack output, IIngredient[][] ingredients);
```

This creates a shaped or shapeless stacked recipe for `output` using `inputs` as Ingredients that is hidden. 
