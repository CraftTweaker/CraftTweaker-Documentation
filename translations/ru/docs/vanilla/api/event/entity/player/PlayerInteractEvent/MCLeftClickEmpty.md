# MCLeftClickEmpty

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickEmpty
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickEmpty(обработчик функции.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickEmpty>);
```
| Параметр | Тип                                                                                                                                                                   | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickEmpty](/vanilla/api/event/entity/player/PlayerInteractEvent/MCLeftClickEmpty)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickEmpty.getEntityPlayer();
```

### getFace

Возвращается: `Лицо, участвующее в этом взаимодействии. Для всех неблочных взаимодействий он вернёт null.`

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCLeftClickEmpty.getFace();
```

### getItemStack

Возвращается: `Если рука была пуста: {` @code ItemStack.EMPTY}.

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCLeftClickEmpty.getItemStack();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickEmpty.getPlayer();
```

### getPos

Если взаимодействие было на сущности, то будет BlockPos в центре сущности. Если взаимодействие было на блоке, будет позиция этого блока. В противном случае будет BlockPos в центре игрока. никогда не будет нулевым. Возвращается: `Должность, участвующая в этом взаимодействии.`

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCLeftClickEmpty.getPos();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCLeftClickEmpty.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCLeftClickEmpty.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCLeftClickEmpty.isCancel();
```

### установка отменена

```zenscript
myMCLeftClickEmpty.setОтменено (отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



