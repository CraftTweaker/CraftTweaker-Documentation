# Событие MCArrowNockEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCArrowNockEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCArrowNockEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCArrowNockEvent>);
```
| Параметр | Тип                                                                                                                           | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowNockEvent](/vanilla/api/event/entity/player/MCArrowNockEvent)> | Описание отсутствует |



## Методы
### getBow

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowNockEvent.getBow();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowNockEvent.getEntityPlayer();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowNockEvent.getPlayer();
```

### hasAmmo

Возвращает boolean

```zenscript
myMCArrowNockEvent.hasAmmo();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCArrowNockEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCArrowNockEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCArrowNockEvent.isCancel();
```

### установка отменена

```zenscript
myMCArrowNockEvent.setCancel(отмените в качестве boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



