# MCBonemealEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCBonemealEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCBonemealEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCBonemealEvent>);
```
| Параметр | Тип                                                                                                                         | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCBonemealEvent](/vanilla/api/event/entity/player/MCBonemealEvent)> | Описание отсутствует |



## Методы
### getBlock

Возвращает [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBonemealEvent.getBlock();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getPlayer();
```

### getPos

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCBonemealEvent.getPos();
```

### getStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCBonemealEvent.getStack();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCBonemealEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCBonemealEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCBonemealEvent.isCanceled();
```

### setCanceled

```zenscript
myMCBonemealEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |



