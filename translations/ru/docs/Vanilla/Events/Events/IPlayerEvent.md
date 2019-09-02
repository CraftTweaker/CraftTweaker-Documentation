# IPlayerEvent

Этот интерфейс расширяется всеми событиями, который содержат игрока.  
Это значит, что вы можете использовать геттер ниже, чтобы получить объект игрока.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.event.IPlayerEvent`

## Наследование от ILivingEvent

Этот интерфейс расширяет [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/). Это значит, что весь функционал, который предлагает ILivingEvent, так же доступен в IPlayerEvent.

## Геттеры ZenScript

| name   | type                                 |
| ------ | ------------------------------------ |
| player | [IPlayer](/Vanilla/Players/IPlayer/) |