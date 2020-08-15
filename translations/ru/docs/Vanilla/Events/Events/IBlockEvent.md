# IBlockEvent

Этот интерфейс расширен всеми событиями, которые могут иметь дело с блоками в мире.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.event.IBlockEvent`

## Наследование от IEventPositionable

Этот интерфейс расширяет [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/). Это значит, что весь функционал, который предлагает IEventPositionable, так же доступен в IBlockEvent.

## Геттеры

| name       | type                                        |
| ---------- | ------------------------------------------- |
| world      | [IWorld](/Vanilla/World/IWorld/)            |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| block      | [IBlock](/Vanilla/Blocks/IBlock/)           |