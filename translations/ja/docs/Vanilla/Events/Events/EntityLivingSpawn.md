# EntityLivingSpawnEvent

エンティティLivingSpawn イベントは、エンティティがワールドに参加または退出しようとするたびに発生します。  
このサブクラスには、 [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) リファレンスを含むEntityLivingExtendedSpawnEvent があります。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingSpawnEvent`  
`crafttweaker.event.EntityLivingExtendedSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

EntityLivingSpawn Eventsは以下のインターフェースを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter                 | タイプ                                                              |
| ------------------------- | ---------------------------------------------------------------- |
| `世界`                      | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                       | float型                                                           |
| `y`                       | float型                                                           |
| `z`                       | float型                                                           |
|                           |                                                                  |
| `spawner` (Extended only) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## イベント関数

despawnイベントは、イベントの結果を変更するための3つの機能も提供します:

| ZenMethod | 説明                     |
| --------- | ---------------------- |
| `許可する`    | 強制的にエンティティを(de)スポーンさせる |
| `拒否する`    | (de)スポーンしないエンティティを強制する |
| `パス`      | イベントの結果をデフォルトの状態に設定します |