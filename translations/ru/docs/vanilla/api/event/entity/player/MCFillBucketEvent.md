# Событие MCFillBucketEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCFillBucketEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCFillBucketEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| Параметр | Тип                                                                                                                             | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | Описание отсутствует |



## Методы
### getEmptyBucket

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getEmptyBucket();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### getFilledBucket

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getFilledBucket();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCFillBucketEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCFillBucketEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCFillBucketEvent.isCancel();
```

### установка отменена

```zenscript
myMCFillBucketEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |


### setFilledBucket

```zenscript
myMCFillBucketEvent.setFilledBucket(arg0 as crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| arg0     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |



