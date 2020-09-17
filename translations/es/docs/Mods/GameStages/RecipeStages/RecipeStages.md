# Etapas de receta

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Las etapas de las recetas permiten que las recetas de las tablas de elaboración sean restringidas por un sistema de progresión personalizado. Para más información, echa un vistazo a la página de mod [aquí](https://minecraft.curseforge.com/projects/recipe-stages)

## Métodos

Añade una receta en forma que está bloqueada detrás de una etapa.

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShaped(String name, String Star, IItemStack output, IIngredient[][] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recetas. ddShaped("dos", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods. ecipestages.Recipes.addShaped("test", "uno", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Añade una receta con forma de espejo que está bloqueada detrás de una etapa.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShapedMirrored(String name, String stage, IItemStack output, IIngredient[][] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recetas. ddShapedMirrored("doso", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods. ecipestages.Recipes.addShapedMirrored("test_mirrored", "uno", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Añade una receta sin forma que está bloqueada detrás de una etapa.

```zenscript
//mods.recipestages.Recipes.addShapeless(String Stack, Salida de ItemStack, IIngredient[] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recetas. ddShapeless(String name, String Sting, IItemStack output, IIngredient[] ingredientes, @Optional IreccipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recipes.addShapeless("uno", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "uno", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Establece el estadio de una receta no escalonada.

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, ItemStack output);
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStage("uno", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("uno", "minecraft:boat");
```

Establece el estado de todas las recetas que hacen objetos de un mod determinado.  
Más específicamente, etapa todas las recetas que tienen el cambio dado como dominio de recursos.  
NO funciona con expresiones regulares, así que usando `.*` como argumento no haría nada!

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);
mods.recipestages.Recipes.setRecipeStageByMod("uno", "minecraft");
```

Establece el estado de todas las recetas basadas en un chequeo de regex contra su nombre.

```zenscript
//mods.recipestages.Recipes.setRecipeStageByRegex(String name, String modid);
//Esto establece la etapa de todas las recetas que solo contiene números a la etapa "uno"

mods.recipestages.Recipes.setRecipeStageByRegex("uno", "^[0-9]*$");
```

Le dice a las Fases de Recetas que impriman los nombres de los Contenedores para chatear

```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Etapas" un contenedor, permitiéndole fabricar recetas desde ciertas etapas

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] stages);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "uno");
```

"Etapas" un paquete, permitiendo a todos los contenedores del paquete fabricar recetas desde ciertas etapas

```zenscript
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] stages);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```