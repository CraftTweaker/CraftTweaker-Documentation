# Pure Daisy

El paquete PureDaisy se utiliza para añadir o quitar recetas para/de la Botanía Pure Daisy.

## Llamando

Puedes llamar al paquete PureDaisy usando `mods.botania.PureDaisy`

## Encontrar todas las recetas registradas

Puedes encontrar todas las recetas Pure Daisy registradas usando [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

El tiempo por defecto es 150 ticks

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, ItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Eliminación de receta

```zenscript
//mods.botania.PureDaisy.removeRecipe(salida IIngredient);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```