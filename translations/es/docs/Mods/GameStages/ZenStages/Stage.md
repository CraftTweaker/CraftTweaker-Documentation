# Etapa

La etapa es la clase que se le da cuando crea una nueva "Stage" que la clase contiene todo el método principal que necesita para montar una entrada a esa *Stage*. ¡Es así de sencillo! Una vez que haya añadido todas las entradas que necesita. ¡No te olvides de construir la etapa!

## Importando el paquete

`importar mods.zenstages.Stage;`

## Qué hacer con él

### ZenGetters y ZenMethods sin parámetros

| ZenGetter | ¿Qué hace                        | Tipo de devolución |
| --------- | -------------------------------- | ------------------ |
| etapa     | Devuelve el nombre del escenario | cadena             |

### Métodos de Staging

**Nota: Todos estos métodos solo funcionarán con la clase Escenal dada cuando crees un Escenario usando [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) para guardarlos en una estática así que puedes hacer referencia de otras clases si es necesario.**

Compruebe si un [tipo personalizado](/Mods/GameStages/ZenStages/CustomType/) ha sido escenario de esta etapa.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

Añadir un ingrediente a una etapa. Por defecto es verdadero el parámetro opcional para escalar la receta de dicho Ingrediente.

```zenscript
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredientes, @Optional(valueBoolean = true) boolean recipeStage);
TestStage. ddIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Agrega un Soberano Ingrediente. Esto se utiliza cuando escenas un mod entero a través del ModId pero necesitas re-stage algunos elementos del mod a otro [Stage](/Mods/GameStages/ZenStages/Stage/), por lo que esto le permite re-stage de elementos.

```zenscript
// añadir IngredientOverride(ingrediente IIngrediente, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Añadir un ModId a una etapa. Esto pasará todos los elementos encontrados que están registrados por el modId proporcionado a la etapa. También puede proporcionar una matriz de IIngredients que los elementos proporcionados no se establecerán.

```zenscript
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Añadir un ILiquidStack a una etapa.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Añadir una dimensión a una etapa. Requiere [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) para ser instalado.

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Añade un nombre de receta a una etapa. Requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Añade un nombre de receta a una etapa. Requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Añade un mob a una etapa. Requiere [Móviles](/Mods/GameStages/MobStages/MobStages/) para ser instalado.

```zenscript
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestStage. ddMobs(["minecraft:skeleton", "minecraft:skeleton_horse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"], 9);
```

Añadir un nombre de material TiC a una etapa. Requiere que [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) esté instalado.

```zenscript
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

Agrega un modificador TiC a una etapa. Requiere que [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) esté instalado.

```zenscript
// añadirTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Añadir un Multiblock IE a una etapa. Requiere [Fase de bloques múltiples](https://github.com/The-Acronym-Coders/MultiBlock-Stages/) para ser instalada.

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Añadir un reemplazo de mineral a una etapa. Requiere [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) para ser instalado.

```zenscript
// addOreplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreplacement(IIngredient blockToHide, ItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage. ddOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreplacement(<chisel:redstone>, <chisel:granite>, true);
```