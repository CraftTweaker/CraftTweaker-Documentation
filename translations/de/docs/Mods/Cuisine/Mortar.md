# Mörser

## Addition

```zenscript
import mods.cuisine.Mortar;

// Der dritte Parameter 'Schritt' bedeutet "wie oft Sie die Pest drücken müssen"
Mörser. dd(IItemStack[] Eingänge, IItemStack Ausgabe, int Schritt);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Entfernen

```zenscript
import mods.cuisine.Mortar;

// Nach Eingabe entfernen.
Mortar.remove(IItemStack[] Eingabe);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Von Ausgabe entfernen.
Mortar.removeByOutput(IIngredient Ausgabe);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Vom Bezeichner entfernen.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Alles entfernen!
Mortar.removeAll();
```