# IItemStack

An IItemStack Object consists of an [item definition](/Vanilla/Items/IItemDefinition/), a meta/damage value and NBT data.  
In other words, it refers to an item or to a block.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemStack;`

## Calling an IItemStack

IItemStack を返すいくつかのメソッドがあります

* [ブラケットハンドラ](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>` を使用する
* `IItemDefinition` オブジェクトの [makeStack()](/Vanilla/Items/IItemDefinition/) メソッドを使用する `<minecraft:stone>.definition.makeStack(0)`
* `スタック` を [IEntityDrop](/Vanilla/Entities/IEntityDrop/) オブジェクトに使用する
* `firstItem` を使用して [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を取得する

## Calling an IItemStack[] or a IItemStack List

これらの関数を呼び出すと、結果のリスト/配列を反復することができます。

* `IIngredient` で [items](/Vanilla/Variable_Types/IIngredient/) メソッドを使用すると、IItemStack リストを返します: `<ore:ingotGold>.items`
* `IIngredient` で [itemArray](/Vanilla/Variable_Types/IIngredient/) メソッドを使用すると、IItemStack[]: `<ore:ingotGold>.itemArray` を返します。
* `IMod` オブジェクトの [アイテム](/Vanilla/Game/Mods/#imod) メソッドを使用すると、IItemStack[]: `loadedMods["minecraft"].items` を返します。

## 関数

では今それで何ができるでしょう？

### IIngredient の拡張

IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
つまり、 [IIngredient](/Vanilla/Variable_Types/IIngredient/) オブジェクトで使用可能なすべての機能は、IItemStacksにも適用可能です。 <details><summary>派生メソッド</summary> 

* stack.mark
* stack.amount
* stack.items
* stack.itemArray
* stack.liquids
* stack.commandString
* stack | otherIngredient
* stack.or(otherIngredient)
* stack.transform([transformer](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformer](/Vanilla/Items/Item_Transformers/))
* stack.only([条件](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* stack.matches(item)
* stack.matchesExact(item)
* stack.matches(liquid)
* スタックには成分があり
* stack.applyTransform(stack,player)
* stack.hasTransformers()</details>

### ZenGetters/ZenSetters

使い方はこちら [](/UsingThisWiki/) をご覧ください。 また、以下の例をご覧ください。

| ZenGetter/ZenMethod | ZenSetter/ZenMethod | タイプ                                                         |
| ------------------- | ------------------- | ----------------------------------------------------------- |
| 定義                  |                     | [IItemDefinition](/Vanilla/Items/IItemDefinition/)          |
| 名前                  |                     | 文字列                                                         |
| displayName         | displayName         | 文字列                                                         |
| maxStackSize        | maxStackSize        | int                                                         |
| 硬さ                  | 硬さ                  | float型                                                      |
| ダメージ                |                     | int型                                                        |
| maxDamage           | maxDamage           | int型                                                        |
| hasTag              |                     | bool                                                        |
| タグ                  | withTag(tag)        | [IData](/Vanilla/Data/IData/)                               |
| ores                |                     | List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>    |
| toolClasses         |                     | リスト<string\>                                               |
| itemEnchantability  |                     | int                                                         |
| containerItem       |                     | IItemStack                                                  |
| hasContainerItem    |                     | bool                                                        |
| repairCost          | repairCost          | int                                                         |
| canEditBlocks       |                     | bool                                                        |
| isOnItemFrame       |                     | bool型                                                       |
| isEnchantable       |                     | bool型                                                       |
| isEnchanted         |                     | bool型                                                       |
| isDamaged           |                     | bool型                                                       |
| isDamageable        |                     | bool型                                                       |
| isItemBlock         |                     | bool (項目が項目ブロックの場合)                                         |
| isStackable         |                     | bool型                                                       |
| isBeaconPayment     |                     | bool                                                        |
| hasEffect           |                     | bool                                                        |
| hasDisplayName      |                     | bool型                                                       |
| メタデータ               |                     | int                                                         |
| hasSubtypes         |                     | bool型                                                       |
| isEmpty             |                     | bool型                                                       |
| burnTime            |                     | int                                                         |
| showsDurabilityBar  |                     | bool型                                                       |
| hasCustomEntity     |                     | bool                                                        |
| エンチャント              |                     | List<[IEnchantment](/Vanilla/Enchantments/IEnchantment/)\> |
| matchTagExact       |                     | bool                                                        |

#### 金額

| メソッド通話                         | Returns                            | パラメータタイプ |
| ------------------------------ | ---------------------------------- | -------- |
| `stack.anyAmount()`            | 変更されたプロパティを持つ新しいIItemStack         |          |
| `stack.amount(int amount)`     | 変更されたプロパティを持つ新しいIItemStack         | int      |
| `stack.withAmount(int amount)` | 変更されたプロパティを持つ新しいIItemStack         | int      |
| `スタック * 量`                     | 変更されたプロパティを持つ新しいIItemStack         | int      |
| `stack.splitStack(int amount)` | スプリットIItemStack。 古いものはそれに応じて減少します。 | int      |

#### 重量

| メソッド通話                        | Returns                                                  | パラメータタイプ           |
| ----------------------------- | -------------------------------------------------------- | ------------------ |
| `stack.percent(float chance)` | A [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%) |
| `stack.weight(float chance)`  | A [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)   |

#### ダメージ

| メソッド通話                                  | Returns                    | パラメータタイプ                                   |
| --------------------------------------- | -------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                     | 変更されたプロパティを持つ新しいIItemStack |                                            |
| `stack.withDamage(int damage)`          | 変更されたプロパティを持つ新しいIItemStack | int                                        |
| `stack.damageItem(int amount, IEntity)` | 無効（なし）                     | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### タグ

| メソッド通話                                           | Returns                    | パラメータタイプ                            |
| ------------------------------------------------ | -------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | 変更されたプロパティを持つ新しいIItemStack |                                     |
| `stack.withTag(IData tag)`                       | 変更されたプロパティを持つ新しいIItemStack | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | 変更されたプロパティを持つ新しいIItemStack | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String name)`                   | 変更されたプロパティを持つ新しいIItemStack | 文字列                                 |
| `stack.updateTag(IData tag)`                     | 変更されたプロパティを持つ新しいIItemStack | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData tag, bool matchTagExact)` | 変更されたプロパティを持つ新しいIItemStack | [IData](/Vanilla/Data/IData/), bool |

#### ブロックキャスト

| メソッド通話            | Returns                                       |
| ----------------- | --------------------------------------------- |
| `stack.asBlock()` | 新しい [IBlock](/Vanilla/Blocks/IBlock/) オブジェクト。 |
| `IBlockとしてスタックする` | 新しい [IBlock](/Vanilla/Blocks/IBlock/) オブジェクト。 |

#### 表示/表示名

| メソッド通話                               | Returns                                                                | パラメータタイプ                    |
| ------------------------------------ | ---------------------------------------------------------------------- | --------------------------- |
| `stack.withDisplayName(String name)` | 変更されたプロパティを持つ新しい IItemStack displayName セッターとは異なり、これはこの単一の項目にのみ適用されます。 | 文字列 ("§" のカラーコードをサポートしています) |
| `stack.withLore(String[] lore)`      | 変更されたプロパティを持つ新しい IItemStack                                            | string[] ("§"でカラーコードをサポート)  |
| `stack.clearCustomName()`            | 無効（なし）                                                                 |                             |

#### エンチャントメント

| メソッド通話                                                              | Returns | パラメータタイプ                                                                |
| ------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition enchantment)` | 真偽値。    | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(IEnchantment enchantment)`                    | 無効（なし）  | [Ienchantment](/Vanilla/Enchantments/IEnchantment/)                     |

#### canItem...

| メソッド通話                                             | Returns                    | パラメータタイプ                                              |
| -------------------------------------------------- | -------------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition block)`         | アイテムがブロックの上に置けるかどうかを示すブール。 | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(IBlockDefinition block)`         | アイテムがブロックを破壊できるかどうかを示すブール。 | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(IBlockStateブロック)`           | アイテムがブロックを収穫できるかどうかを示すブール。 | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengthAgainstBlock(IBlockState block)` | ブロックに対するアイテムの強さを表すフロート。    | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| メソッド通話                                                       | Returns                                                                 | パラメータの種類                                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | ワールドの新しく作成されたアイテムに対応する新しい [IEntityItem](/Vanilla/Entities/IEntityItem/) | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | ワールドの新しく作成されたアイテムに対応する新しい [IEntityItem](/Vanilla/Entities/IEntityItem/) | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## ItemTransformers and ItemConditions

これらの使い方は、 [IIngredient](/Vanilla/Variable_Types/IIngredient/) ページまたはリスペシヴエントリで確認できます:  
[アイテムの条件](/Vanilla/Items/Item_Conditions/)  
[アイテムのトランスフォーマー](/Vanilla/Items/Item_Transformers/)

## 使用例

#### 表示名

グローバル (項目を新しい名前に変換します)。

```zenscript
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Sets apples Display Name to "Tomato"
apple.displayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

ローカル（この単一アイテムのみ）

```zenscript
<minecraft:coal>.withDisplayName("Black Gold");
```

#### <unk>

`<minecraft:coal>.withLore(["この関数","requires a","string[]"]);`

#### 最大スタックサイズ

最大スタックサイズは、1スタックに収まるアイテムの数です。たとえば、ウールのスタックサイズは64、バケットはわずか16です。

```zenscript
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(apple.maxStackSize);

//sets apples Max Stack size to 32
apple.maxStackSize = 32;

//prints 32
print(apple.maxStackSize);

//sets apples Max Stack size to Bucket's Max Stack size
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

#### 硬さ

Hardnessは、参照されたブロックを壊すのにかかる時間です。 オブジェクトがブロックを参照している場合にのみ動作します。

```zenscript
val grass = <minecraft:grass>;

//prints 1.0
print(grass.hardness);

//hardness は 10.0 に設定
grass.hardness = 10.0;

//prints 10.0
print(gras.hardness);
```

#### ダメージ

ダメージを受けないアイテムのダメージは0です。

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick.maxDamage);

//sets the max damage of the Diamond Pickaxe to 256
pick.maxDamage = 256;

//prints 256
print(pick.maxDamage);



//Damage doesn't matter, used in recipes
<minecraft:iron_pickaxe>.anyDamage();

//With the given damage
<minecraft:iron_pickaxe>.withDamage(122);
```

#### タグ

The tag is an [IData](/Vanilla/Data/IData/) object.  
If the item does not contain a tag, it will return an empty tag, never null.

```zenscript
//creates apple with the given tag
//Removes existing tags
<minecraft:apple>.withTag({Unbreakable: 1});

//creates apple with an emtpy tag
<minecraft:apple>.withEmptyTag();

//removes a tag by its name
item.removeTag("tagName");

//update the existing tag
//If the tag doesn't override an existing tag, they will stay constant.
item.updateTag({Unbreakable: 1});
```

#### Liquid

Returns the liquid contained in a single item (if multiple) or null if the item is no container.  
Returns an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Object or null.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### 金額

リンゴはいくつありますか。

```zenscript
<minecraft:apple>.anyAmount();

//1 Apple
val apple = <minecraft:apple>;

//2 Apples
val moreApples = apple * 2;

//3 Apples
val evenMoreApples = <minecraft:apple> * 3;
```

#### 重量

指定されたパーセンテージの [weightedItemStack](/Vanilla/Items/WeightedItemStack/) を返します。

```zenscript
val apple = <minecraft:apple>;

//Creates a weightedItemStack with 100 percent chance
var applePercentage = apple % 100;

//Does the same as the above
applePercentage = apple.weight(1.0);
```

#### Ores

この項目を参照する [IOreDictEntity](/Vanilla/OreDict/IOreDictEntry/) のリストを返します。

```zenscript
<minecraft:apple>.ores;
```

#### IBlockへのキャスト

IItemStack を [IBlock](/Vanilla/Blocks/IBlock/)にキャストできます。 君がブロックを言っている限りキャストは例外を投げるだろう

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> as crafttweaker.block.IBlock;
```

IItemStack に ItemBlock が含まれていて、変換できるかどうかをテストすることもできます。

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### 食品プロパティ

IItemStack が食品項目であり、どの食品特性を持っているかを確認できます。  
Modでは動作しない場合があります。

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```