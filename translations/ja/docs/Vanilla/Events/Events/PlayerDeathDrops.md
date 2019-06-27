# PlayerDeathDrops

The PlayerDeathDrops Event is fired whenever a player's items fall to the ground due to the player's death.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| ZenGetter      | Return Type                                                 |
| -------------- | ----------------------------------------------------------- |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)                        |
| `items`        | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource` | [IDamageSource](/Vanilla/Damage/IDamageSource/)             |

## Modifying the item drops

You can either add to the droplist or completely substitute it with a new one:

```kotlin
event.items = //reference to IEntityItem list.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```