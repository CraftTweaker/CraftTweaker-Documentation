# Schlafzeitprüfung

Dieses Ereignis wird abgefeuert, wenn geprüft wird, ob ein schlafender Spieler zu einem bestimmten Zeitpunkt weiter schlafen kann. Wenn ein **Ergebnis** hat, das die Aktion bestimmt.

Ergebnis:
- **Standard**, bewirkt, dass die Vanilla-Logik von `World::isDaytime` konsultiert wird.
- **Erlaube**, erlaubt es dem Spieler zu schlafen
- **Deny** ist speziell ***ignoriert*** in dieser Instanz und unternimmt nichts.

Dieses Ereignis erlaubt es Ihnen, den Spieler schlafen zu lassen, aber es erlaubt Ihnen nicht, speziell zu stoppen.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. leepingTimeCheck`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
SleepingTimeCheck Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
