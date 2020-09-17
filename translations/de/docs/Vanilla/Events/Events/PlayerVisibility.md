# Spielersichtlichkeit

Dieses Ereignis wird abgefeuert, um die Sichtbarkeit eines Spielers zu bestimmen, d.h. ob er nahe genug ist, um von einem Angreifer bemerkt zu werden. Das Ergebnis dieses Ereignisses wird zur Berechnung verwendet (mit Modifikatoren von Vanilla Minecraft zum Sneaking, usw.) die Reichweite, die ein Spieler auf eine Kreatur erreichen kann, bevor diese Kreatur sie sieht.

Während dies verwendet werden kann, um den Sichtbarkeitsbereich zu erhöhen (wenn er durch Minecraft oder einen anderen Modus verringert wurde), Er kann nicht über seinen Maximalwert (die Standard-Zieldistanz) erhöht werden.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerVisibilityEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
PlayerVisibilityEvent Ereignisse implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter      | ZenSetter            | Type         |
| -------------- | -------------------- | ------------ |
| `sichtbarkeit` |                      | double       |
|                | `modifySichtbarkeit` | Siehe Notiz. |

## Notiz

Dieser Wert kann nicht direkt gesetzt werden. Wenn Sie die Änderung `` mit einem doppelten Wert aufrufen, wird der Modifikator durch das Ergebnis von `modifiziertem * Doppelwert` ersetzt.
