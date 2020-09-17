# 項目

これにより、ゲームにアイテムを追加できます！

## アイテム表示を作成

アイテムを追加する前に。 追加するアイテムのプロパティを設定できるアイテム表示を作成する必要があります。  
[VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) がある場所:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## 表示パッケージをインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Item;`

## ZenProperties

プロパティを取得/設定するには、respecting ZenGetters/SettersまたはZenMethodsを使用できます。

```zenscript
//property name: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| プロパティ名                                                   | タイプ                                                                                                           | 必須  | デフォルト値 | 説明/メモ                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --- | ------ | -------------------------------------------------------------- |
| beaconPayment                                            | boolean型                                                                                                      | いいえ | false  | ボーナスを有効にするためにビーコンに渡すことができます。                                   |
| creativeTab                                              | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                  | いいえ | その他    | アイテムが置かれるクリエイティブタブ                                             |
| 輝かしい|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る|光る| | boolean型                                                                                                      | いいえ | false  | アイテムに光る効果（エンチャントされたかのように）を与えるために使用できます。                        |
| 商品カラーサプライヤー                                              | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)       | いいえ | 色として-1 | 商品の色                                                           |
| itemDestroyedBlock                                       | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)     | いいえ | false  | アイテムがブロックを破壊したらどうなるでしょう？                                       |
| アイテム破壊速度                                                 | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)         | いいえ | null   | アイテムのブロック破壊速度を決定します。                                           |
| itemGetContainerItem                                     | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/) | いいえ | null   | このアイテムをレシピに使用すると、クラフトグリッドに何が残りますか？                             |
| itemRightClick                                           | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)             | いいえ |        | プレイヤーがアイテムを右クリックしたときに呼ばれます                                     |
| itemUseAction                                            | EnumUseAction                                                                                                 | いいえ | なし"    | アイテムが使用するアニメーション("NONE"、"EAT"、"DRINK"、"BLOCK"、"BOW")           |
| localizedNameSupplier                                    | [ILocalizedNameサプライヤー](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | いいえ | null   | プログラムで商品の表示名を決定することができます。                                      |
| maxDamage                                                | int                                                                                                           | いいえ | -1     | アイテムの使用回数はいくつですか？ 0未満は破損することができないことを意味します                      |
| maxStackSize                                             | int                                                                                                           | いいえ | 64     | 1スタックに収まるアイテムの数は？ 0未満はスタックサイズを意味します(64)                        |
| onItemUpdate                                             | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                     | いいえ | null   | アイテムがプレイヤーのインベントリにある限り、すべてのティックを呼び出します。                        |
| onItemUse                                                | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                           | いいえ | null   | プレイヤーがアイテムを持つブロックを右クリックしたときに呼ばれます                              |
| onItemUseFinish                                          | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)               | いいえ | null   | プレイヤーがアイテムを使用して終了したときに呼ばれます                                    |
| レア度                                                      | 列挙型レアリティ                                                                                                      | いいえ | 一般的な   | アイテムがどれだけ珍しいのか、ToolTipの色("COMMON"、"UNCOMMON"、"レア"、"EPIC)を決めます。 |
| 精錬Exprerience                                            | float型                                                                                                        | いいえ | -1     | 炉内でそのアイテムを精錬することで、プレイヤーがどれくらい稼いでいるか。                           |
| textureLocation                                          | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                        | いいえ | null   | アイテムのリソースの場所、テクスチャなどに使用されます。                                   |
| toolClass                                                | 文字列                                                                                                           | いいえ |        | ツールが壊れるブロックの種類                                                 |
| toolLevel                                                | int                                                                                                           | いいえ | -1     | ブロックのレベルを壊すことができます                                             |
| unlocalizedName                                          | 文字列                                                                                                           | はい  |        | 名前はすべて小文字でなければなりません                                            |

## アイテムの登録

You need to call this method to register the item in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the item or change any of it's properties!

```zenscript
item.register();
```

## スクリプト例

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods.contenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem.creativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
zsItem.register();
```

## アイテムのローカライズ中

You will need to add `item.contenttweaker.itemName.name=Localized Name` to the responding language files.  
Example in en_us.lang file `item.contenttweaker.zsItem.name=Your itemName Here` will show `Your itemName Here` in the game.

あるいは、CraftTweakerの [ローカライズ機能](/Vanilla/Game/IGame/)を使用することもできますが、言語ファイルを使用することをお勧めします。