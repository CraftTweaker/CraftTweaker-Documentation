# MCCriticalHitEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Параметр | Тип                                                                                                                               | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Описание отсутствует |



## Методы
### getDamageModifier

The damage modifier for the hit.<br> This is by default 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

The orignal damage modifier for the hit wthout any changes.<br> This is 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Возвращает boolean

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Returns true if this hit was critical by vanilla

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setCanceled

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| cancel   | boolean | Описание отсутствует |


### setDamageModifier

This set the damage multiplier for the hit. If you set it to 0, then the particles are still generated but damage is not done.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| mod      | float | Описание отсутствует |



