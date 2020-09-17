# ステージ

ステージは、新しい「ステージ」を作成するときに与えられるクラスです。クラスには、その *ステージ*へのエントリをステージングするために必要なすべてのメインメソッドが含まれています。 それはそれと同じくらい簡単です! 必要なすべてのエントリを追加したら. ステージを作るのを忘れないでください！

## パッケージのインポート

`import mods.zenstages.Stage;`

## どうすればいいか

### ZenGetters and parameterless ZenMethods

| ZenGetter | 何をするか      | Return Type |
| --------- | ---------- | ----------- |
| ステージ      | ステージ名を返します | 文字列         |

### ステージング方法

**注意: これらのメソッドはすべて、 [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) を使用してステージを作成するときに与えられた Stageクラスでのみ動作しますので、静的に保存することで、必要に応じて他のクラスから参照することができます。**

[カスタムタイプ](/Mods/GameStages/ZenStages/CustomType/) がこのステージにステージングされたかどうかを確認します。

```zenscript
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
TestStage.isCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

ステージに材料を追加します。 指定した原材料のレシピをステージングするオプションのパラメータをtrueにデフォルト設定します。

```zenscript
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

材料オーバーライドを追加します。 これはModIdを介してMod全体をステージングしているときに使用されますが、Modから別の [ステージ](/Mods/GameStages/ZenStages/Stage/)にいくつかのアイテムをステージングする必要があります。 これによりアイテムの再ステージが可能になります

```zenscript
// addIngredientOverride(IIngredient食材, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

ステージにModIDを追加します。 これにより、ステージに提供された modId によって登録されたすべてのアイテムがステージングされます。 提供されたアイテムがステージングされないIIngredientsの配列を提供することもできます。

```zenscript
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

ILiquidStack をステージに追加します。

```zenscript
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

ステージに寸法を追加 [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) をインストールする必要があります。

```zenscript
// addDimension(int dimId);
TestStage.addDimension(-1);
```

レシピ名をステージに追加します。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

レシピ名をステージに追加します。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。

```zenscript
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

モブをステージに追加します。 [MobStages](/Mods/GameStages/MobStages/MobStages/) をインストールする必要があります。

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

TiC材料名をステージに追加します。 [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) をインストールする必要があります。

```zenscript
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

TiC修飾子をステージに追加します。 [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) をインストールする必要があります。

```zenscript
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

IE のマルチブロックをステージに追加します。 [マルチブロックステージ](https://github.com/The-Acronym-Coders/MultiBlock-Stages/) をインストールする必要があります。

```zenscript
// addIEMmultiBlock(string multiblock);
// addIEMMultiBlocks(string multiblocks);
TestStage.addIEMMultiBlock("IE:ArcFurnace");
TestStage.addIEMMultiBlocks([IE:Mixer", IE:SheetmetalTank"]);
```

ステージに鉱石交換を追加します。 [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) のインストールが必要です。

```zenscript
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreReplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage.addOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>, true);
```