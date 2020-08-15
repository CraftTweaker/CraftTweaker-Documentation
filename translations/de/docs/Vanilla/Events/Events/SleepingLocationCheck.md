# SleepingLocationCheck

Dieses Ereignis wird abgefeuert, wenn geprüft wird, ob ein schlafender Spieler an der aktuellen Position weiterhin schlafen kann. Wenn ein **Ergebnis** hat, das die Aktion bestimmt.

Ergebnis:
- **Standard**, gibt die Standardantwort von Vanilla zurück, wie sie in der Bett-Tile-Entität gefunden wurde
- **Erlaube**, erlaubt es dem Spieler zu schlafen
- **Deny** ist speziell ***ignoriert*** in dieser Instanz und unternimmt nichts.

Dieses Ereignis erlaubt es Ihnen, den Spieler schlafen zu lassen, aber es erlaubt Ihnen nicht, die Standard-Bett-Logik zu umgehen.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. leepingLocationCheck`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
SleepingLocationCheck Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
