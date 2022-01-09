# MCPlayerWakeUpEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Параметр | Тип                                                                                                                                 | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Описание отсутствует |



## Методы
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |


### shouldSetSpawn

Indicates if the player's sleep was considered successful. In vanilla, this is used to determine if the spawn chunk is to be set to the bed's position.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

Indicates if the server should be notified of sleeping changes. This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wakeImmediately

Used for the 'wake up animation'. This is false if the player is considered 'sleepy' and the overlay should slowly fade away.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


