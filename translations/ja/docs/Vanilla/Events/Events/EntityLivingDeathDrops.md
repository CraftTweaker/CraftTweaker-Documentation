# EntityLivingDeathDrops

EntityLivingDeathDropsイベントは、エンティティの死によってドロップされたアイテムが表示されたときに発生します。  
エンティティが何かをドロップするのを止めるためにキャンセルすることができます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter       | 戻り値                                                        |
| --------------- | ---------------------------------------------------------- |
| `ドロップ`          | [`リスト<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource`  | [IDamageSource](/Vanilla/Damage/IDamageSource/)            |
| `isRecentlyHit` | bool                                                       |
| `略奪レベル`         | int                                                        |

## アイテムドロップの変更

ドロップリストに追加するか、完全に新しいものに置き換えることができます:

```zenscript
event.drops = //IEntityItem リストへの参照。

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```