# EntityLivingDeathDrops

The EntityLivingDeathDrops Event is fired whenver an Entity's death causes dropped items to appear.  
It can be canceled to stop the entity from dropping anything.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter       | Rückgabetyp                                                 |
| --------------- | ----------------------------------------------------------- |
| `player`        | [IPlayer](/Vanilla/Players/IPlayer/)                        |
| `items`         | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource`  | [IDamageSource](/Vanilla/Damage/IDamageSource/)             |
| `isRecentlyHit` | bool                                                        |
| `lootingLevel`  | int                                                         |

## Modifying the item drops

You can either add to the droplist or completely substitute it with a new one:

```zenscript
event.items = //reference to IEntityItem list.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```