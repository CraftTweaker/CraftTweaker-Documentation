# Bark Recipes

### Class

```zenscript
import mods.roots.Bark;
```

#### Methods

```zenscript
static void addRecipe(
  string name,        // the name of the recipe
  IItemStack woodLog, // the itemstack equivalent of the wood log being broken
  IItemStack bark     // the itemstack of the type of bark this log produces
);
```


---


### Examples

```zenscript
import mods.roots.Bark;

// Note that quantities on the output are currently ignored and the
// number of items produced is relative to your fortune level.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>);
```

### Notes

No functionality exists for removing bark recipes or the knife->bark functionality. 
