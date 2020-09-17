# MCPlayerFlyableFallEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(обработчик функция.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| Параметр | Тип                                                                                                                                           | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | Описание отсутствует |



## Методы
### getDistance

Возвращает с плавающей точкой

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

Возвращает с плавающей точкой

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### установка отменена

```zenscript
myMCPlayerFlyableFallEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |


### setDistance

```zenscript
myMCPlayerFlyableFallEvent.setDistance(расстояние как плавно);
```

| Параметр   | Тип   | Описание             |
| ---------- | ----- | -------------------- |
| расстояние | float | Описание отсутствует |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(мультипликатор как float);
```

| Параметр       | Тип   | Описание             |
| -------------- | ----- | -------------------- |
| мультипликатор | float | Описание отсутствует |



