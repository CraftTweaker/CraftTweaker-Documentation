# IWorld

Das IWorld-Objekt enthält Informationen über eine Dimension innerhalb des Spiels.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.world.IWorld`

## Erweiterte IBlockeigenschaften

IBlockState erweitert [IBlockAccess](/Vanilla/World/IBlockAccess/). Das bedeutet, dass alle Methoden, die [IBlockAccess](/Vanilla/World/IBlockAccess/) Objekten zur Verfügung stehen, auch für IBlockState Objekte verfügbar sind.

## Erstellen eines IWorld-Objekts

Normalerweise können Sie dieses Objekt von Entitäten oder anderen Funktionen ableiten. Wenn Sie es jedoch selbst erstellen müssen dies ist der Weg, um zu gehen:  
Beachten Sie, dass diese Methode nur innerhalb von Funktionen aufgerufen werden sollte, die in Minecraft ausgeführt werden sollen, nicht während des Laderaums.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMethoden ohne Parameter und ZenGetters

| ZenMethode         | ZenGetter       | Rückgabetyp                                      | Beschreibung                                                                                                                                                                                              |
| ------------------ | --------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | fernbedienung   | boolean                                          | Wahr, wenn die Welt ein "Slave"-Client ist; Änderungen werden nicht aus dieser Welt gespeichert oder verbreitet. Zum Beispiel haben Server-Welten diesen Wert auf falsch, Client-Welten auf true gesetzt. |
| isRaining()        | regnet          | boolean                                          | Gibt wahr aus, wenn es derzeit regnet.                                                                                                                                                                    |
| isThundering()     | donnernd        | boolean                                          | Gibt wahr zurück, wenn es momentan donnernd ist.                                                                                                                                                          |
| getMoonPhase()     | mondphase       | int                                              | Gibt die aktuelle Mondphase zurück.                                                                                                                                                                       |
| isDayTime()        | dayTime         | boolean                                          | Prüft, ob es tagsüber ist.                                                                                                                                                                                |
| getWorldTime()     | Zeit            | long                                             | Gibt die Zeit der Welt zurück.                                                                                                                                                                            |
| getDimension()     | maße            | int                                              | Gibt die Dimension der Welt zurück.                                                                                                                                                                       |
| isSurfaceWorld()   | oberflächenwelt | boolean                                          | Gibt zurück, ob Sie sich in einer Oberflächenwelt befinden oder nicht.                                                                                                                                    |
| getDimensionType() | dimensiontyp    | String                                           | Gibt den Namen des Formattyps zurück.                                                                                                                                                                     |
| getWorldType()     | worldType       | String                                           | Gibt den Namen des Welttyps zurück.                                                                                                                                                                       |
| getWorldInfo()     | WorldInfo       | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Gibt die Informationen der Welt zurück. Kann verwendet werden, um noch mehr Informationen über die Welt abzurufen.                                                                                        |
| getProvider()      | anbieter        | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Gibt den weltweiten Anbieter zurück. Kann verwendet werden, um noch mehr Informationen über die Welt abzurufen.                                                                                           |

## ZenMethoden mit Parametern

### Biom an bestimmter Position abrufen

Verwende entweder ein [IPosition3f](/Vanilla/Utils/Position3f/) oder ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.  
Gibt ein [IBiome](/Vanilla/Biomes/IBiome/) Objekt zurück.

```zenscript
worldObj.getBiome(IPosition3f Position);
worldObj.getBiome(IBlockPos Position);
```

### Helligkeit an einer bestimmten Position erhalten

Verwende entweder drei Ints oder ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt. Gibt eine Int zurück.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos Position);
```

### Block an einer bestimmten Position erhalten

Verwende entweder drei Ints oder ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt. Gibt ein [IBlock](/Vanilla/Blocks/IBlock/) Objekt zurück.

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos Position);
```

### Erhalte oder setze einen Blockstatus an einer bestimmten Position

Verwende ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt und für den Setter auch ein [IBlockState](/Vanilla/Blocks/IBlockState/) Objekt. Optional kann ein [IData](/Vanilla/Data/IData/) Objekt angegeben werden, um NBT Daten für die TileEntity des Blockzustands zu definieren, wenn es gesetzt ist. Getter gibt einen [IBlockState](/Vanilla/Blocks/IBlockState/)zurück, setze ein Bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Entität spawnen

Verwende ein [IEntity](/Vanilla/Entities/IEntity/) Objekt.  
Gibt einen Bool zurück, der angibt, ob der Spawn erfolgreich war.

```zenscript
worldObj.spawnEntity(IEntity);
```

### Get a raytrace result

Verwende zwei [IVector3d](/Vanilla/World/IVector3d/) Objekte und drei Booleans um ein [IRayTraceResult](/Vanilla/World/IRayTraceResult/)zu erhalten.  
**Kann null sein**

Der erste Vektor beschreibt den Ausgangspunkt, den zweiten Vektor die Richtung und die Länge, in der wir suchen.  
Standardmäßig ist nur der letzte Parameter wahr.

```zenscript
worldObj.rayTraceBlocks(IVector3d beginnt, IVector3d Strahl, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Hole dir den ausgewählten Block

Verwenden Sie einen [IBlockPos](/Vanilla/World/IBlockPos/), ein [IRayTraceResult](/Vanilla/World/IRayTraceResult/) und einen [IPlayer](/Vanilla/Players/IPlayer/).  
Gibt [IItemStack](/Vanilla/Items/IItemStack/)zurück.  
**Kann ungültig sein**

Ruft den IItemStack ab, der durch die Auswahl des Blocks an der Position erhalten würde.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, IPlayer Player);
```