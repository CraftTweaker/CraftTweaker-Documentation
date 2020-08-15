# Decay Generator

## Paket wird importiert
`mods.nuclearcraft.DecayGenerator`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.DecayGenerator.addRecipe(IIngredient-BlockInput, IIngredient-BlockOutput, double meanLifetime, double power, double radiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.DecayGenerator.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.DecayGenerator.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.DecayGenerator.removeAllRezept();
```