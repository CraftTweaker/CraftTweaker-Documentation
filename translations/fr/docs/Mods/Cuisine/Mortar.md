# Mortier

## Ajouter

```zenscript
import mods.cuisine.Mortar;

// Le troisième paramètre 'step' signifie "combien de fois vous devez pousser vers le bas"
Mortar. dd(IItemStack[] entrées, sortie IItemStack, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Retirer

```zenscript
import mods.cuisine.Mortar;

// Supprimer par entrée.
Mortar.remove(IItemStack[] input);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Supprimer par sortie.
Mortar.removeByOutput(IIngredient output);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Supprimer par identifiant.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Supprime tout !
Mortar.removeAll();
```