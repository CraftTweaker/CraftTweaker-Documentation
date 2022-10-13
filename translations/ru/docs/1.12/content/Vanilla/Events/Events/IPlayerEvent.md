# IPlayerEvent
This interface is extended by all events that have a player.  
That means you can use the getter below to access the player.


## Импорт класса
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPlayerEvent;`

## Наследование от ILivingEvent
Этот интерфейс расширяет [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/). Это значит, что весь функционал, который предлагает ILivingEvent, так же доступен в IPlayerEvent.

## ZenGetters

| name   | type                                 |
| ------ | ------------------------------------ |
| player | [IPlayer](/Vanilla/Players/IPlayer/) |