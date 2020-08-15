# ICraftingInventory

ICraftingInventoriaには、製造プロセスが行われる在庫に関するあらゆる種類の情報が含まれています。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter    | 戻り値の種類                                       | 説明                 |
| ------------ | -------------------------------------------- | ------------------ |
| `プレイヤー`      | [IPlayer](/Vanilla/Players/IPlayer/)         | この持ち物を所有しているプレイヤーは |
| `サイズ`        | int                                          | 在庫の大きさは            |
| `width`      | int                                          | 在庫の幅は              |
| `高さ`         | int                                          | 在庫の高さは             |
| `stackCount` | int                                          | 実際に記入されているスタックの数は  |
| `項目`         | [IItemStack[][]](/Vanilla/Items/IItemStack/) | クラフトテーブルに存在するアイテム  |
| `itemArray`  | [IItemStack[]](/Vanilla/Items/IItemStack/)   | クラフトテーブルに存在するアイテム  |

## ZenMethods

以下の方法があります：

`inventory.getStack(index)` は指定されたインデックスで [IItemStack](/Vanilla/Items/IItemStack/) を返し、項目がない場合は null を返します。 Index is an int.  
`inventory.setStack(index, item)` は指定されたインデックスのスタックを指定されたアイテムに設定します。 インデックスはintで、項目はIItemStackです。 インデックスのスタックをクリアしたい場合はnullを使用してください。

The top left stack is position (0, 0), row and column are ints.  
`inventory.getStack(row, column)` returns the [IItemStack](/Vanilla/Items/IItemStack/) at the given position or null if no item present.  
`inventory.setStack(row, column, item)` sets the stack at the given position to the provided item. アイテムはIItemStackです。 その位置のスタックを消去したい場合はnullを使用してください。