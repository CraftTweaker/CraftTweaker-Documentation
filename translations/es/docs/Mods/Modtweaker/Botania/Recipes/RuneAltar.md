# Altar de Runa

El paquete RuneAltar se utiliza para añadir o quitar recetas para/del Altar de Runa de Botania.

## Llamando

Puedes llamar al paquete RuneAltar usando `mods.botania.RuneAltar`

## Encontrar todas las recetas registradas

Puede encontrar todas las recetas registradas de Rune Altar usando [`/ct botania altar`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

```zenscript
//mods.botania.RuneAltar.addRecipe(salida ItemStack, IIngredient[] entrada, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Eliminación de receta

```zenscript
//mods.botania.RuneAltar.removeRecipe(salida IIngrediente);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```