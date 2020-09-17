# PlayerAnvilRepair

プレイヤーがアンビルで何かをクラフトすると、PlayerAnvilRepairイベントが発生します。  
アンビルが破壊される確率を変更できます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilRepairEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerAnvilRepair Events 次のインターフェイスを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter        | ZenSetter  | 戻り値                                      |
| ---------------- | ---------- | ---------------------------------------- |
| `プレイヤー`          |            | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`      |            | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itemIngredient` |            | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`     |            | [IItemStack](/Vanilla/Items/IItemStack/) |
| `ブレイクチャンス`       | `ブレイクチャンス` | float型                                   |