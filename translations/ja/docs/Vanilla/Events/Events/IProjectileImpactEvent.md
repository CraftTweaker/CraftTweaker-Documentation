# IProjectileImpactEvent

このインターフェイスは、発射物(火球、矢印、投げられるアイテムなど)に関連するすべてのイベントによって拡張されます。

## クラスのインポート
エラーを避けるために、クラスを [import](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IProjectileImpactEvent;`

## IEntityEvent の拡張
このインターフェイスは [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)を拡張します。これは、IEntityEvent が提供するすべての機能が IProjectileEvent にも存在することを意味します。

## ZenGetters

| 名前         | タイプ                                                |
| ---------- | -------------------------------------------------- |
| `rayTrace` | [IrayTraceResult](/Vanilla/World/IRayTraceResult/) |
