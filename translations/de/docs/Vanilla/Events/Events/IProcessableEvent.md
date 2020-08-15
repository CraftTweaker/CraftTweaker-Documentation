# IProcessableEvent

Diese Schnittstelle wird um alle Ereignisse erweitert, die verarbeitet werden können.  
Diese Ereignisse werden wie bearbeitet gesetzt, nachdem alles, wofür sie erstellt wurden, abgeschlossen ist und andere Ereignis-Handler das Ereignis nicht mehr ändern sollten.  
Denken Sie daran, dass sie immer noch können!

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IPlayerEvent;`

## Was kann damit getan werden

- `event.process();` Methode, liefert nichtig (nichts)
- `event.processed;` getter, gibt einen Bool zurück