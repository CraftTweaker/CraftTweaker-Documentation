# IProjectileImpactEvent

Diese Schnittstelle wird um alle Ereignisse erweitert, die sich auf Projektile beziehen (solche wie Feuerbälle, Pfeile und werfbare Gegenstände).

## Diese Klasse importieren
Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.event.IProjectileImpactEvent;`

## IEntityEvent wird erweitert
Diese Schnittstelle erweitert [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), was bedeutet, dass alle Funktionen, die IEntityEvent bietet, auch im IProjectileImpactEvent vorhanden sind.

## ZenGetter

| name       | typ                                                |
| ---------- | -------------------------------------------------- |
| `rayTrace` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |
