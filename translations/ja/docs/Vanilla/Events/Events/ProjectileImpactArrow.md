# ProjectileImpactArrow

このイベントは、矢印発射体がエンティティに影響を与えてもダメージ前などが計算されるたびに発生します。 **キャンセル可能**であり、キャンセルされた場合、影響は処理されません。

矢印エンティティの様々な値はzengettersを介して利用可能で、損傷を調整するために変更することができます。 ノックバック・強さ、ピックアップ・ステータス、決定(または強制)クリティカルヒット。

## クラスのインポート
エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.event.ProjectileImpactArrowEvent;`

## IEntityEvent の拡張
ProjectileImpactArrow Events 以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGettersとZenSetters

イベントから次の情報を取得できます。

| ZenGetter      | ZenSetter    | タイプ                                   |
| -------------- | ------------ | ------------------------------------- |
| `矢印`           |              | [IEntity](/Vanilla/Entities/IEntity/) |
| `シューティング`      |              | [IEntity](/Vanilla/Entities/IEntity/) |
| `ダメージ`         | `ダメージ`       | double型                               |
|                | `ノックバックの力`   | int (setter only, no getter)          |
| `isCritical`   | `isCritical` | boolean型                              |
| `pickupStatus` |              | 文字列型                                  |

## 追加の方法

- `setPickupDisallowed()`

どんな状況下でも矢が拾われないようにします。

- `setPickupAllowed()`

エンティティが着陸した場所から矢印を拾うことができます。

- `setPickupCreative()`

プレイヤーがクリエイティブモードの場合にのみ矢印を取得できます。
