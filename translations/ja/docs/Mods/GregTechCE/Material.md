# 材料

## パッケージを呼び出す

`mods.gregtech.material` パッケージには、マテリアルを扱うために必要なすべてのクラスが含まれています。

## Material Object

mods.gregtech.material.Material `のオブジェクト` は、GregTechのマテリアルを表し、あなたが対処できるいくつかの有用なメンバーを持っています。

プロパティ:

| 名称                 | タイプ                          | 説明                             |
| ------------------ | ---------------------------- | ------------------------------ |
| 色                  | int                          | RGB形式のマテリアルの色                  |
| chemicalFormula    | 文字列                          | この材料の化学式                       |
| iconSet            | MaterialIconSet              | このマテリアルメタアイテム生成のアイコンセット        |
| コンポーネント            | ImmutableList<materialstack> | この材料コンポーネントのリスト                |
| generationFlagsRaw | long                         | このマテリアルのフラグを生成します（MatFlagsを参照） |
| 要素                 | 要素                           | この材料の要素は以下で構成されています            |

取得者数：

| 名称              | タイプ  | 説明                 |
| --------------- | ---- | ------------------ |
| radioactive     | bool | この物質が放射性物質の場合はtrue |
| protons         | long |                    |
| 中性子...          | long |                    |
| 質量:             | long |                    |
| density         | long |                    |
| camelCaseString | 文字列  |                    |
| unlocalizedName | 文字列  |                    |
| localizedName   | 文字列  | クライアント側のみ          |
| 名前              | 文字列  | 材料レジストリの名前         |

メソッド:

| 名前 (パラメータ)               | 説明       |
| ------------------------ | -------- |
| addFlags(String... フラグ名  | 生成フラグを追加 |
| hasFlag(String flagName) | 世代フラグあり  |

`MaterialStack` は、 `material * number`、 [材料量](/Vanilla/Variable_Types/IIngredient.md) または FluidStackと同じで作成できます。

### FluidMaterial

`FluidMaterial` は流体特性を持つ材料です。 そのスーパークラスは `Material` なので、 `Material` 内のすべてのメンバーはまだ利用可能です。

プロパティ:

| 名称   | タイプ | 説明 |
| ---- | --- | -- |
| 流体温度 | int |    |

取得者数：

| 名称        | タイプ                                                        | 説明               |
| --------- | ---------------------------------------------------------- | ---------------- |
| hasFluid  | bool                                                       |                  |
| hasPlasma | bool                                                       |                  |
| isGaseous | bool                                                       |                  |
| <unk>     | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | 材料流体|材料<unk>     |
| プラズマ|プラズマ | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition.md) | プラズマ流体を作ることができます |

### DustMaterial

`DustMaterial` は塵の特徴を持つ材料である。 そのスーパークラスは `FluidMaterial` であるため、 `FluidMaterial` 内のすべてのメンバーはまだ利用できます。

プロパティ:

| 名称                  | タイプ           | 説明                                                             |
| ------------------- | ------------- | -------------------------------------------------------------- |
| oreMultiplier       | int           | 浸漬中に粉砕された鉱石出力乗数                                                |
| byProductMultiplier | int           | パルス化中の副産物出力乗数                                                  |
| 精錬Multiplier        | int           | 精錬中のアイテムの精錬量                                                   |
| directSmelting      | SolidMaterial | この鉱石を精錬する材料は、結果として生じます                                         |
| washedIn            | FluidMaterial | この材料の鉱石を洗浄する材料を追加で出力します                                        |
| separatedInto       | DustMaterial  | 電磁石を分離する際、この鉱石はこの鉱石とこの鉱石で指定された材料に分離されます。                       |
| burnTime            | int           | 炉の製錬に燃料として使用する場合、この材料の燃焼時間、ゼロまたは負の値は、この材料が燃料として使用できないことを示しています |

取得者数：

| 名称            | タイプ                | 説明                         |
| ------------- | ------------------ | -------------------------- |
| oreByProducts | リスト<fluidmaterial> | 製品別鉱石一覧                    |
| 収穫レベル         | int                | この材料のブロックを収集するために必要なツールレベル |

### SolidMaterial

`SolidMaterial` は固体特徴を含む材料である。 そのスーパークラスは `DustMaterial` なので、 `DustMaterial` 内のすべてのメンバーはまだ利用可能です。

プロパティ:

| 名称             | タイプ           | 説明                                                            |
| -------------- | ------------- | ------------------------------------------------------------- |
| handleMaterial | SolidMaterial | ここで指定された材料は、この材料からツールを作るためにハンドルとして必要になります                     |
| macerateInto   | DustMaterial  | このマテリアルのいずれかのアイテムをMaceratingすると、このフィールドで指定されたマテリアルがデフォルトになります |

取得者数：

<table>
  <tr>
    <th>
      名称
    </th>
    
    <th>
      タイプ
    </th>
    
    <th>
      説明
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      float型
    </td>
    
    <td>
      この素材から作られたツールの速度、デフォルト 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      toolDurability
    </td>
    
    <td>
      int
    </td>
    
    <td>
      この材料から作られたツールの耐久性、ツールに使用できない材料の場合は0
    </td>
  </tr>
  
  <tr>
    <td>
      toolEnchantments
    </td>
    
    <td>
      リスト<enchantmentdata>
    </td>
    
    <td>
      この材料から作られたツールに適用されるエンチャントです。
    </td>
  </tr>
</table>

### IngotMaterial

`IngotMaterial` はインゴットの特徴を含むmterial である。 そのスーパークラスは `SolidMaterial` なので、 `SolidMaterial` 内のすべてのメンバーはまだ利用できます。

インゴット材料は、ワイヤー、ケーブル、流体パイプとして使用することができます。 これらのプロパティは `setCableProperties(long voltage, int baseAmperage, int lossPerBlock)` と `setFluidPipeProperties(int スループット, int maxTemperature, boolean gasProof)` で設定できます。

例:

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 loss/block
```

## エンチャントデータ

`gregtech.mods.EnchantmentData` は `SolidMaterial#toolEnchantments`にあり、レベルのエンチャントの内部ストレージです。

`crafttweaker.enchantments.IEnchantmentDefinition` は `エンチャント` ゲッターを呼び出し、レベルは `レベル` ゲッターで利用できます。

`SolidMaterial`にツールのエンチャントを追加するには、 `addToolEnchantment(IEnchantment enchantment)`を呼び出してCraftTweakerエンチャントデータ型を追加します。

フォーチュンIの材料例:

```zenscript
var material = MaterialRegistry.get("iron"); // 鉄材料の変更
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // エンチャントオブジェクトを作成し、追加する
```

## マテリアル生成フラグ

これらのフラグは材料に適用できます。

| 名前 (大文字小文字を区別しません)           | 説明                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| 要素での変換:                      | 電解液分解レシピの生成を有効にする                                                                                      |
| CENTRITION_DECOMPION_TITLE | 遠心分離レシピの生成を有効にする                                                                                       |
| バーニング                        | 常にオーラを燃焼している場合は、材料に追加                                                                                  |
| FLAMMABLE                    | 可燃性がある場合は材料に追加                                                                                         |
| Explosive                    | それが爆発のある種の場合は材料に追加します。                                                                                 |
| 連合がありません                     | 材料に追加すると完全に統一されなくなります                                                                                  |
| リサイクルなし                      | 材料のいずれかがスクラブを得るためにリサイクルすることができない場合に追加します。                                                              |
| 無効にします。                      | この材料とコンポーネントを持つすべての材料の分解レシピ生成を無効にします。                                                                  |
| 要求される要求は次のようになります。           | 分解レシピは水素を追加入力として必要です。 金額は入力金額と等しいです                                                                    |
| 平面を生成します。                    | この材料のプレートを生成します。ダスト素材の場合は、ダスト圧縮機のレシピをプレートに生成します。 金属材料の場合、曲げ加工のレシピが生成されます。ブロックが見つかった場合、切削加工のレシピも生成されます。 |
| DENSE の生成                    | 高密度のプレートを生成します。                                                                                        |
| 作業がありません。                    | 材料に加えなさいそれがいかなる他の手段によっても働くことができない場合、粉砕か精錬より。 これはコーティングされた材料に使用されます。                                    |
| 中断する必要はありません。                | 通常の金属加工技術に使用できない場合は、曲げることができないため、材料に追加します。                                                             |
| number@@0                    | それはそれを精錬することは不可能である場合は材料に追加します。                                                                        |
| LOW_OUTPUT                   | 誘導製錬所で出力が少ない場合は、材料に加えてください。                                                                            |
| SMEL_INTO_FLUID            | 液体に溶けた場合に材料を追加します(この材料の液体も生成されます)                                                                      |
| 除外ブロック作製のレシピ                 |                                                                                                        |
| EXCLUDE_COMPRESSOR_RECIPE  |                                                                                                        |
| CRYSTALISABLE                | この材料が結晶性である場合                                                                                          |
| 長さの生成                        |                                                                                                        |
| SIFTER_OUTPUT                |                                                                                                        |
| ブロックを生成します。                  | システムがこの流体材料の流体ブロックを生成するたびに、                                                                            |
| プラスチック生成(&G)                 | このフラグを追加すると、この材料のプラズマ生成が可能になります                                                                        |
| STATE_GAS                    | 材料の状態をガスとしてマーク                                                                                         |
| 生成ロール                        |                                                                                                        |
| ギアを生成します。                    |                                                                                                        |
| 長さの生成:                       |                                                                                                        |
| MORTAR_GRINDABLE             | この材料が簡単な迫撃砲で粉砕可能であれば、                                                                                  |

## マテリアルアイコンセット

アイコンセットは `mods.gregtech.material.MaterialIconSet` で入手できます。

- なし
- メタリック
- DULL
- MAGNETIC
- QUARTZ
- ダイヤモンド
- エミュレート
- SHINY
- 共有
- 移動
- <unk>
- SAND
- FLINT
- RUBY（ルビー）
- LAPIS
- POWDER
- FLUID
- GAS
- LIGNITE
- OPAL
- GLAS
- WOOD
- LEAF
- GEM_HORIZONTAL
- GEM_VERTICAL
- PAPER
- NETHERSTAR

ゲッターは `の名前` です。

メソッドは `toString()`で、静的メソッド `getByName(String name)` です。

## 材料レジストリ

材料登録は統一システムの材料を取得し、リストし、作成するためのヘルパーです。

クラス `mods.gregtech.material.MaterialRegistry` をインポートできます。

### 使用法

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Note that return type can be null if nothing was found
var material = MaterialRegistry.get(materialName);

// List all materials registered
var materialList = MaterialRegistry.getAllMaterials();

// Set toolDurability to 0 if ingot cannot be used as tool
// Note that an @Optional parameter can be left out, and it's replaced by default 0.
// Means Gem and Ingot material cannot be used as tool.
MaterialRegistry.createFluidMaterial(int metaItemSubId, String name, int color, String iconSet, @Optional MaterialStack[] materialComponents);

MaterialRegistry.createDustMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry.createGemMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry.createIngotMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### 例

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial.addFlags(["GENERATE_ORE", "GENERATE_PLATE"]);

//Creates a gem-material with a tooltip showing the chemical formula
//This automatically generates an electrolyzer recipe to split this material into its constituent parts.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1.0, 0);

//Any previouly registered material can be used- including custom ones.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "shiny", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```