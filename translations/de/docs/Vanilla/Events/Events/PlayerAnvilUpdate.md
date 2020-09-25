# PlayerAnvilUpdate

Das PlayerAnvilUpdate Event wird abgefeuert, wenn ein Spieler Gegenstände auf den linken und rechten Plätzen eines Amboss platziert.
 * Wird das Ereignis abgebrochen, wird das Vanilleverhalten nicht ausgeführt und die Ausgabe wird auf Null gesetzt.
 * Wenn das Ereignis nicht abgebrochen wird, aber die Ausgabe nicht null ist, wird die Ausgabe gesetzt und kein Vanilleverhalten ausgeführt.
 * wenn die Ausgabe null ist und das Ereignis nicht abgebrochen wird, wird das Vanilleverhalten ausgeführt.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerAnvilUpdate Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter         | ZenSetter        | typ                                      | Beschreibung                                                                                                                                             |
| ----------------- | ---------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linkes Element`  |                  | [IItemStack](/Vanilla/Items/IItemStack/) | Die linke Seite der Eingabe.                                                                                                                             |
| `rechtes Element` |                  | [IItemStack](/Vanilla/Items/IItemStack/) | Die rechte Seite der Eingabe.                                                                                                                            |
| `outputItem`      | `outputItem`     | [IItemStack](/Vanilla/Items/IItemStack/) | Setze dies um den Ausgabestack zu setzen.                                                                                                                |
| `itemName`        |                  | string                                   | Der Name des Elements, wenn der Benutzer eines angegeben hat.                                                                                            |
| `xpCost`          | `xpCost`         | int                                      | Die Basiskosten, setzen Sie dies, um sie zu ändern, wenn die Ausgabe != null ist.                                                                        |
| `materialkosten`  | `materialkosten` | int                                      | Die Anzahl der Items aus dem richtigen Slot, die während der Reparatur verbraucht werden sollen. Lassen Sie als 0 um den gesamten Stapel zu konsumieren. |

## ZenMethoden

- `event.cancel()` setzt das Ereignis als abgebrochen.
