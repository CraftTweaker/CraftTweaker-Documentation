
### Класс

```zenscript
import mods.roots.Chrysopoeia;
```

#### Методы

```zenscript
void addRecipe(
  string name,            // the name of the recipe being added
  IIngredient ingredient, // a single ingredient (may have variable stack size)
  IItemStack output       // the output produce by Transubstantiation
);
```

Adds a transmutative recipe that converts an input (in the form of an ingredient, possibly with a variable stack size, transforms are supported), into an output (as an itemstack). Requires a name.

---


```zenscript
void removeRecipeByOutput(
  IItemStack output // the output of the recipe you wish to remove
);
```

Removes a transmutative recipe based on the output of the recipe, matches regardless of stack sizes.

---


```zenscript
void removeRecipe(
  IItemStack input // the exact input of the recipe you wish to remove
);
```

Removes a transmutative recipe based on the exact input (including size, tag, etc)

---


### Примеры

```zenscript
import mods.roots.Chrysopoeia;

// Add a recipe to transmute 5 gunpowder to 1 ghast tear
Chrysopoeia.addRecipe("ghast_tear", <ore:gunpowder>*5, <minecraft:ghast_tear>);

Chrysopoeia.addRecipe("magma_cream", <minecraft:flint_and_steel>.transformDamage(1), <minecraft:magma_cream>);

// Remove the default copper -> iron ingot recipe using the output
Chrysopoeia.removeRecipeByOutput(<minecraft:iron_ingot>);

// Remove the default silver -> gold recipe using the input
Chrysopoeia.removeRecipe(<mysticalworld:silver_ingot>*2);
```
