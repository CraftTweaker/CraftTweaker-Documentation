# MCItemTooltipEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCItemTooltipEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCItemTooltipEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemTooltipEvent>);
```
| Параметр | Тип                                                                                                                               | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCItemTooltipEvent](/vanilla/api/event/entity/player/MCItemTooltipEvent)> | Описание отсутствует |



## Методы
### getEntityPlayer

This event is fired with a null player during startup when populating search trees for tooltips.

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getEntityPlayer();
```

### getItemStack

The ItemStack with the tooltip.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemTooltipEvent.getItemStack();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCItemTooltipEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCItemTooltipEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCItemTooltipEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemTooltipEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Description          |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |



