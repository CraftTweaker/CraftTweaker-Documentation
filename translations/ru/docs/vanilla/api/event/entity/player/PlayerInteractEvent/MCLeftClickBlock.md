# MCLeftClickBlock

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock(обработчик функции.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock>);
```
| Параметр | Тип                                                                                                                                                                   | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock](/vanilla/api/event/entity/player/PlayerInteractEvent/MCLeftClickBlock)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickBlock.getEntityPlayer();
```

### getFace

Возвращается: `Лицо, участвующее в этом взаимодействии. Для всех неблочных взаимодействий он вернёт null.`

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCLeftClickBlock.getFace();
```

### getItemStack

Возвращается: `Если рука была пуста: {` @code ItemStack.EMPTY}.

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCLeftClickBlock.getItemStack();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickBlock.getPlayer();
```

### getPos

Если взаимодействие было на сущности, то будет BlockPos в центре сущности. Если взаимодействие было на блоке, будет позиция этого блока. В противном случае будет BlockPos в центре игрока. никогда не будет нулевым. Возвращается: `Должность, участвующая в этом взаимодействии.`

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCLeftClickBlock.getPos();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCLeftClickBlock.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCLeftClickBlock.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCLeftClickBlock.isCancel();
```

### установка отменена

```zenscript
myMCLeftClickBlock.setCancel(отменено как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменено | boolean | Описание отсутствует |



