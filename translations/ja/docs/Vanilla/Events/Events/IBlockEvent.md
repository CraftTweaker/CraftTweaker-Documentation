# IBlockEvent

このインターフェイスは、世界中のブロックを扱うことができるすべてのイベントによって拡張されます。

## クラスのインポート

エラーを避けるために、クラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IBlockEvent;`

## IEVPositionable の拡張

このインターフェイスは [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)を拡張します。つまり、IEventPositionable が提供するすべての機能が IBlockEvent にも存在することを意味します。

## ZenGetters

| 名前         | タイプ                                         |
| ---------- | ------------------------------------------- |
| 世界         | [IWorld](/Vanilla/World/IWorld/)            |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| ブロック       | [IBlock](/Vanilla/Blocks/IBlock/)           |