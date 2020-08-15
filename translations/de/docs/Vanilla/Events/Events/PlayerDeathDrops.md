# PlayerDeathDrops

Das PlayerDeathDrops Event wird abgefeuert, wenn die Gegenstände eines Spielers aufgrund des Todes des Spielers auf den Boden fallen.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerDeathDropsEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter        | Rückgabetyp                                                  |
| ---------------- | ------------------------------------------------------------ |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `gegenstände`    | [`Liste<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Schadensquelle` | [IDamageSource](/Vanilla/Damage/IDamageSource/)              |

## Ändern der Artikel Drops

Sie können entweder zur Dropliste hinzufügen oder sie komplett durch eine neue ersetzen:

```zenscript
event.items = //Verweis auf IEntityItem Liste.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```