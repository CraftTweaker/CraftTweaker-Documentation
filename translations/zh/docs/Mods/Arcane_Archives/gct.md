### Class

```zenscript
import mods.arcanearchives.GCT;
```

#### Methods

```zenscript
void addRecipe(
  string name,         // the recipe name
  IItemStack output,   // the output as an itemstack
  IIngredient[] inputs // the inputs as an array of ingredients
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the output itemstack to be removed (quantity must match)
);
```

* * *

```zenscript
void replaceRecipe(
  string name,         // the recipe name (must already exist)
  IItemStack output,   // the output as an itemstack
  IIngredient[] inputs // the inputs as an array of ingredients
);
```

* * *

### Examples

```zenscript
import mods.arcanearchives.GCT;

// Removes the recipe for radiant dust
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Adds a new recipe for radiant dust
GCT.addRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Replaces the shaped radiant quartz recipe without disordering the GCT screen
GCT.replaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```