### Mod Info

<a href="https://github.com/Lothrazar/Cyclic/issues">Issue Tracker</a>
<br>
<a href="https://www.curseforge.com/minecraft/mc-mods/cyclic">Downloads on Curseforge</a>


### Example

```zenscript
import mods.cyclicmagic.Packager;

// Package 9 grass into 1 dirt
Packager.addRecipe(<minecraft:dirt>, <minecraft:grass>*9);

// Package 2 dirt and 3 cobble into one grass
Packager.addRecipe(<minecraft:grass>, [<minecraft:dirt>*2, <minecraft:cobblestone>*3]);

// remove all recipes that package into an iron ingot
Packager.removeRecipe(<minecraft:iron_ingot>);
```


#### Add Recipe

```zenscript
void addRecipe(
  IItemStack output, // recipe result 
  IIngredient input   // the single ingredient
);
```

```zenscript
void addRecipe(
  IItemStack output, //  recipe result
  IIngredient[] input   // the ingredient list
);
```

#### Remove Recipes


```zenscript
void removeRecipe(
  IItemStack output //  recipe result
);
```

