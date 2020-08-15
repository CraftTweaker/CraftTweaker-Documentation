# IPlayer

IPlayerインターフェイスを使用すると、特定のプレイヤーの特定の情報を表示し、そのプレイヤーと対話することができます。 イベントハンドラとレシピ関数で主に使用されます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IPlayer;`

## IEntityLivingBaseとIUserの拡張

IPlayer extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). つまり、 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) オブジェクトで利用可能なすべての関数も、IPlayer オブジェクトで利用可能です。  
IPlayer も拡張します。 [IUser](/Vanilla/Players/IUser/). つまり、 [IUser](/Vanilla/Players/IUser/) で利用可能なすべての関数は IPlayer オブジェクトでも利用できます。

## Zengetters

Zengettersは情報を取得するためのものです。 通常、変数に割り当てられるか、メソッド/関数で使用されます。

| Zengetter     | 何をするか                                                      | 戻り値の型                                      | 使用法                    |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ | ---------------------- |
| id            | は、プレーヤーの id を返します。                                         | 文字列                                        | `player.id`            |
| 名前            | は、プレーヤーの名前を返します。                                           | 文字列                                        | `player.name`          |
| データ           | は、プレーヤーのデータ                                                | [IData](/Vanilla/Data/IData/)              | `player.data`          |
| xp            | は、プレーヤーのエクスペリエンスレベルを返します。 プレイヤーのエクスペリエンスレベルを設定するためにも使用できます | int                                        | `player.xp`            |
| ホットバーサイズ      | は、プレーヤーのホットバーサイズを返します。                                     | int型                                       | `player.hotbarSize`    |
| inventorySize | は、プレイヤーのインベントリサイズを返します。                                    | int型                                       | `player.inventorySize` |
| currentItem   | は、プレイヤーが現在保持しているアイテムを返します。                                 | [IItemStack](/Vanilla/Items/IItemStack/)   | `player.currentItem`   |
| 創造的な          | は、プレイヤーが現在クリエイティブモードになっている場合に返します。(別名ゲームモード1)              | bool                                       | `player.creative`      |
| 冒険            | は、プレイヤーが現在アドベンチャーモードの場合(別名ゲームモード2) を返します。                  | bool                                       | `player.adventure`     |
| x             | は、プレイヤーの現在の X 位置を返します。                                     | double                                     | `player.x`             |
| y             | は、プレーヤーの現在の y 位置を返します。                                     | double                                     | `player.y`             |
| z             | は、ワールド内のプレーヤーの現在の Z 位置を返します。                               | double                                     | `player.z`             |
| 位置            | は、プレーヤーの現在の位置を返します。 プレイヤーの位置を設定するためにも使用できます                | [Position3f](/Vanilla/Utils/Position3f/)   | `player.position`      |
| foodStats     | は、プレイヤーの食料残量を返します。                                         | [IFoodStats](/Vanilla/Players/IFoodStats/) | `player.foodStats`     |

## ZenMethods

Zenmethodsは、この場合、プレーヤーと他のものを行うためのものです。

| ZenMethod                | パラメータの種類                                 | 何をするか                                    | 例                                           |
| ------------------------ | ---------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| removeXP(XPtoRemove)     | int                                      | プレイヤーから指定した経験値を削除します。                    | `player.removeXP(1)`                        |
| update(IData)            | [IData](/Vanilla/Data/IData/)            | 提供されたIDataにplayerdataを更新します。             |                                             |
| sendChat(メッセージ)          | 文字列または IChatMessage                      | プレイヤーにチャットメッセージを送信します。                   | `player.sendChat("Hello my old friend")`    |
| getHotbarStack(index)    | int                                      | プレイヤーのホットバー内の指定されたインデックスの項目を返します。        | `player.getHotbarStack(3)`                  |
| getInventoryStack(index) | int                                      | プレイヤーのインベントリ内の指定された索引のアイテムを返します。         | `player.getInventoryStack(3)`               |
| give(item)               | [IItemStack](/Vanilla/Items/IItemStack/) | プレイヤーに提供されたアイテムを与えます。 アイテムはIItemStackです。 | `player.give(<minecraft:gold_ingot>)` |
| テレポート（位置）                | [Position3f](/Vanilla/Utils/Position3f/) | プレイヤーを同じディメンション内の指定された位置にテレポートさせます       | `player.teleport(position)`                 |
| executeCommand(raw)      | 文字列                                      | プレイヤーとしてコマンドを実行します                       | `player.executeCommand("kill")`             |