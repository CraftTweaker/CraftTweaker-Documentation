# MCItemPickupEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent>);
```
| Параметр | Тип                                                                                                                                                     | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemPickupEvent)> | Описание отсутствует |



## Методы
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemPickupEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemPickupEvent.getPlayer();
```

### getStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemPickupEvent.getStack();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCItemPickupEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCItemPickupEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCItemPickupEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemPickupEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |



