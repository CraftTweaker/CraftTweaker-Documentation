# Artikel Toss

Das Item Toss Event wird abgefeuert, wenn ein Gegenstand aus dem Inventar eines Spielers geworfen wird.  
Das Abbrechen dieses Ereignisses verhindert, dass der Gegenstand in die Welt gelangt, wodurch der Gegenstand gelöscht wird.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. temTossEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDeathDrops Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Type                                          |
| --------- | --------------------------------------------- |
| eintrag   | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| player    | [IPlayer](/Vanilla/Players/IPlayer/)          |