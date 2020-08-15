# Gliniany Wykrywanie

## Pakiet
```zenscript
importuj mods.terrafirmacraft.ClayKpieping;
```

## Dodanie

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Usuwanie

```zenscript
ClayKnapping.removeRecipe(wyjście IItemStack);
ClayKnapping.removeRecipe(RejeststryName);
```

## Przykład
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```