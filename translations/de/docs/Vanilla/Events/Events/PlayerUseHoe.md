# SpielerUseHoe

The PlayerUseHoe Event is fired when a player uses his ho... Wenn Sie wissen, was ich meine.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerUseHoeEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerUseHoe Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | Rückgabetyp                                 |
| ------------- | ------------------------------------------- |
| `abgebrochen` | boolean                                     |
| `bearbeitet`  | boolean                                     |
| `x`           | int                                         |
| `y`           | int                                         |
| `z`           | int                                         |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `Welt`        | [IWorld](/Vanilla/World/IWorld/)            |
| `blockieren`  | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `blockstatus` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `maße`        | int                                         |
| `eintrag`     | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen
- `event.process()` setzt das Ereignis wie bearbeitet