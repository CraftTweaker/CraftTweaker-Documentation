# MobGriefing

Dieses Ereignis wird gefeuert, wann immer es zu einer möglichen Mob-Trauer kommt. It has a **result** which determines whether the default behaviour occurs or not:

- **Erlaube**: die Trauer ist erlaubt
- **lehne**ab: das Trauern wird verhindert
- **Standard**: das Trauern erfolgt nach Vanilla-Logik.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. obGriefingEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
MobGriefing Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
