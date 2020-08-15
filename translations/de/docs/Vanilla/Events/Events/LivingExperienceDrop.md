# LivingExperienceDrop

Dieses Ereignis wird abgefeuert, wenn eine Entität stirbt und die Erfahrung verliert, wodurch die Menge an Erfahrung geändert werden kann. Alternately, the event can be **canceled** to prevent experience from being dropped.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ivingExperienceDropEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
LivingExperienceDrop Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getter/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter            | ZenSetter           | Type                                 |
| -------------------- | ------------------- | ------------------------------------ |
| `player`             |                     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `droppedExperience`  | `droppedExperience` | int                                  |
| `originalExperience` |                     | int                                  |

## Notizen

`Original-Erfahrung` enthält die ursprüngliche Vanilla-Erfahrung. Es ist möglich, dass `droppedExperience` beim Abfeuern dieses Ereignisses bereits geändert wurde.
