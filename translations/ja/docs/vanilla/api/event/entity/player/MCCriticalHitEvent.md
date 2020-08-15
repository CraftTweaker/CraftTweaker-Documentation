# MCCriticalHitEvent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| パラメータ   | タイプ                                                                                                                               | 説明           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | 説明が提供されていません |



## メソッド
### getDamageModifier

ヒット時のダメージ修飾子。<br> 通常ヒット時は、デフォルトで1.5F、通常ヒット時は1Fである。

float を返します。

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

ヒット時のorignal damage modifier for the hit wthout any changes.<br> This is 1.5F for ciritcal hit, and 1F for normal hit .

float を返します。

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

このヒットがバニラによって批判された場合は true を返します

戻り値ブール値

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setCanceled

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |


### setDamageModifier

これにより、ヒット時のダメージ倍率が設定されます。 0に設定すると粒子は生成されますが、ダメージは発生しません。

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| mod   | float型 | 説明が提供されていません |



