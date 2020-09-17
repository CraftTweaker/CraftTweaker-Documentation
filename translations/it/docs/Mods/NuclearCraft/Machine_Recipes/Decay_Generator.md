# Decay Generator

## Importazione del pacchetto
`mods.nuclearcraft.decay_generator`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOutput, double lifetimeTicks, double energyPerSecond, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```