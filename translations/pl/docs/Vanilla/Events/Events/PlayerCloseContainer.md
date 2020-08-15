# PlayerCloseContainer

The PlayerCloseContainer Event is fired whenever a player closes a container.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
PlayerCloseContainer Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | Typ zwrotu                                 |
| ---------- | ------------------------------------------ |
| `pojemnik` | [Kontener](/Vanilla/Container/IContainer/) |
