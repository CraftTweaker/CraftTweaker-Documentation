# Mortaio

## Addizione

```zenscript
import mods.cuisine.Mortar;

// Il terzo parametro 'step' significa "quante volte è necessario premere il pestello"
Mortar. dd(IItemStack[] inputs, IItemStack output, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Rimozione

```zenscript
import mods.cuisine.Mortar;

// Remove by input.
Mortar.remove(IItemStack[] input);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Rimuovi dall'output.
Mortar.removeByOutput(IIngredient output);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Remove by identifier.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Rimuovi tutto!
Mortar.removeAll();
```