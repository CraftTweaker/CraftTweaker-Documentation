# MCItemFishedEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCItemFishedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Параметр | Тип                                                                                                                             | Description          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | Описание отсутствует |



## Methods
### damageRodBy

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| arg0     | int | Описание отсутствует |


### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getRodDamage

Get the damage the rod will take. Returns: `The damage the rod will take`

Возвращает int

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCItemFishedEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCItemFishedEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCItemFishedEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemFishedEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Description          |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |



