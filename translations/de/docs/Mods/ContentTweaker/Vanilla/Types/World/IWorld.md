# IWorld

Ein IWorld-Objekt repräsentiert die Welt, in der sich der Spieler derzeit befindet.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.World;`

## ZenMethoden ohne Parameter und ZenGetters

| ZenMethode         | ZenGetter       | Rückgabetyp                                                    | Beschreibung                                                                                                                                                                                              |
| ------------------ | --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | fernbedienung   | boolean                                                        | Wahr, wenn die Welt ein "Slave"-Client ist; Änderungen werden nicht aus dieser Welt gespeichert oder verbreitet. Zum Beispiel haben Server-Welten diesen Wert auf falsch, Client-Welten auf true gesetzt. |
| isRaining()        | regnet          | boolean                                                        | Gibt wahr aus, wenn es derzeit regnet                                                                                                                                                                     |
| isThundering()     | donnernd        | boolean                                                        | Gibt wahr aus, wenn es gerade donnert                                                                                                                                                                     |
| getMoonPhase()     | mondphase       | int                                                            | Gibt die aktuelle Mondphase zurück                                                                                                                                                                        |
| isDayTime()        | dayTime         | boolean                                                        | Prüft, ob es Tageszeit ist                                                                                                                                                                                |
| getWorldTime()     | Zeit            | long                                                           | Gibt die Zeit der Welt zurück                                                                                                                                                                             |
| getDimension()     | maße            | int                                                            | Gibt die Dimension der Welt zurück                                                                                                                                                                        |
| isSurfaceWorld()   | oberflächenwelt | boolean                                                        | Gibt zurück, ob du in einer Oberflächenwelt bist oder nicht                                                                                                                                               |
| getDimensionType() | dimensiontyp    | String                                                         | Gibt den Namen des Dimensionstyps zurück                                                                                                                                                                  |
| getRandom()        | zufällig        | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Gibt den weltweiten Zufallszahlengenerator zurück                                                                                                                                                         |

## ZenMethoden mit Parametern

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);