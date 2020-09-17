# MCXpChange

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange(обработчик функции.Потребитель<crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange>);
```
| Параметр | Тип                                                                                                                                           | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCXpChange)> | Описание отсутствует |



## Методы
### получить Сумма

Возвращает int

```zenscript
myMCXpChange.getAmount();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getEntityPlayer();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCXpChange.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCXpChange.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCXpChange.isCancel();
```

### установленная сумма

```zenscript
myMCXpChange.setAmount(amount as int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| сумма    | int | Описание отсутствует |


### установка отменена

```zenscript
myMCXpChange.setОтменено(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



