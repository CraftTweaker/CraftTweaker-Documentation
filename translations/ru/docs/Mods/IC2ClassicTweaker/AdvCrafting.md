# Advanced Recipes

## Пакет

```zenscript
import mods.ic2.AdvRecipes;
```

## Типы рецептов
Существует несколько типов рецептов:

### Рецепты Формы
Формированные Рецепты - это рецепты, в которых имеет значение, в которые входит предмет. For example, you can't just arrange 7 different sized stacks of iron ingots in any order to create iron leggings. Таким образом, эта форма имеет форму рецепта.

### Рецепты без форм
Рецепты без форм - это рецепты, где только те предметы, которые вы поместите в сетку ремесла, в то время как форма не имеет значения. Например, синяя и желтая краска создадут зеленый краситель. Этот рецепт не заботится о том, где вы поставили предмет.

## Добавить рецепты

### addShaped
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
