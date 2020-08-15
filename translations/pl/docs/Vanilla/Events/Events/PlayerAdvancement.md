# PlayerAdvancement

The PlayerAdvancement Event is fired whenever a player is awarded an Advancement.

## Klasa wydarzenia

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAdvancementEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia

PlayerAdvancement Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu  |
| --------- | ----------- |
| `id`      | ciąg znaków |

## Id

Apart from the functionality the PlayerEvent exposes you can get the advancement's ID as string.

This can for example be a string like

```zenscript
"minecraft:story/mine_diamond"
```