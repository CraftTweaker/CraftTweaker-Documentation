# IRayTraceResult

Wenn ein Spieler auf etwas schaut oder auf etwas klickt, feuert er einen Strahl ab, der geht, bis er das trifft, was er tun muss, oder vermisst.  
Das Ergebnis eines solchen Treffers ist ein IRayTraceResult-Objekt.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`crafttweaker.world.IRayTraceResult`

## ZenGetter

Alles, was Sie tun können, ist Informationen von diesen Objekten abzurufen, hier:  
Seien Sie jedoch vorsichtig da alle Getter, die keinen Bool zurückgeben, `null` zurückgeben können!

| name     | typ                                    |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isEntity | bool                                   |
| isBlock  | bool                                   |
| objekt   | [IEntity](/Vanilla/Entities/IEntity/)  |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |