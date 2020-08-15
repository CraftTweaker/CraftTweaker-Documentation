# MCPlayerWakeUpEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Параметр | Тип                                                                                                                                 | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### установка отменена

```zenscript
myMCPlayerWakeUpEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |


### shouldSetSpawn

Указывает, считать ли сн игрока успешным. В ваниле это используется для определения того, должен ли кусок спавна быть установлен в положение кровати.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### обновлять мир

Указывает, следует ли уведомлять сервер об изменениях в спящем режиме. Это будет ложным, если сервер уже считается 'актуальным', поскольку, например, он инициировал вызов.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### пробудить немедленно

Используется для "анимации пробуждения". Это ложно, если игрок считается "сонным", а оверлей должен постепенно исчезать.

Возвращает boolean

```zenscript
myMCPlayerWakeUpEvent.wakeImmediate();
```


