# PlayerInteract

The PlayerInteract Event is fired whenever a player interacts with a block.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerInteract Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

The following information can be retrieved from the event:

| ZenGetter    | Type de retour                       |
| ------------ | ------------------------------------ |
| `canceled`   | boolean                              |
| `usingItem`  | boolean                              |
| `usingBlock` | boolean                              |
| `x`          | Indice                               |
| `y`          | Indice                               |
| `z`          | Indice                               |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `world`      | [IWorld](/Vanilla/World/IWorld/)     |
| `Bloquer`    | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `dimension`  | Indice                               |

## Méthodes Zen

- `event.cancel()` sets the event as cancelled
- `event.useBlock()` sets Block to true
- `event.useItem()` sets Item to true