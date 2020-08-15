# Abholung des Spielers

Das Spielgegenstand-Abhol-Event wird abgefeuert, nachdem ein Spieler mit einem Gegenstandsgegenstand interagiert hat und ein Gegenstand oder die Menge eines Gegenstands abgeholt wurde. Dieses Event findet nach [SpielerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) statt.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerItemPickupEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerItemPickup Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter         | Rückgabetyp                                   |
| ----------------- | --------------------------------------------- |
| `stackCopy`       | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `originalEntität` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Notizen

`StackCopy` ist eine Kopie des Artikels, der im Original enthalten ist, was abgeholt wurde und im Inventar des Spielers platziert wurde. `OriginalEntity` ist die Gegenstandseinheit mit einer beliebigen Anzahl an Gegenstandsstapeln (wenn der Spieler nicht den vollen Betrag abgeholt hat).
