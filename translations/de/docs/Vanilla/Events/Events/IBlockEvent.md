# IBlockEvent

Diese Schnittstelle wird um alle Ereignisse erweitert, die mit Blöcken in der Welt umgehen können.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IBlockEvent;`

## Erweiterung IEventPositionierbar

Diese Schnittstelle erweitert [IEventPositionierbar](/Vanilla/Events/Events/IEventPositionable/), was bedeutet, dass alle Funktionen, die IEventPositionierbare Angebote haben, auch im IBlockEvent vorhanden sind

## ZenGetter

| name        | typ                                         |
| ----------- | ------------------------------------------- |
| Welt        | [IWorld](/Vanilla/World/IWorld/)            |
| blockstatus | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| blockieren  | [IBlock](/Vanilla/Blocks/IBlock/)           |