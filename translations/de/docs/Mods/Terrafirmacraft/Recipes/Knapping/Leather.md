# Lederknabe

## Paket
```zenscript
importieren mods.terrafirmacraft.leatherKnapping;
```

## Addition

```zenscript
letherKnapping.addRecipe(String RegistryName, IItemStack Ausgabe, String... Muster);
```

## Entfernen

```zenscript
letherKnapping.removeRecipe(IItemStack Output);
letherKnapping.removeRecipe(String RegistryName);
```

## Beispiel
```zenscript
// Köcher Rezept
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```