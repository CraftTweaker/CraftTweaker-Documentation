# IEventCancelable

Diese Schnittstelle wird um alle abgebrochenen Ereignisse erweitert.  
Das bedeutet, dass du sie mit CrT abbrechen oder überprüfen kannst, ob sie abgebrochen wurden.

Beachten Sie, dass Ereignisse, die abgebrochen wurden, bevor CrT sie empfängt, nicht von den Handlern überprüft werden.  
Auch wenn Sie mehrere Handler registrieren und einer von ihnen das Ereignis abbrecht, werden die anderen CrT-Handler immer noch erhalten!

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.event.IEventCancelable;`

## Was kann mit ihnen geschehen?

- `event.cancel();` Methode, liefert nichtig (nichts).
- `Ereignis.abgebrochen;` Getter, gibt einen Bool.
- `event.canceled = true;` Setter