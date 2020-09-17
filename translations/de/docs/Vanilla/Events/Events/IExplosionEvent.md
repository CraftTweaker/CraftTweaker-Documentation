# IExplosionEvent

Diese Schnittstelle wird um alle Explosionsereignisse erweitert. Das bedeutet, dass Sie die folgenden Getter verwenden können, um auf die Positionsdetails zuzugreifen.

## Diese Klasse importieren
Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IExplosionEvent;`

## ZenGetter

| name     | typ                                    |
| -------- | -------------------------------------- |
| Welt     | [IWorld](/Vanilla/World/IWorld/)       |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | double                                 |
| y        | double                                 |
| z        | double                                 |
