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
| パラメータ   | タイプ                                                                                                                                                 | 説明                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCLevelChange)> | No description provided |



## メソッド
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getEntityPlayer();
```

### getLevels

Returns int

```zenscript
myMCLevelChange.getLevels();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCLevelChange.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCLevelChange.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCLevelChange.isCanceled();
```

### setCanceled

```zenscript
myMCLevelChange.setCanceled(cancel as boolean);
```

| パラメータ  | タイプ      | 説明                      |
| ------ | -------- | ----------------------- |
| cancel | boolean型 | No description provided |


### setLevels

```zenscript
myMCLevelChange.setLevels(levels as int);
```

| パラメータ  | タイプ | 説明                      |
| ------ | --- | ----------------------- |
| levels | int | No description provided |



