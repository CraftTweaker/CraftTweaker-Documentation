# EntityTravelToDimension

Das EntityTravelToDimension-Event wird abgefeuert, wenn eine Einheit in eine andere Dimension reisen wird. Wenn abgebrochen, wird die Entität an der Reise gehindert.

## Notizen

`event.dimension` enthält die Dimension, in die die Entität reisen wird.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
EntityTravelToDimension Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getter/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter | Rückgabetyp |
| --------- | ----------- |
| `maße`    | int         |
