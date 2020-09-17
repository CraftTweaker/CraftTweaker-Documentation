# Ведро игрока

Событие "FillBucket" запускается, когда игрок заполняет корзину.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerFillBucketEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerFillBucket События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры               | Возвращаемый тип                                          |
| --------------------- | --------------------------------------------------------- |
| `отменено`            | boolean                                                   |
| `player`              | [IPlayer](/Vanilla/Players/IPlayer/)                      |
| `результат`           | [IItemStack](/Vanilla/Items/IItemStack/)                  |
| `пустой ведро`        | [IItemStack](/Vanilla/Items/IItemStack/)                  |
| `х`                   | int                                                       |
| `у`                   | int                                                       |
| `z`                   | int                                                       |
| `world`               | [IWorld](/Vanilla/World/IWorld/)                          |
| `blockState`          | [IBlockState](/Vanilla/Blocks/IBlockState/)               |
| `блок`                | [БИБлок](/Vanilla/Blocks/IBlock/)                         |
| `измерение`           | int                                                       |
| `Результат rayTrace™` | [Результат IRayTraceult](/Vanilla/World/IRayTraceResult/) |

## ZenMethods

- `event.cancel()` устанавливает событие как отменено.

## Сеттеры

- `event.result = <minecraft:ender_pearl>` Также будет обрабатывать событие!