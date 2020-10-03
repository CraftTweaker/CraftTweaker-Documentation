# PlayerAnvilUpdate

Событие PlayerAnvilUpdate запускается, когда игрок размещает вещи как слева, так и справа от наковальни.
 * Если событие отменено, поведение ванильного режима не будет выполняться, и вывод будет установлен в null.
 * Если событие не отменено, но вывод не является нулевым, он установит вывод и не запустит поведение ванили.
 * если вывод аннулирован и событие не отменено, действие ванильного режима будет выполнено.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerAnvilUpdate События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
Следующая информация может быть получена от события:

| ZenGetter             | ZenSetter             | type                                     | Description                                                                                                                       |
| --------------------- | --------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `левоеПункт`          |                       | [IItemStack](/Vanilla/Items/IItemStack/) | Слева от входа.                                                                                                                   |
| `правый элемент`      |                       | [IItemStack](/Vanilla/Items/IItemStack/) | Правая сторона ввода.                                                                                                             |
| `outputItem`          | `outputItem`          | [IItemStack](/Vanilla/Items/IItemStack/) | Установите это для установки стека вывода.                                                                                        |
| `itemName`            |                       | string                                   | Имя для установки элемента, если пользователь указал его.                                                                         |
| `xpCost`              | `xpCost`              | int                                      | Базовая стоимость, установите этот параметр, если выводит != null.                                                                |
| `стоимость материала` | `стоимость материала` | int                                      | Количество предметов из правой ячейки, которые будут потребляться во время ремонта. Оставьте как 0, чтобы использовать весь стек. |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
