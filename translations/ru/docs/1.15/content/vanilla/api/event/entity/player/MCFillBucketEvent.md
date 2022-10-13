# MCFillBucketEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCFillBucketEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCFillBucketEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| Параметр | Тип                                                                                                                             | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | Описание отсутствует |



## Методы
### getEmptyBucket

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getEmptyBucket();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### getFilledBucket

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getFilledBucket();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCFillBucketEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCFillBucketEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCFillBucketEvent.isCanceled();
```

### setCanceled

```zenscript
myMCFillBucketEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |


### setFilledBucket

```zenscript
myMCFillBucketEvent.setFilledBucket(arg0 as crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |



