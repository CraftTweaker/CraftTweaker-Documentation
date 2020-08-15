# PlayerDeathdrops

PlayerDeathDropsイベントは、プレイヤーの死によってプレイヤーのアイテムが地面に落ちるたびに発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerDeathDropsEvent <br /> 
 <code>`  
もちろん、 [前にクラスをインポート](/AdvancedFunctions/Import/) して、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter      | 戻り値                                                        |
| -------------- | ---------------------------------------------------------- |
| `プレイヤー`        | [IPlayer](/Vanilla/Players/IPlayer/)                       |
| `項目`           | [`リスト<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource` | [IDamageSource](/Vanilla/Damage/IDamageSource/)            |

## アイテムドロップの変更

ドロップリストに追加するか、完全に新しいものに置き換えることができます:

```zenscript
event.items = //IEntityItem リストへの参照。

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```