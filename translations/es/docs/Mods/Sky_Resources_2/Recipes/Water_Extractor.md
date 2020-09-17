# Extractor de agua

El paquete de *extractor de agua* se utiliza para agregar o quitar recetas para//del proceso de inserción y extracción del extractor de agua.

## Llamando

Puedes llamar al paquete *del extractor de agua* usando `mods.skyresources.waterextractor`

## Adición de receta

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int water’s, ItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. kyresources.waterextractor.insert.addRecipe(salida ItemStack, entrada IIngredient, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Receta eliminada

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterer’s, ItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```