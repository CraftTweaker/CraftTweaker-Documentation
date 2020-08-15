# ILivingEvent

このインターフェースは、中心的な居住エンティティを持つことができるすべてのイベントによって拡張されます。

## クラスのインポート

エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.event.ILivingEvent;`

## IEntityEvent の拡張

このインターフェイスは [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)を拡張します。つまり、IEntityEvent が提供するすべての機能が ILivingEvent にも存在することを意味します。

## ZenGetters

| 名前               | タイプ                                                       |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |