# ProjektileImpactPfeil

Dieses Ereignis wird abgefeuert, wenn ein Pfeil-Projektil auf eine Entität wirkt, aber vor dem Schaden, etc, berechnet wird. Es ist **widerrufbar**, und wenn abgebrochen, wird der Effekt nicht bearbeitet.

Verschiedene Werte aus der Pfeileinheit sind über zengetters verfügbar und können geändert werden, um den Schaden anzupassen, Rückstoßstärke, Aufholstatus und einen kritischen Treffer bestimmen (oder erzwingen).

## Diese Klasse importieren
Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.event.ProjectileImpactArrowEvent;`

## IEntityEvent wird erweitert
ProjectileImpactPfeil Ereignisse implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters und ZenSetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter     | ZenSetter          | Type                                  |
| ------------- | ------------------ | ------------------------------------- |
| `pfeil`       |                    | [IEntity](/Vanilla/Entities/IEntity/) |
| `schießen`    |                    | [IEntity](/Vanilla/Entities/IEntity/) |
| `schaden`     | `schaden`          | double                                |
|               | `rückstock-Stärke` | int (nur setter, kein getter)         |
| `iskritisch`  | `iskritisch`       | boolean                               |
| `abholstatus` |                    | String                                |

## Zusätzliche Methoden

- `setPickupDisallowed()`

Verhindert, dass der Pfeil unter keinen Umständen aufgehoben wird.

- `setPickupAllowed()`

Ermöglicht das Aufheben des Pfeiles, von dem aus die Entität landete.

- `setPickupCreative()`

Der Pfeil kann nur aufgehoben werden, wenn sich der Spieler im Kreativmodus befindet.
