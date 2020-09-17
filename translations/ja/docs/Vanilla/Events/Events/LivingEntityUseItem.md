# LivingEntityUseItem

LivingEntityUseItem イベントは、エンティティがアイテムを使用し始めるたびに発生します。 プレイヤーがアイテムを使用して終了し、アイテムを使用する各ティックが終了すると、それを停止します。  
それはあまりにも頻繁に呼ばれるので、特定の場合にのみ呼ばれる4つのサブイベントがある。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。

```zenscript
//Base Event
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Specific Events
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## イベントインターフェースの拡張

LivingEntityUseItem Eventsは、以下のインターフェースを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

イベント中に以下の情報を取得/設定できます:

| ZenGetter  | 戻り値                                      |
| ---------- | ---------------------------------------- |
| `プレイヤー`    | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer` | bool                                     |
| `項目`       | [IItemStack](/Vanilla/Items/IItemStack/) |
| `期間`       | int                                      |

| ZenSetter | パラメータタイプ |
| --------- | -------- |
| `期間`      | int      |