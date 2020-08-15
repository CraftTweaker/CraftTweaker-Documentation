# FarmlandTrampleEvent

The FarmlandTrample Event is fired whenever a farmland is about to be trampled. Canceling the event will prevent the block from being trampled.

## Uwagi

`event.fallDistance` contains the distance fallen before hitting the farmland.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
FarmlandTrample Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter      | ZenSetter | Typ                                   |
| -------------- | --------- | ------------------------------------- |
| `podmiot`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallDistance` |           | zmiennoprzecinkowe                    |
