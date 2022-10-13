
### Class

```zenscript
import mods.roots.Bark;
```

#### Methods

```zenscript
void addRecipe(
  string name,        // the name of the recipe
  IItemStack woodLog, // the itemstack equivalent of the wood log being broken
  IItemStack bark     // the itemstack of the type of bark this log produces (including stack count)
);
```

Adds a recipe that converts a block (in the form of an item stack) into another item stack. Log input *must* be an itemblock.

---


```zenscript
void removeRecipe(
  IItemStack bark // the itemstack of the type of bark to remove (excluding stack size)
);
```

Removes a bark recipe via output from the list.

---


### Ejemplos

```zenscript
import mods.roots.Bark;

// Will produce 2 sand from a melon block broken by a knife.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// Removes wildwood bark from the default list
Bark.removeRecipe(<roots:bark_wildwood>);
```
