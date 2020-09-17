# AnimalTame

Dieses Ereignis wird abgefeuert, um festzustellen, ob ein Tier gezähmt werden soll. Wenn abgebrochen, **ist die Zähmung nicht erfolgreich**. Ansonsten dient es lediglich als Meldung der Zähmung.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. nimalTameEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
AnimalTame Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter  | ZenSetter | Type                                              |
| ---------- | --------- | ------------------------------------------------- |
| `tierisch` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `tierisch` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `player`   |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
