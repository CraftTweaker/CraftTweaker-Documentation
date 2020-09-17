# Decay Generator

## Importando el Paquete
`mods.nuclearcraft.decay_generator`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOututput, double lifetimeTicks, double energyPerSegundo, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```