# Mortar

## Addition

```zenscript
import mods.cuisine.Mortar;

// The third parameter 'step' means "how many times you need to push down the pestle"
Mortar.add(IItemStack[] inputs, IItemStack output, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Removal

```zenscript
import mods.cuisine.Mortar;

// Remove by input.
Mortar.remove(IItemStack[] input);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Remove by output.
Mortar.removeByOutput(IIngredient output);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Remove by identifier.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Remove everything!
Mortar.removeAll();
```