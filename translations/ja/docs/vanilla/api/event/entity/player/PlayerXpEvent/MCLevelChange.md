# MCLevelChange

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange>);
```
| パラメータ   | タイプ                                                                                                                                                 | 説明           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCLevelChange)> | 説明が提供されていません |



## メソッド
### getEntityPlayer

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getEntityPlayer();
```

### getLevels

Returns int

```zenscript
myMCLlevelChange.getLevels();
```

### getPlayer

戻り値: `プレイヤー`

戻り値 [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLlevelChange.getPlayer();
```

### hasResult

このイベントが重要な結果値を期待するかどうかを決定します。 注: HasResult アノテーションを持つイベントでは、true を返すためにこのメソッドが自動的に追加されます。

戻り値ブール値

```zenscript
myMCLevelChange.hasResult();
```

### isCancelable

この関数がキャンセル可能かどうかを判断します。 Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

戻り値ブール値

```zenscript
myMCLevelChange.isCancelable();
```

### isCanceled

このイベントがキャンセルされ、実行を停止するかどうかを決定します。 戻り値: `現在の状態がキャンセルされました`

戻り値ブール値

```zenscript
myMCLevelChange.isCanceled();
```

### setCanceled

```zenscript
myMCLevelChange.setCanceled(cancel as boolean);
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| キャンセル | boolean型 | 説明が提供されていません |


### setLevels

```zenscript
myMCLevelChange.setLevels(levels as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| レベル   | int | 説明が提供されていません |



