# Событие «Рыба-MCItemFished»

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Конструкторы
```zenscript
новый crafttweaker.api.event.entity.player.MCItemFishedEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Параметр | Тип                                                                                                                             | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | Описание отсутствует |



## Методы
### повреждения Гродби

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| arg0     | int | Описание отсутствует |


### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getРодный Урон

Получите урон, который будет нанесен стержень. Возвращение: `Урон, полученный от стержня`

Возвращает int

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCItemFishedEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCItemFishedEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCItemFishedEvent.isCanceled();
```

### установка отменена

```zenscript
myMCItemFishedEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



