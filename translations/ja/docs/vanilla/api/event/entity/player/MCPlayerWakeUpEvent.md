# MCPlayerWakeUpEvent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
craftweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| パラメータ   | タイプ                                                                                                                                 | 説明           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | 説明が提供されていません |



## メソッド
### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |


### shouldSetSpawn

プレイヤーの睡眠が成功したと見なされたかどうかを示します。 バニラでは、スポーンチャンクをベッドの位置に設定するかどうかを決定するために使用されます。

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

スリープ状態の変更を通知するかどうかを示します。 サーバーが既に「最新の状態」と見なされている場合にのみ、これは偽になります。たとえば、呼び出しが開始された場合などです。

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### WakeImmediately

「スリープ解除」アニメーションに使用されます。 これは、プレイヤーが「眠い」と見なされ、オーバーレイがゆっくりと消える必要がある場合に偽です。

戻り値ブール値

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


