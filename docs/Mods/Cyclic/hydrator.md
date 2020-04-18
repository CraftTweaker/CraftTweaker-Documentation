### Mod Info

<a href="https://github.com/Lothrazar/Cyclic/issues">Issue Tracker</a>
<br>
<a href="https://www.curseforge.com/minecraft/mc-mods/cyclic">Downloads on Curseforge</a>


### Example

```zenscript
import mods.cyclicmagic.Hydrator;

// Four ice into dirt using 10 units of water
Hydrator.addRecipe(<minecraft:dirt>, [<minecraft:ice>, <minecraft:ice>, <minecraft:ice>, <minecraft:ice>], 10);

// remove all recipes that create packed ice
Hydrator.removeShapedRecipe(<minecraft:packed_ice>);
```


#### Add Recipe

```zenscript
void addRecipe(
  IItemStack output,   // the output as an itemstack
  IIngredient[] input,   // the input as an itemstack
  int water,   // the number of ticks to process (1000 = 1 bucket)
  );
```


#### Remove Recipes


```zenscript
void removeShapedRecipe(
  IItemStack output // the output itemstack to be removed. Will remove all recipes that output this item
);
```

