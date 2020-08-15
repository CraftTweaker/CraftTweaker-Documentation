# MCOpen

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen
```

## Конструкторы
```zenscript
новый crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen(функционал.Потребитель<crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen>);
```
| Параметр | Тип                                                                                                                                                 | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen](/vanilla/api/event/entity/player/PlayerContainerEvent/MCOpen)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCOpen.getEntityPlayer();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCOpen.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCOpen.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCOpen.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCOpen.isCancel();
```

### установка отменена

```zenscript
myMCOpen.setCanceled(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



