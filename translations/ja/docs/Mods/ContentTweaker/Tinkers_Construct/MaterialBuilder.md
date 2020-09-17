# Material Builder

このパッケージを使用すると、ツールを作成することができます!

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.MaterialBuilder;`

## マテリアルの作成

何よりもまず、Material Builderを作成する必要があります。  
これは静的作成メソッドを使用して行うことができます。

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

覚えておいてください, あなたはあなたの変更を行った後、材料を登録する必要があります.  
これは、新しいマテリアルの `マテリアル表現` [を返す](/Mods/ContentTweaker/Tinkers_Construct/Material/) メソッドで行うことができます。

```zenscript
myMat.register();
```

## プロパティー

`myMaterial.name` を使用して、これらのプロパティを設定して取得できます。

| 属性            | タイプ                                              | 追加メモ                             |
| ------------- | ------------------------------------------------ | -------------------------------- |
| identifier    | 文字列                                              | ユニークな名前                          |
| 色             | int                                              |                                  |
| hidden        | bool                                             |                                  |
| 液体|<unk>      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | 製錬所出力                            |
| クラフト可能        | bool                                             | パーツビルダーで作成可能                     |
| キャスト可能        | bool                                             | キャストを使用して作成できます。 液体を設定する必要があります! |
| 代表アイテム        | [IItemStack](/Vanilla/Items/IItemStack/)         | ティンカーマニュアルにアイテムを表示               |
| 代表者鉱石         | [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) | 代表アイテムが null の場合に表示されます          |
| シャード          | [IItemStack](/Vanilla/Items/IItemStack/)         | パーツビルダーのティンカーの破片アイテムの代わりに使用されます。 |
| localizedName | 文字列                                              | 表示される名前                          |

## 計算されたプロパティ

### ItemLocalizer

この関数を使用して、必要に応じて材料名を計算できます。  
このマテリアルの [マテリアル表現](/Mods/ContentTweaker/Tinkers_Construct/Material/) と名前を変更されているツールの名前を使用します (例: "Mattock")

```zenscript
myMAT.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## 材料アイテムを追加

部品ビルダーで指定されたアイテムを使用する場合 材料ポイントの数や修理の量を決めることができます

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeed, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `アイテム` はマッチングされたアイテムです。 [アイテム条件](/Vanilla/Items/Item_Conditions/) は使用できますが、トランスフォーマーは使用できません。 
- `amountNeeded` は一致するアイテムの量です。 toolforgeが提供するすべてのスロットでそれらを分割することができ、64を超えることもできます。 上記の2つ目の例では、鉄ブロックを4つ追加する必要があります。 デフォルトは 1 です。
- `amountMatched` は、 `amountNeeded` あたりの材料ポイントの量です。 2番目の例では、4つの鉄のブロックは2つの材料ポイントを与えます。 デフォルトは 144 (1 インゴット/1 つのマテリアル値) です。
- `remove function`を使用すると、アイテムに一致するすべてのトレイト成分が削除されます。

## 材料特性

You can add a trait to the material.  
All items made from this material will then have this trait.  
Uses a String with the identifier of the trait, and an optional `dependency` string which will tell you which itemTypes should be affected by the trait.  
Alternatively, you can use a [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/), though that only works if the trait is already initialized by the time CoT runs (so most likely only for custom traits). `依存関係` の使用可能な値は以下のとおりです。

- `null` (デフォルト) → すべてのアイテム。
- `"head"`
- `"handle"`
- `"extra"`
- `"弓"`
- `"弓文字列"`
- `"投射物"`
- `"シャフト"`
- `"fletching"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

You can remove materialTraits as well (which is especially useful when doing batch materials).  
You remove them using their identifier string and an optional dependency.  
If you omit the dependency or use `null` all traits with that identifier will be removed.

```zenscript
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## 材料統計

TiConが材料を作るためには、材料の統計を知る必要があります。  
ステータスが追加されたツールタイプのみ構築されます！

```zenscript
<br /><br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```

## 例

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat.liquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat.addItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat.addHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat.addMaterialTrait("blasting", "head");

//null (or not specifying that parameter at all) means that this is a default trait.
//Default traits are only queried when no other traits are added to that material type.
//この場合、ボーストリングやヘッドは既に他の特性を持っているため、密度の高いトレイトはツールロッド上にのみ存在します。
testMat.addMaterialTrait("dense", null);

//Faultyはinit時のみエラーとなりますが、文字列はチェックされます。
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```