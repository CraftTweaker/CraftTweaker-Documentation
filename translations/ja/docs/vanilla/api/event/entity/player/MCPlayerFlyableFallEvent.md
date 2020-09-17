# MCPlayerFlyableFallEvent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| パラメータ   | タイプ                                                                                                                                     | 説明           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerFlallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | 説明が提供されていません |



## メソッド
### getDistance

float を返します。

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

float を返します。

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerFlyableFallEvent.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |


### 設定距離

```zenscript
myMCPlayerFlyableFallEvent.setDistance(distance as as float);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 距離    | float型 | 説明が提供されていません |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(float型として乗算);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 乗算    | float型 | 説明が提供されていません |



