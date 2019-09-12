# BlockBreakEvent

Событие BlockBreakEvent запускается, когда блок ломается.  
Вы можете отменить это событие, чтобы предотвратить разрушение блока.

## Класс события

Вам потребуется привести тип события в заголовке функции к этому классу  
`crafttweaker.event.BlockBreakEvent`  
И, конечно, вы можете [импортировать](/AdvancedFunctions/Import/) класс перед использованием.

## Наследование от интерфейсов событий

BlockBreakEvent реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## Геттеры ZenScript

Следующая информация может быть получена от события:

| Геттер       | Сеттер       | Тип                                  |
| ------------ | ------------ | ------------------------------------ |
| `player`     |              | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`   |              | bool                                 |
| `experience` | `experience` | int                                  |