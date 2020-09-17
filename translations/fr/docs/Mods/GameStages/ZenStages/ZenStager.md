# ZenStager

Cette classe est le gestionnaire principal pour la création de nouvelles [étapes](/Mods/GameStages/ZenStages/Stage/). qui alors vous pouvez construire pour dire au jeu de commencer à mettre en scène ce que vous avez mis en place. Il est livré pré-chargé avec des méthodes pour permettre une intégration facile avec d'autres mods en utilisant l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages) ainsi que quelques ajustements personnalisés pour rendre la vie des créateurs de modpack plus facile.

Vous pouvez trouver plus d'informations et la dernière source pour la classe [ici](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Importation du paquet

ZenStager : `importer mods.zenstages.ZenStager;`

Stage *(Recommandé pour importer aussi)* : `import mods.zenstages.Stage ;`

## Méthodes

### Créer une étape

Créer et retourner une nouvelle [étape](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Lorsque vous avez créé votre Stage, vous devez alors créer un fichier statique/global qui contient les éléments suivants afin de pouvoir accéder à l'étape sur d'autres scripts/classes.

**Note: Ne pas avoir la création `initStage` et la création `statique` dans le même script. En raison de limitations et d'autres problèmes, le `initStage` sera appelé à chaque fois que vous référencez un membre statique. Gardez donc l'initialisation et la création statique séparées**

```zenscript
import mods.zenstages.ZenStager;

static TestStage = ZenStager.getStage("test"); // Le nom étant celui que vous venez de créer.
```

### Méthodes d'aide

Obtenir une étape [](/Mods/GameStages/ZenStages/Stage/) *(Renvoie null si non trouvé)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Obtenir une carte des [étapes](/Mods/GameStages/ZenStages/Stage/) qui sont créées.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap as Stage[string] = ZenStager.getStageMap();
```

Obtenez une carte des liquides mis en scène.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Méthodes de pré-production

Ajouter un nom de package. Cela nécessite que [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) soit installé. Cela suit la même logique que [ici](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```

Ajouter un nom de package. Cela nécessite que [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) soit installé. Cela suit la même logique que [ici](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Récupère l'étape de l'ingrédient, si elle est en stade de préparation, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(IIngredient ingredient);
var StickStage as Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```

Récupère la pile de liquide, si elle est stockée, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage as Stage = ZenStager.getLiquidStage(<liquid:water>);
```

Récupère l'étape du nom de la recette, si elle est en préparation, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage as Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

Récupère l'étape conteneur, si elle est en pré-production, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

Récupère l'étape du paquet, si elle est staged elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as Stage = ZenStager.getPackageStages("appeng");
```

Récupère l'étape de dimension, si elle est en pré-production, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as Stage = ZenStager.getDimensionStage(-1);
```

Récupère l'étape de mob, si elle est en pré-production, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [MobStages](/Mods/GameStages/MobStages/MobStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Récupère l'étape de matériel TiC, si elle est stockée, elle retournera l'étape [](/Mods/GameStages/ZenStages/Stage/) ou nulle si elle n'est pas trouvée. Nécessite [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) pour être installé.

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(string material);
var MobStage as Stage = ZenStager.getTiCMaterialStage("bronze");
```

### Vérifier si quelque chose est en pré-production

Types pris en charge :

- conteneur
- cote
- ingrédient
- mob
- mod
- mulitblock
- minerai
- Paquet
- nom de la recette
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my. wesome.container");
ZenStager.isStaged("mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recette", "minecraft:bateau");
ZenStager.isStaged("dimension", -1);
```

### Débogage

Appeler cette méthode va faire vérifier le mod sur les [étapes](/Mods/GameStages/ZenStages/Stage/) que vous avez créées et ce qui est en cours. Pour voir si vous avez par erreur *mis en scène* quelque chose de plus d'une fois. Si l'un d'entre eux est trouvé, ils sont enregistrés dans le fichier `crafttweaker.log`. Vous dire ce qui est mis en scène en double et où il se trouve. C'est une méthode/outil idéal à utiliser avant de publier des mises à jour dans un modpack ou simplement le développement général d'un modpack.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Étapes de construction

Ceci est **important** pour appeler une fois que vous avez terminé d'ajouter des entrées à vos étapes. Cela appelle tous les mods à réellement mettre en scène les entrées dites. Si cette méthode n'est pas exécutée, rien ne sera mis en scène !

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```