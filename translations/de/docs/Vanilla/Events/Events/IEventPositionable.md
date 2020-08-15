# IEventPositionable

Diese Schnittstelle wird um alle Ereignisse erweitert, deren Position zählt.  
Das bedeutet, dass Sie die folgenden Getter verwenden können, um auf die Positionsdetails zuzugreifen.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.event.IEventPositionable;`

## ZenGetter

| name     | typ                                    |
| -------- | -------------------------------------- |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | int                                    |
| y        | int                                    |
| z        | int                                    |