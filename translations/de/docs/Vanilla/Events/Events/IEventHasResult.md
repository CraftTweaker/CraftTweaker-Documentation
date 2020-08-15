# IEventHasResult

Diese Schnittstelle wird um alle Ereignisse erweitert, die ein Ergebnis haben, das von der Veranstaltung verwendet wird. Das Ergebnis eines Ereignisses kann einer von drei Werten sein:

- zulassen
- verwerfen
- Standard

Die Bedeutung davon hängt vom Kontext ab. Die Verweigerung eines Ereignisses verhindert, dass eine bestimmte ereignisbezogene Aktion stattfinden kann (auch wenn sie nicht garantiert ist). Ebenso zwingt die Zulassung eines Ereignisses ein Verhalten (auch wenn es nicht garantiert ist). Der Defaultwert bewirkt, dass das Ereignis einfach mit seiner normalen Logik fortgesetzt wird. Nicht alle Ereignisse verwenden jedes Ergebnis.

## Diese Klasse importieren
Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IEventHasResult;`

## Was kann mit ihnen geschehen?

- `event.result` Getter, gibt einen String Wert von `default`, `deny` oder `allow`
- `event.deny()` Methode, setzt das Ergebnis des Ereignisses auf `lehne` ab
- `event.allow()` Methode, setzt das Ergebnis des Ereignisses auf `erlauben`
- `event.default()` Methode, setzt das Ergebnis des Ereignisses auf `Standard`
