# ZenStager
This class is the main handler for creating new [Stages](/Mods/GameStages/ZenStages/Stage/), which then you can build to tell the game to start staging what you've staged. It comes pre-loaded with methods to allow easy integration with other mods using the [GameStages API](https://minecraft.curseforge.com/projects/game-stages) along with some custom tweaks to make modpack makers lives that little bit easier.

You can find more information and the latest source for the class [here](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Importing the package
ZenStager : `import mods.zenstages.ZenStager;`

Stage _(Recommended to import also)_ : `import mods.zenstages.Stage;`

## Methods

### Create Stage
Create and returns new [Stage](/Mods/GameStages/ZenStages/Stage/)
```java
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```
When you have created your Stage you should then create a static/global file which contains the following so you can then access the Stage on other scripts/classes.

**Note: Do not have the `initStage` and the `static` creation in the same script. Due to limitations and other issues, the `initStage` will be called each time you reference a static member. So keep the init and the static creation separate**
```java
import mods.zenstages.ZenStager;

static TestStage = ZenStager.getStage("test"); // The name being the one you just created.
```

### Helper Methods
Get a [Stage](/Mods/GameStages/ZenStages/Stage/) _(Returns null if not found)_
```java
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```
Get a map of the [Stages](/Mods/GameStages/ZenStages/Stage/) which are created.
```java
// mods.zenstages.ZenStager.getStageMap();
var StageMap as Stage[string] = ZenStager.getStageMap();
```
Get a map of the staged liquids.
```java
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Staging Methods
Add a package name. This requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed. This follows the same logic as [here](/Mods/GameStages/RecipeStages/RecipeStages/).
```java
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```
Add a package name. This requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed. This follows the same logic as [here](/Mods/GameStages/RecipeStages/RecipeStages/).
```java
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```
Get the ingredient stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found.
```java
// mods.zenstages.ZenStager.getIngredientStage(IIngredient ingredient);
var StickStage as Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```
Get the liquid stack stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found.
```java
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage as Stage = ZenStager.getLiquidStage(<liquid:water>);
```
Get the recipe name stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage as Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```
Get the container stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```
Get the package stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as Stage = ZenStager.getPackageStages("appeng");
```
Get the dimension stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) to be installed.
```java
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as Stage = ZenStager.getDimensionStage(-1);
```
Get the mob stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [MobStages](/Mods/GameStages/MobStages/MobStages/) to be installed.
```java
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```
Get the TiC Material stage, if staged it will return the [Stage](/Mods/GameStages/ZenStages/Stage/) or null if not found. Requires [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) to be installed.
```java
// mods.zenstages.ZenStager.getTiCMaterialStage(string material);
var MobStage as Stage = ZenStager.getTiCMaterialStage("bronze");
```
### Check if something is Staged

Supported Types:

- container
- dimension
- ingredient
- mob
- mod
- mulitblock
- ore
- package
- recipename
- tinker

```java
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my.awesome.container");
ZenStager.isStaged("mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimension", -1);
```

### Debugging
Calling this method will make the mod check over the [Stages](/Mods/GameStages/ZenStages/Stage/) you have created and what's staged. To see if you have mistakenly _staged_ something more than once. If any are found they are logged to the `crafttweaker.log` file. Telling you what is duplicated staged and what stages it is in. This is an ideal method/tool to use before releasing updates to a modpack or just general development of a modpack.
```java
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Build Stages
This is **important** to call after you have completed adding entries to your stages. This calls upon all the mods to actually stage said entries. Failing to run this method will result in nothing being staged!
```java
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```
