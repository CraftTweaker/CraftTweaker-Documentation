# Скорость Разрыва Игроков

Событие "Скорость Разрыва Игроков" запускается, когда игрок пытается сломать блок.  
Это может быть отменено, чтобы остановить игрока от возможности ломать этот блок.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBreakSpeedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerBreakSpeed Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## Геттеры/сеттеры

| Геттеры            | ZenSetter      | Тип                                         |
| ------------------ | -------------- | ------------------------------------------- |
| blockState         |                | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| блок               |                | [БИБлок](/Vanilla/Blocks/IBlock/)           |
| скорость оригинала |                | float                                       |
| новая скорость     | новая скорость | float                                       |