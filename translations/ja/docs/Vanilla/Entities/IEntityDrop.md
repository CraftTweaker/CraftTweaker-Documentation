# IEntityDrop

IEntityDropは、 [エンティティ](/Vanilla/Entities/IEntityDefinition/) からのドロップを指します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDrop;`

## ZenGetters

この情報を取得することができます。

| ZenGetter  | 何をするか                     | 戻り値の種類                                   | 使用法               |
| ---------- | ------------------------- | ---------------------------------------- | ----------------- |
| チャンス       | ドロップの確率を返します。             | float型                                   | `drop.chance`     |
| 最大         | ドロップの最大量を返します。            | int                                      | `drop.max`        |
| 分          | ドロップの最小量を返します。            | int                                      | `drop.min`        |
| playerOnly | ドロップがplayerOnlyかどうかを返します。 | boolean型                                 | `drop.playerOnly` |
| range      | ドロップの最大量範囲の最小値を返します。      | IntegerRange                             | `drop.range`      |
| スタック       | ドロップされたアイテムを返します。         | [IItemStack](/Vanilla/Items/IItemStack/) | `drop.stack`      |