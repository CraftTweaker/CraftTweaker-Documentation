# CriticalHitEvent

Das kritische Trefferereignis wird gefeuert, wenn ein Spieler eine andere Kreatur angreift. It has a **result** which determines whether or not default crit behaviour occurs:

- **Erlaube**: Der Angriff ist zu einem kritischen Angriff gezwungen
- **lehne**ab: Der Angriff wird daran gehindert, kritisch zu sein
- **Standard**: Der Angriff verwendet das Standardverhalten von Vanilla um festzustellen, ob es sich um einen Schlag handelt.

Sie können auch den Schadensmodifikator für den kritischen Treffer anpassen.

## Notizen

`event.oldDamageModifier` enthält den ursprünglichen Schadensmodifikator des Ereignisses, während `Ereignis. sVanillaCrit` ist ein boolescher Wert, der bestimmt, ob dies tatsächlich ein kritischer Treffer ist oder nicht.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. riticalHitEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
CriticalHit Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter                    | ZenSetter              | Rückgabetyp                           |
| ---------------------------- | ---------------------- | ------------------------------------- |
| `target`                     |                        | [IEntity](/Vanilla/Entities/IEntity/) |
| `alter Schadensmodifizierer` |                        | float                                 |
| `Schadensmodifizierer`       | `Schadensmodifizierer` | float                                 |
| `isVanillaCrit`              |                        | boolean                               |

## ZenMethoden

- `event.deny()` setzt das Ergebnis abzulehnen.
- `event.allow()` setzt das erlaubte Ergebnis.
- `event.default()` setzt das Ergebnis auf Standardwert.
