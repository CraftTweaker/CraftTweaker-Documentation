# MCPlayerSetSpawnEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent>);
```
| Параметр | Тип                                                                                                                                     | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent](/vanilla/api/event/entity/player/MCPlayerSetSpawnEvent)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getEntityPlayer();
```

### getNewSpawn

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerSetSpawnEvent.getNewSpawn();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCPlayerSetSpawnEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCPlayerSetSpawnEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCPlayerSetSpawnEvent.isCanceled();
```

### насильно

Это событие вызывается до изменения точки появления игрока. Событие может быть отменено, и последующая обработка не будет завершена.

Возвращает boolean

```zenscript
myMCPlayerSetSpawnEvent.isForced();
```

### установка отменена

```zenscript
myMCPlayerSetSpawnEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



