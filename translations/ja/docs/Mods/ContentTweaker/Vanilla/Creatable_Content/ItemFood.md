# 食料アイテム

これにより、ゲームに食料品を追加できます。

## 食品アイテム表示を作成

アイテムを追加する前に。 食品項目を作成する必要があります 表示を追加したい項目のプロパティを設定できます。  
[VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) がある場所:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(Scing unlocalizedName, int healAmount);
```

## 表示パッケージをインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.ItemFood;`

## アイテム表現の拡張

ItemFoodRepresentationクラスは [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) を展開します。 つまり、 [項目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) で利用可能なすべてのメソッドと ZenProperties が、食品アイテムでも利用可能です!

## ZenProperties

プロパティを取得/設定するには、respecting ZenGetters/SettersまたはZenMethodsを使用できます。

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| 属性              | タイプ                                                                                             | 必須  | デフォルト値 | 説明/メモ                              |
| --------------- | ----------------------------------------------------------------------------------------------- | --- | ------ | ---------------------------------- |
| 治療量             | int                                                                                             | はい  |        | 食べると何点の食べ物が回復しますか。                 |
| 常に食べられる         | bool                                                                                            | いいえ | false  | 利用者のフードバーがいっぱいになっても食べられるのでしょうか?    |
| wolfFood        | bool                                                                                            | いいえ | false  | 食べ物を使ってウォブを飼いならすことはできますか？          |
| 彩度              | float型                                                                                          | いいえ | 0.6    | 食品の飽和値                             |
| onItemFoodEaten | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | いいえ | null   | Called when the food item is eaten |

## アイテムの登録

You need to call this method to register the item in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the item or change any of it's properties!

```zenscript
item.register();
```