# マシン

GTCE はすべてのレシピを `RecipeMap` に格納します。 これを取得するには、 `mods.gregtech.recipe.RecipeMap` をコードにインポートする必要があります。

レシピはマシンに分類されます。特定のレシピとビルダーを取得するには、 `RecipeMap.getByName(machineName)` を呼びます。

## 利用可能なマシンの一覧

- コンプレッサー: `コンプレッサー`
- 抽出: `抽出器`
- Macerator: `macerator`
- 鉱石洗浄プラント: `オレッシャー`
- 熱遠心分離: `thermal_centrifuge`
- 炉: `炉`
- マイクロ波: `マイクロ波`
- 組立機: `組立機`
- フォーミングプレス: `forming_press`
- 流体缶: `fluid_canner`
- プラズマアーク炉: `plasma_arc_furnace`
- アーク炉: `アーク炉`
- シフティングマシン: `ふるい`
- Precision laser engraver: `laser_engraver`
- 混合機: `ミキサー`
- Autoclave: `autoclave`
- 電磁セパレータ: `電磁セパレータ`
- Polarizer: `polarizer`
- 化学風呂: `化学風呂`
- 醸造機械： `醸造業者`
- 流体ヒーター: `fluid_heater`
- 蒸留所： `蒸留所`
- 発酵機： `発酵機`
- 流体固体: `fluid_solifier`
- 流体抽出器: `fluid_extractor`
- 遠心分離: `遠心分離機`
- 電解槽: `電解槽`
- ブラスト炉: `blast_furnace`
- コンプレッサーの実装: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- 化学リアクター: `chemical_reactor`
- ディスティタワー: `distillation_tower`
- クラッカーユニット: `クラッカー`
- Pyrolyseオーブン: `pyro`
- ワイヤーミル: `wiremill`
- メタルベンダー: `metal_bender`
- 合金製錬所: `alloy_smelter`
- Canning Machine: `canner`
- Lathe: `lathe`
- ブロック切断機: `cuting_saw`
- 押し出し: `押し出し装置`
- 鍛造ハンマー: `forge_hammer`
- 包装機: `パッカー`
- 包装解除マシン: `unpacker`
- Diesel gen: `diesel_generator`
- ガスタービン: `ガスタービン`
- 蒸気タービン: `蒸気タービン`
- プラズマ発生器: `plasma_generator`

**まだ実装されていません**

- UU-materプロデューサー: `uuamp;`
- 熱発生器: `thermal_generator`
- 半流体発生器: `semi_fluid_generator`
- 核融合炉: `核融合反応炉`

**Primitive Blast Furnace** *uses different syntax from normal recipes.* For example:

```zenscript
import mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Furnace
PBFRecipeBuilder.start()
    .input(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>.firstItem * 1)
    .duration(250)
    .fuelAmount(2)
    .buildAndRegister();

//Remove recipes from PBF
import mods.gregtech.recipe.RecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## ビルダー情報

`RecipeMap`のインスタンスを取得すると、ビルダーを使用してレシピを定義できます。

ビルダーメソッドの呼び出し:

```zenscript
recipeMap.recipeBuilder()
```

Java では `ストリーム<T>` のようなビットで、レシピの挙動を完全に機能的に制御できます。

EBF の例:

```zenscript
// Electric Blast Furnace
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace.recipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    .fluidInputs([<liquid:oxygen> * 500])
    .outputs(<ore:ingotSteel>.firstItem * 1)
    .property("temperature", 1000) //this is a minimal temperature at which the item will be smelted
    .duration(40)
    .EUt(120)
    .buildAndRegister();
```

`.property()` メソッドに割り当てられるいくつかのプロパティ:

| 名称 | 説明                  |
| -- | ------------------- |
| 爆薬 | 爆破コンプレッサー、爆発物の量     |
| 回路 | 集積回路構成可能なマシン。 回路の構成 |
| 温度 | ブラストかまど。 最低気温要件。    |

これらは **未実装 :**

| 名称            | 説明                   |
| ------------- | -------------------- |
| アンプ           | UUアンプ。 出力されるUUアンプの量。 |
| eu_to_start | 核融合反応器、EUで核融合を開始     |

「温度」と同じように使用します：

```zenscript
.property("circuit", X)//(ここでXは集積回路構成
.property("爆発物", Y)//, ここでYはレシピを動作させるのに必要な爆発物の量
```

より便利なメソッド:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
.chancedOutput(<itemstack>, 0-10000, 0-10000) (10000 is 100%) // (itemstack, intitial output chance, tier output chance boost
.duration() // in ticks
.notConsumable(X) // where X is a CT id. Works as .inputs, but the item doesn't get consumed
.hidden() // if the recipe is hidden from the JEI
.chancedOutput(<itemstack>, 0-10000, 0-10000) (10000 is 100%) // not valid for every machine. その方法を使う人もいます 最も注目すべきは、macerator
.EUt() // EU/tick
```

## 削除中

レシピの削除は、レシピインスタンス自体で行われるため、まずレシピを見つける必要があります。

例

```zenscript
val compressor as RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(long voltage, IItemHandlerModifiable inputs, IMmultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```