# PlayerItemPickup

PlayerItemPickup イベントは、プレイヤーがエンティティアイテムとやりとりし、アイテムまたはアイテムの量がピックアップされた後に発生します。 このイベントは、 [PlayerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) が発生した後に発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerItemPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PlayerItemPickup Eventsは以下のインターフェイスを実装し、すべてのメソッド/getters/settersを同様に呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter        | 戻り値                                           |
| ---------------- | --------------------------------------------- |
| `stackCopy`      | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `originalEntity` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## メモ

`stackCopy` は、元のエンティティアイテム内に含まれるアイテムのコピーです。 持ち上げられたものを代表してプレーヤーの在庫に入れました `originalEntity` はアイテムスタックの残りの量を持つアイテムエンティティである (プレイヤーが全額を受け取っていない場合)。
