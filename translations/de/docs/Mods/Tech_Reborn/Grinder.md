# Schleifer

## Paket wird importiert
`mods.techreborn.grinder`

## Rezepte hinzufügen
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack Output, IIngredient input1, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.grinder.removeInputRecipe(IZutat);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```