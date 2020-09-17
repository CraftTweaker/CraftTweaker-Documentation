# VerzauberungLevelSetEvent

Das Verzauberungslevel Event wird abgefeuert, wenn die Level für die drei möglichen Verzauberungen in der Verzauberungstabelle erzeugt werden.

## Notizen

`event.enchantRow` listet die Zeile (1-3) der Verzauberungstabelle auf, während `event.originalLevel` die ursprüngliche Ebene der Zeile repräsentiert. `Event.power` ist der kumulative Wert von Bücherregalen rund um den Zaubertisch während `Event stattfindet.Item` ist der Gegenstand der verzaubert wird.

`event.level` kann willkürlich auf einen Wert zwischen 0 & 30 geändert werden.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. nchantmentLevelSetEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
VerchantLevelSet Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter

| ZenGetter          | ZenSetter | Rückgabetyp                              |
| ------------------ | --------- | ---------------------------------------- |
| `Welt`             |           | [IWorld](/Vanilla/World/IWorld/)         |
| `verzaubern Zeile` |           | int                                      |
| `power`            |           | int                                      |
| `eintrag`          |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `originalstufe`    |           | int                                      |
| `Level`            | `Level`   | int                                      |
