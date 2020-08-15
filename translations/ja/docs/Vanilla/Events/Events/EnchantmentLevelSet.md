# EnchantmentLevelSetEvent

EnchantmentLevelSet イベントは、3 つの潜在エンチャントのレベルがエンチャントテーブルで生成されたときに発生します。

## メモ

`event.enchantRow` はエンチャントテーブルの行 (1-3) を、 `event.originalLevel` は行の元のレベルを表します。 `event.power` はエンチャント表を囲む本棚の累積値で、 `event.item` はエンチャントされているアイテムです。

`event.level` は任意で 0 & 30 の値に変更できます。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnchantmentLevelSetEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
EnchantmentLevelSet Events は以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべて呼び出すことができます。

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter    | ZenSetter | 戻り値の型                                    |
| ------------ | --------- | ---------------------------------------- |
| `世界`         |           | [IWorld](/Vanilla/World/IWorld/)         |
| `enchantRow` |           | int型                                     |
| `パワー`        |           | int                                      |
| `項目`         |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `オリジナルレベル`   |           | int型                                     |
| `レベル`        | `レベル`     | int型                                     |
