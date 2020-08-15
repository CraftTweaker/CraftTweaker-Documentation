# 阶段

Stage is the class you are given when you create a new "Stage" the class contains all the main method you need to stage an entry to that *Stage*. 这么简单！ 一旦您添加了您需要的所有条目。 别忘了建造这个阶段！

## 导入相关包

`导入 mods.zenstages.stage.stage`

## 如何处理

### ZenGetters 和无参数ZenMethods

| ZenGetter | 功能     | 返回值类型 |
| --------- | ------ | ----- |
| 阶段        | 返回阶段名称 | 字符串   |

### 待发布方法

**注意：所有这些方法只适用于使用 [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) 创建一个阶段时给出的阶段类，以便将这些方法保存到静态状态，这样您可以在需要时从其他类引用。**

检查是否有 [个自定义类型](/Mods/GameStages/ZenStages/CustomType/) 已经发布到这个阶段。

```zenscript
// CustomStaged(String slug, String value);
// isCustomStaged(String slug, String[…]值);
// isCustomStaged(String slug, int value);
// CustomStaged(String slug, int[…]值)；
// isCustomStaged(String slug, IIngredient 值)；
// isCustomStaged(String slug, IIngredient[…]值)；
TestStage. sCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

将成分添加到一个阶段。 默认设置为可选参数为指定的属性。

```zenscript
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

添加属性覆盖。 当你通过ModId发布整个模组时使用这个方法，但你需要将一些项目从模组重新设计到另一个 [阶段](/Mods/GameStages/ZenStages/Stage/)， 这样您就可以重新安排项目。

```zenscript
// addIngredientOverride(Ingredient component, @Optional(valueBoolia = true) 布尔累犯Stage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

将ModId添加到一个阶段。 这将舞台上所有被提供给阶段的 modId 注册的项目。 您还可以提供一个IIngredients 数组，提供的项目将不会被分派。

```zenscript
// 添加ModId(Stroing modId)；
// addModId(String[…]modId)；
// addModId(String modid, IIngredient[…]ignoreStaging)；
TestStage.addModId("blemic")；
TestStage.addModId("blematiic", [<bloodmagic:someitem>])；
```

添加一个 ILiquidStack 到一个阶段。

```zenscript
// addLiquid(ILiquidStack 液体堆栈)；
// addLiquids(ILiquidStack[……]液体堆栈)；
TestStage.addLiquid(<liquid:water>)；
TestStage.addLiquids[<minecraft:water>, <minecraft:lava>])；
```

将一个尺寸添加到一个舞台。 需要安装 [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/)。

```zenscript
// 添加维度 (int dimId);
TestStage.addDimension(-1);
```

添加配方名称到一个阶段。 需要 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/) 安装。

```zenscript
// addRecipeName(字符串累计名称);
TestStage.addRecipeName("minecraft:boat");
```

添加配方名称到一个阶段。 需要 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/) 安装。

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweeper:test_.*");
```

将生物添加到一个阶段。 需要安装 [MobStages](/Mods/GameStages/MobStages/MobStages/)。

```zenscript
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"], 9);
```

添加一个TiC材料名称到舞台。 需要安装 [TinkerStage](/Mods/GameStages/TinkerStages/TinkerStages/)。

```zenscript
// addTiCMaterial(字符串材料名称)；
// addTiCMaterials(字符串材料名称)；
TestStage.addTiCMaterial("iron")；
TestStage.addTiCMaterials(["bronze", "iron"])；
```

添加一个TiC修饰符到一个阶段。 需要安装 [TinkerStage](/Mods/GameStages/TinkerStages/TinkerStages/)。

```zenscript
// addTiCModifier(字符串修改者名称);
TestStage.addTiCModifier("mending_moss");
```

将IE 多块添加到一个阶段。 需要安装 [多块阶段](https://github.com/The-Acronym-Coders/MultiBlock-Stages/)。

```zenscript
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks["IE:Mixer", "IE:SheetmetalTank"]);
```

添加矿石替换到一个阶段。 需要 [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) 安装。

```zenscript
// addOreplacement(IIngredient blockToHide, @Optional(valueBoolia = false) boolie isNonDefaulting);
// addOreplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolian = false) boolie isNonDefaulting);
TestStage. ddOreplacement(<minecraft:iron_bars:*>);
TestStage.addOreplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreplacement(<chisel:redstone>, <chisel:granite>, true);
```