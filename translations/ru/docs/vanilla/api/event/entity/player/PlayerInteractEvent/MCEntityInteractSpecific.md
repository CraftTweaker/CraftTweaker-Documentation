# MCEntityInteractSpecific

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific(обработчик функции.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific>);
```
| Параметр | Тип                                                                                                                                                                                   | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCEntityInteractSpecific](/vanilla/api/event/entity/player/PlayerInteractEvent/MCEntityInteractSpecific)> | Описание отсутствует |



## Методы
### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteractSpecific.getEntityPlayer();
```

### getFace

Возвращается: `Лицо, участвующее в этом взаимодействии. Для всех неблочных взаимодействий он вернёт null.`

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCEntityInteractSpecific.getFace();
```

### getItemStack

Возвращается: `Если рука была пуста: {` @code ItemStack.EMPTY}.

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCEntityInteractSpecific.getItemStack();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCEntityInteractSpecific.getPlayer();
```

### getPos

Если взаимодействие было на сущности, то будет BlockPos в центре сущности. Если взаимодействие было на блоке, будет позиция этого блока. В противном случае будет BlockPos в центре игрока. никогда не будет нулевым. Возвращается: `Должность, участвующая в этом взаимодействии.`

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCEntityInteractSpecific.getPos();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCEntityInteractSpecific.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCEntityInteractSpecific.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCEntityInteractSpecific.isCanceled();
```

### установка отменена

```zenscript
myMCEntityInteractSpecific.setCancel(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |



