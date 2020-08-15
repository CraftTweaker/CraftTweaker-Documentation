# BlockHarvestDropsEvent

BlockHarvestDropsイベントは、ブロックがアイテムをドロップしようとするたびに発生します。  
ブロックリストと全体的なドロップ率を変更できます。 すべてのチャンス処理を事前に行う場合は、後者を 1 に設定します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. lockHarvestDropsEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

BlockHarvestDropsイベントは以下のインターフェースを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter      | ZenSetter  | タイプ                                              |
| -------------- | ---------- | ------------------------------------------------ |
| `プレイヤー`        |            | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `isPlayer`     |            | bool                                             |
| `silkTouch`    |            | bool                                             |
| `fortuneLevel` |            | int                                              |
| `ドロップ`         | `ドロップ`     | List<[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `ドロップチャンス`     | `ドロップチャンス` | float型                                           |

## リストに項目を追加

リストに項目を追加するか、メソッドを使用してリストに項目を追加できます:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```