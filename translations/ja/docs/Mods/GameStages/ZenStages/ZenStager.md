# ZenStager

このクラスは、新しい [ステージ](/Mods/GameStages/ZenStages/Stage/)を作成するためのメインハンドラです。 ゲームに演じたものをステージングするように伝えることができます [GameStages API](https://minecraft.curseforge.com/projects/game-stages) を使用して他のModと簡単に統合できるようにするためのメソッドと、Modpackメーカーの生活を少し簡単にするためのいくつかのカスタム調整が事前にロードされています。

クラス [の詳細と最新のソースはこちら](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java) で確認できます。

## パッケージのインポート

ZenStager : `import mods.zenstager.ZenStager;`

ステージ *(インポートも推奨)* : `import mods.zenstages.Stage;`

## メソッド

### ステージを作成

新しい [ステージ](/Mods/GameStages/ZenStages/Stage/)を作成して返します

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

ステージを作成するときは、以下のようなstatic/globalファイルを作成し、他のスクリプト/クラスでステージにアクセスすることができます。

**注意: 同じスクリプトで `initStage` と `静的` を作成することはできません。 制限やその他の問題により、静的メンバーを参照するたびに `initStage` が呼び出されます。 initと静的作成を別々にしておきます。**

```zenscript
import mods.zenstages.ZenStager;

static TestStage = ZenStager.getStage("test"); // 名前はあなたが作成したものです。
```

### ヘルパーメソッド

[ステージ](/Mods/GameStages/ZenStages/Stage/) *を取得 (見つからない場合は null を返します)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

作成された [ステージ](/Mods/GameStages/ZenStages/Stage/) のマップを取得します。

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap as StageMap as Stage[string] = ZenStager.getStageMap();
```

段階的な液体の地図を取得します。

```zenscript
// mods.zenstager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### ステージング方法

パッケージ名を追加する。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。 これはここ [](/Mods/GameStages/RecipeStages/RecipeStages/)と同じロジックに従います。

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```

パッケージ名を追加する。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。 これはここ [](/Mods/GameStages/RecipeStages/RecipeStages/)と同じロジックに従います。

```zenscript
// mods.zenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

材料ステージを取得します。ステージが設定された場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。

```zenscript
// mods.zenstager.getIngredientStage(IIngredient食材);
var StickStickStageas Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```

液体スタックステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。

```zenscript
// mods.zenstager.getLiquidStack(ILiquidStack liquidStack);
var StickStageas Stage = ZenStager.getLiquidStage(<liquid:water>);
```

レシピ名ステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。

```zenscript
// mods.zenstager.getRecipeNameStage(string recipeName);
var RecipeNameStage as Stage= ZenStager.getRecipeNameStage("minecraft:boat");
```

コンテナステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

パッケージステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。 [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) をインストールする必要があります。

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as Stage = ZenStager.getPackageStages("appeng");
```

ディメンションステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。 [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) をインストールする必要があります。

```zenscript
// mods.zenstager.getDimensionStage(int dimId);
var DimStageas Stage = ZenStager.getDimensionStage(-1);
```

Mob ステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) を返します。見つからない場合は null を返します。 [MobStages](/Mods/GameStages/MobStages/MobStages/) をインストールする必要があります。

```zenscript
// mods.zenstager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```

TiCマテリアルステージを取得します。ステージされた場合、 [ステージ](/Mods/GameStages/ZenStages/Stage/) が返されます。見つからない場合はnullが返されます。 [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) をインストールする必要があります。

```zenscript
// mods.zenstager.getTiCMaterialStage(string material);
var MobStageas Stage= ZenStager.getTiCMaterialStage("bronze");
```

### 何かがステージングされているかどうかを確認します

サポートされているタイプ:

- コンテナ
- 寸法
- 材料
- Mob
- mod
- mulitblock
- 鉱石
- パッケージ
- レシピネーム
- tinker

```zenscript
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

### デバッグ

このメソッドを呼び出すと、作成した [ステージ](/Mods/GameStages/ZenStages/Stage/) でModがチェックされます。 誤って *何かが* 回以上format@@2ステージングされたかどうかを確認する。 見つかった場合は、 `crafttweaker.log` ファイルに記録されます。 複製されたものがステージとそれがどの段階にあるかを伝えます。 これは、modpackまたはmodpackの一般的な開発にアップデートをリリースする前に使用するための理想的なメソッド/ツールです。

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### ビルドステージ

これは、ステージにエントリを追加した後に呼び出すために **重要な** です。 これにより、全てのMODが実際に言ったエントリーをステージに上げることができます。 このメソッドの実行に失敗すると、ステージングは行われません！

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```