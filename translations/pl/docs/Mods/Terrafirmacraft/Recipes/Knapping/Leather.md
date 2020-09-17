# Skórzany Kupiec

## Pakiet
```zenscript
importuj mods.terrafirmacraft.leatherKnapping;
```

## Dodanie

```zenscript
letherKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Usuwanie

```zenscript
SktherKnapping.removeRecipe(wyjście IItemStack);
leatherKnapping.removeRecipe(RejeststryName);
```

## Przykład
```zenscript
// receptura na quiver
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", " XXXX");
```