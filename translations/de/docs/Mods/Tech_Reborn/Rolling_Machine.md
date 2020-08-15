# Rollen_Maschine

## Paket wird importiert
`mods.techreborn.rollingMachine`

## Rezepte hinzufügen
```zenscript
mods.techreborn.rollingMachine.addShaped(IItemStack Output, IIngredient[][] Zutaten);
mods.techreborn.rollingMachine.addShapeless(IItemStack Output, IIngredient[] Inhaltsstoffe);
```

## Rezepte entfernen
```zenscript
mods.techreborn.rollingMachine.removeRecipe(IItemStack Ausgabe);
mods.techreborn.rollingMachine.removeAll();
```