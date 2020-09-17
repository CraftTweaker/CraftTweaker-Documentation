# iPotionBrewEvent

このイベントは、醸造スタンドからアイテムを抽出するためのプレイヤーベースの機能ではないが、醸造スタンドに関わるすべてのイベントによって延長される。

## クラスのインポート
エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IPotionBrewEvent;`

## 何が彼らを使って行うことができますか?

| ZenGetter | ZenSetter | タイプ  |
| --------- | --------- | ---- |
| `長さ`      |           | int型 |

## メソッド

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

指定された配列の項目のリストに含まれる IItemStack を返します。 指定されたインデックスが `長さ` より大きい場合、空の IItemStack が返されます。

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

指定したインデックスの itemstack を指定した項目に置き換えます。 番目のインデックスがアイテム配列の長さよりも大きい場合、何も起こりません。
