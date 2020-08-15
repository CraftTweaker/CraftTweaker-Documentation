# Событие MCAnvilRepair'а

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCAnvilRepairEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCAnvilRepairEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>);
```
| Параметр | Тип                                                                                                                               | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | Описание отсутствует |



## Методы
### getBreakChance

Возвращает с плавающей точкой

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### getIngredientInput

Получите второй элемент в зло Возвращается: `вторая ячейка ввода`

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

Получите первый элемент в зло Возвращается: `первая слот для ввода`

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemРезультат

Получить результат вывода из язвы возвратов: `вывод`

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCAnvilRepairEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCAnvilRepairEvent.isCancel();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(breakChance as float);
```

| Параметр     | Тип   | Описание             |
| ------------ | ----- | -------------------- |
| Шанс разрыва | float | Описание отсутствует |


### установка отменена

```zenscript
myMCAnvilRepairEvent.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



