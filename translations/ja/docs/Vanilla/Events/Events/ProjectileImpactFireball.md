# ProjectileImpactFireball

このイベントは、ファイアーボールがエンティティに影響を与えてもダメージの前などが計算されるたびに発生します。 **キャンセル可能**であり、キャンセルされた場合、影響は処理されません。

ファイヤーボールエンティティからの加速値はzengettersを通じて利用できます。

## クラスのインポート
エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.event.ProjectileImpactFireballEvent;`

## IEntityEvent の拡張
ProjectileImpactFireball イベントは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGettersとZenSetters

イベントから次の情報を取得できます。

| ZenGetter       | ZenSetter       | タイプ                                                       |
| --------------- | --------------- | --------------------------------------------------------- |
| `ファイアーボール`      |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `シューティング`       |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `アクセラレーションX`    | `アクセラレーションX`    | double型                                                   |
| `アクセラレーションY`    | `アクセラレーションY`    | double型                                                   |
| `accelerationZ` | `accelerationZ` | double型                                                   |
