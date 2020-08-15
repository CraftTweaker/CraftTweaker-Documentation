# Advanced Recipes

## Pakiet

```zenscript
import mods.ic2.AdvRecipes;
```

## Typy przepisów
Istnieje kilka rodzajów przepisów:

### Kształtowane przepisy
Kształtowane przepisy są przepisami, gdzie ma to znaczenie, do których elementów dołącza się miejsce. For example, you can't just arrange 7 different sized stacks of iron ingots in any order to create iron leggings. Kształt ma znaczenie, a więc jest to przepis.

### Bezkształtne przepisy
Bezkształtne przepisy są przepisami, w których tylko przedmioty umieszczane w siatki wytwarzania, podczas gdy kształt nie ma znaczenia. Na przykład barwnik niebieski i żółty tworzą barwnik zielony. Ten przepis nie troszczy się o to, gdzie umieścisz dany przedmiot.

## Dodaj przepisy

### dodany
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
