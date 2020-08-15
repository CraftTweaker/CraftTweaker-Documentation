# ItemFishedEvent

This event is fired to when a player is about to fish up an item. Cancelling the event will prevent the player from receiving an item, but the rod will still take damage.

## Uwagi

Additional damage can be done to the rod by setting `event.additionalDamage`. A list of IItemStacks (which is **not modifiable**) that are going to be fished up is contained within `event.drops`.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemFishedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
ItemFished Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter   | ZenSetter          | Typ                                        |
| ----------- | ------------------ | ------------------------------------------ |
| `obrażenia` |                    | odcień                                     |
|             | `additionalDamage` | odcień                                     |
| `krople`    |                    | [IItemStack](/Vanilla/Items/IItemStack/)[] |
