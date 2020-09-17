# FarmlandTrampleEvent

Das FarmlandTrample Event wird gefeuert, wenn ein Ackerland kurz davor steht, mit Füßen zu treten. Das Abbrechen des Ereignisses verhindert, dass der Block mit Füßen tritt.

## Notizen

`event.fallDistance` enthält die Distanz, die vor dem Angriff auf das Land gefallen ist.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. armlandTrampleEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
FarmlandTrample Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | ZenSetter | Type                                  |
| ------------- | --------- | ------------------------------------- |
| `objekt`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `falldistanz` |           | float                                 |
