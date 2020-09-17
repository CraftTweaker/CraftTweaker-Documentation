# Inscrito

### Importando

```zenscript
importar mods.appliedenergistics2.Inscriber;
```

### Agregando

Cuando el `inscribir` booleano es verdadero, las entradas superior e inferior no se consumen.

```zenscript
Inscritor. ddRecipe(Salida ItemStack, entrada ItemStack, inscribe booleana, @Optional IItemStack topInput, @Optional ItemStack bottomInput);

//convierte huevos en Huevos de Skele Wither, no consume cráneo
Inscriber. ddReceta(<minecraft:spawn_egg:5>, <minecraft:egg>, true <minecraft:skull:1>);

//combina pan, frijoles de coco y azúcar. todas las entradas se consumen
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### Eliminando

```zenscript
Inscriber.removeRecipe(salida IItemStack);

//elimina la receta de silicio impresa 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```