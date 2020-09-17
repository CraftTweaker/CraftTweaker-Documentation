# Étape

Le stage est la classe que vous recevez lorsque vous créez un nouveau "Stage", la classe contient toute la méthode principale dont vous avez besoin pour mettre en place une entrée vers cette *Stage*. C'est aussi simple que ça! Une fois que vous avez ajouté toutes les entrées dont vous avez besoin. N'oubliez pas de construire l'étape !

## Importation du paquet

`Importer mods.zenstages.Stage;`

## Que faire avec ça

### ZenGetters et ZenMethods sans paramètre

| ZenGetter | Que fait-il               | Type de retour       |
| --------- | ------------------------- | -------------------- |
| étape     | Renvoie le nom de l'étape | chaîne de caractères |

### Méthodes de pré-production

**Remarque : Toutes ces méthodes ne fonctionneront qu'avec la classe Stage donnée lorsque vous créez une Stage en utilisant [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) afin de les enregistrer dans un statique afin que vous puissiez référencer depuis d'autres classes si nécessaire.**

Vérifie si un [type personnalisé](/Mods/GameStages/ZenStages/CustomType/) a été mis en scène à cette étape.

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] valeurs);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] valeurs);
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

Ajouter un ingrédient à une étape. Par défaut, le paramètre optionnel a été mis en place pour la recette de cet ingrédient.

```zenscript
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boopeStage);
TestStage. ddIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Ajouter une substitution d'ingrédients. Ceci est utilisé lorsque vous installez un mod entier via le ModId mais vous devez réorganiser certains éléments du mod vers une autre [Étape](/Mods/GameStages/ZenStages/Stage/), vous permet donc de réorganiser les éléments.

```zenscript
// addIngredientOverride(IIngredient ingredient, @Optional(valueBoolean = true) boopeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Ajouter un ModId à une étape. Ceci va mettre en scène tous les éléments trouvés qui sont enregistrés par le modId fourni à la scène. Vous pouvez également fournir un tableau d'ingrédients que les éléments fournis ne seront pas mis en scène.

```zenscript
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Ajouter une pile ILiquidStack à une étape.

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Ajouter une dimension à une étape. Nécessite [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) pour être installé.

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Ajouter un nom de recette à une étape. Nécessite [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) pour être installé.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Ajouter un nom de recette à une étape. Nécessite [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) pour être installé.

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Ajouter un monstre à une étape. Nécessite [MobStages](/Mods/GameStages/MobStages/MobStages/) pour être installé.

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

Ajouter un nom de matériau TiC à une étape. Nécessite [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) pour être installé.

```zenscript
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "feron"]);
```

Ajouter un modificateur TiC à une étape. Nécessite [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) pour être installé.

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Ajouter un multi-bloc IE à une étape. Nécessite [Multi Block Stages](https://github.com/The-Acronym-Coders/MultiBlock-Stages/) pour être installé.

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Ajouter un remplacement de minerai à une étape. Nécessite que [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) soit installé.

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreReplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage. ddOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>, true);
```