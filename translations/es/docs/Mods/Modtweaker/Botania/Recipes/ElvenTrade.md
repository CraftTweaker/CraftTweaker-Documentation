# Comercio de Elfos

El paquete ElvenTrade se utiliza para añadir o quitar recetas hacia/desde el Portal de Botanía a Alfheim.

## Llamando

Puedes llamar al paquete ElvenTrade usando `mods.botania.ElvenTrade`

## Encontrar todas las recetas registradas

Puedes encontrar todas las recetas registradas de ElvenTrade usando [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] salidas, IIngredient[] entrada);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Eliminación de receta

```zenscript
//mods.botania.ElvenTrade.removeRecipe(salida IIngrediente);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```