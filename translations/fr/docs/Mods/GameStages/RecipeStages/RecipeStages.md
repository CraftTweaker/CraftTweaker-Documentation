# Étapes de la recette

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Les étapes de recettes permettent aux recettes de tables d'artisanat d'être limitées par un système de progression personnalisé. Pour plus d'informations, consultez la page des mods [ici](https://minecraft.curseforge.com/projects/recipe-stages)

## Méthodes

Ajoute une recette en forme qui est verrouillée derrière une étape.

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShaped(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. Recettes ddShaped("deux", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods ecipestages.Recipes.addShaped("test", "une", <minecraft:iron_leggings>,[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Ajoute une recette en forme de miroir qui est verrouillée derrière une étape.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShapedMirrored(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. Recettes ddShapedMirrored("deux", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods ecipestages.Recipes.addShapedMirrored("test_mirrored", "un", <minecraft:iron_leggings>,[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Ajoute une recette informe qui est verrouillée derrière une étape.

```zenscript
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes. ddShapeless(String name, String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recipes.addShapeless("une", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "un", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Définit l'étape d'une recette non échelonnée.

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, IItemStack output);
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("une", "minecraft:boat");
```

Définit la phase de toutes les recettes qui fabriquent des objets à partir d'un certain mod.  
Plus spécifiquement, met en scène toutes les recettes qui ont la modification donnée comme domaine de ressource.  
Ne fonctionne PAS avec les expressions rationnelles, donc utiliser `.*` comme argument ne ferait rien !

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);
mods.recipestages.Recipes.setRecipeStageByMod("une", "minecraft");
```

Définit la phase de toutes les recettes en se basant sur une vérification de regex par rapport à leur nom.

```zenscript
//mods.recipestages.Recipes.setRecipeStageByRegex(String name, String modid);
//Ceci définit le stade de toutes les recettes qui ne contiennent que des nombres pour mettre en scène "un"

mods.recipestages.Recipes.setRecipeStageByRegex("un", "^[0-9]*$");
```

Indique à RecipeStages d'imprimer les noms de conteneur pour discuter

```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Étape" un contenant, lui permettant de fabriquer des recettes à partir de certaines étapes

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] étapes);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

"Stages" un paquet, permettant à tous les conteneurs de l'emballage de fabriquer des recettes à partir de certaines étapes

```zenscript
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] stages);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```