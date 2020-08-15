# ItemFishedEvent

Dieses Ereignis wird abgefeuert, wenn ein Spieler einen Gegenstand anfangen möchte. Das Abbrechen des Ereignisses verhindert, dass der Spieler einen Gegenstand erhält, aber die Rute wird trotzdem Schaden nehmen.

## Notizen

Zusätzlicher Schaden kann der Stange durch `event.Zusätzlicher Schaden` zugefügt werden. Eine Liste der IItemStacks (die **nicht veränderbar ist**), die gefangen werden sollen, ist in `event.drops` enthalten.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. temFishedEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
ItemFished Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter | ZenSetter              | Type                                       |
| --------- | ---------------------- | ------------------------------------------ |
| `schaden` |                        | int                                        |
|           | `zusätzlicher Schaden` | int                                        |
| `drops`   |                        | [IItemStack](/Vanilla/Items/IItemStack/)[] |
