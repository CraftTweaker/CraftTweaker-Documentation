# ProjectileImpactThrowable

このイベントは、投げられた投射物がエンティティに影響を与えてもダメージ前などが計算されるたびに発生します。 **キャンセル可能**であり、キャンセルされた場合、影響は処理されません。

## クラスのインポート
エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.event.ProjectileImpactThrowableEvent;`

## IEntityEvent の拡張
ProjectileImpactThrowable Eventsは以下のインターフェースを実装し、それらのメソッド/getters/settersもすべて呼び出すことができます。

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGettersとZenSetters

イベントから次の情報を取得できます。

| ZenGetter  | ZenSetter | タイプ                                                       |
| ---------- | --------- | --------------------------------------------------------- |
| `ファイアーボール` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `シューティング`  |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
