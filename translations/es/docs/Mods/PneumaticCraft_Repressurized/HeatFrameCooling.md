# Enfriamiento de marco de calor

El enfriamiento de marco de calor puede utilizarse para transformar un objeto en otro colocando objetos en un cofre u otro inventario con un marco de calor adjunto, y enfriarlo por debajo de 0°C (comúnmente usando un tubo Vortex).

## Llamando

Puede llamar al paquete de Enfriamiento de Marco Calor usando `mods.pneumaticcraft.heatframecooling`

## Eliminando

Esta función elimina la primera receta que encuentra con la salida [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dada`:

```zenscript
mods.pneumaticcraft.heatframecooling.removeRecipe(salida IIngrediente);
// Ejemplo
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

Esta función elimina *todas las* recetas de enfriamiento de marcos de calor:

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## Agregando

Estas funciones se utilizan para añadir nuevas recetas para el sistema de enfriamiento de marcos de calor:

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```