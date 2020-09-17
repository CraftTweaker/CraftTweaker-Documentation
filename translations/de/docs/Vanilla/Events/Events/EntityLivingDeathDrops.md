# EntityLivingDeathDrops

Das EntityLivingDeathDrops Event wird abgefeuert, wenn der Tod eines Entitäts dazu führt, dass abgeworfene Gegenstände erscheinen.  
Es kann abgebrochen werden, um zu verhindern, dass die Entität etwas löscht.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter          | Rückgabetyp                                                  |
| ------------------ | ------------------------------------------------------------ |
| `drops`            | [`Liste<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Schadensquelle`   | [IDamageSource](/Vanilla/Damage/IDamageSource/)              |
| `isRecentlyHit`    | bool                                                         |
| `plündernde Stufe` | int                                                          |

## Ändern der Artikel Drops

Sie können entweder zur Dropliste hinzufügen oder sie komplett durch eine neue ersetzen:

```zenscript
event.drops = //Verweis auf IEntityItem Liste.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```