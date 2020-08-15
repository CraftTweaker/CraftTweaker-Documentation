# Spielerfüllen Bucket

Das SpielerFillBucket Event wird abgefeuert, wenn ein Spieler einen Eimer füllt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerFillBucketEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerFillBucket Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter          | Rückgabetyp                                        |
| ------------------ | -------------------------------------------------- |
| `abgebrochen`      | boolean                                            |
| `player`           | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `ergebnis`         | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `leerer Bucket`    | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `x`                | int                                                |
| `y`                | int                                                |
| `z`                | int                                                |
| `Welt`             | [IWorld](/Vanilla/World/IWorld/)                   |
| `blockstatus`      | [IBlockState](/Vanilla/Blocks/IBlockState/)        |
| `blockieren`       | [IBlock](/Vanilla/Blocks/IBlock/)                  |
| `maße`             | int                                                |
| `rayTraceErgebnis` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.

## Setter

- `event.result = <minecraft:ender_pearl>` Dies wird auch die Veranstaltung verarbeiten!