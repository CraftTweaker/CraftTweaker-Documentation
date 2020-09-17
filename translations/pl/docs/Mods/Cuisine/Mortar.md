# Moździerz

## Dodanie

```zenscript
importuj mods.cuisine.Mortar;

// Trzeci parametr 'step' oznacza "ile razy musisz wypchnąć szkodnika"
Moździerz. dd(IItemStack[] dane wejściowe, wyjściowe IItemStack, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Usuwanie

```zenscript
importuj mods.cuisine.Mortar;

// Usuń przez wejście.
Mortar.remove(IItemStack[] wejścia);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Usuń przez wyjście.
Mortar.removeByOutput(IIngredient output);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Usuń przez identyfikator.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Usuń wszystko!
Mortar.removeAll();
```