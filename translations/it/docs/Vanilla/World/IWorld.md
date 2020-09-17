# IWorld

L'oggetto IWorld contiene informazioni su una dimensione all'interno del gioco.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.world.IWorld`

## Estensione Delle Proprietà IblockProperties

IBlockState estende [IBlockAccess](/Vanilla/World/IBlockAccess/). Ciò significa che tutti i metodi disponibili per gli oggetti [IBlockAccess](/Vanilla/World/IBlockAccess/) sono disponibili anche per gli oggetti IBlockStatal.

## Creare un oggetto IWorld

Normalmente, puoi ricavare questo oggetto da entità o altre funzioni. Se avete bisogno di creare te stesso, però, questo è il modo di andare:  
Nota che questo metodo dovrebbe essere chiamato solo all'interno di funzioni che devono essere eseguite all'interno di minecraft, non durante il cerchio di carico.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMetodi senza parametri e ZenGetters

| ZenMethod          | ZenGetter     | Tipo di ritorno                                  | Descrizione                                                                                                                                                                                                        |
| ------------------ | ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isRemote()         | remoto        | boolean                                          | Vero se il mondo è un cliente "schiavo"; i cambiamenti non saranno salvati o propagati da questo mondo. Ad esempio, i mondi del server hanno questo set a false, i mondi del client hanno questo impostato a true. |
| isRaining()        | pioggia       | boolean                                          | Restituisce vero se sta piovendo.                                                                                                                                                                                  |
| isThundering()     | tuono         | boolean                                          | Restituisce vero se è attualmente tuonare.                                                                                                                                                                         |
| getMoonPhase()     | moonPhase     | int                                              | Restituisce la fase lunare corrente.                                                                                                                                                                               |
| isDayTime()        | dayTime       | boolean                                          | Controlla se è diurno.                                                                                                                                                                                             |
| getWorldTime()     | tempo         | lungo                                            | Restituisce il tempo del mondo.                                                                                                                                                                                    |
| getDimension()     | dimensione    | int                                              | Restituisce la dimensione del mondo.                                                                                                                                                                               |
| isSurfaceWorld()   | surfaceWorld  | boolean                                          | Ritorna se sei in un mondo di superficie o no.                                                                                                                                                                     |
| getDimensionType() | dimensionType | Stringa                                          | Restituisce il nome del tipo della dimensione.                                                                                                                                                                     |
| getWorldType()     | worldType     | Stringa                                          | Restituisce il nome del tipo del mondo.                                                                                                                                                                            |
| getWorldInfo()     | worldInfo     | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Restituisce le informazioni del mondo. Può essere utilizzato per recuperare ancora più informazioni sul mondo.                                                                                                     |
| getProvider()      | provider      | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Restituisce il fornitore del mondo. Può essere utilizzato per recuperare ancora più informazioni sul mondo.                                                                                                        |

## ZenMethods con parametri

### Ottieni Bioma a una posizione specifica

Usa un [IPosition3f](/Vanilla/Utils/Position3f/) o un [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Restituisce un [IBiome](/Vanilla/Biomes/IBiome/) Object.

```zenscript
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```

### Ottieni luminosità in una posizione specifica

Usa tre suggerimenti o un oggetto [IBlockPos](/Vanilla/World/IBlockPos/). Restituisce un int.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### Ottieni Blocco a una posizione specifica

Usa tre suggerimenti o un oggetto [IBlockPos](/Vanilla/World/IBlockPos/). Restituisce un oggetto [IBlock](/Vanilla/Blocks/IBlock/).

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### Ottieni o imposta una condizione di blocco a una posizione specifica

Usa un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) e per il setter anche un oggetto [IBlockState](/Vanilla/Blocks/IBlockState/). Optionally an [IData](/Vanilla/Data/IData/) object can be specified to define NBT data for the blockstate's TileEntity when it is set. Getter Restituisce un [IBlockState](/Vanilla/Blocks/IBlockState/), setter a bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Uovo di entità

Usa un oggetto [IEntity](/Vanilla/Entities/IEntity/) .  
Restituisce un bool che dichiara se lo spawn ha avuto successo.

```zenscript
worldObj.spawnEntity(IEntity entity);
```

### Get a raytrace result

Usa due oggetti [IVector3d](/Vanilla/World/IVector3d/) e tre booleani per ottenere un [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Può essere nullo**

Il primo vettore descrive il punto di partenza, il secondo vettore la direzione e la lunghezza in cui stiamo cercando.  
Solo l'ultimo parametro è vero per impostazione predefinita.

```zenscript
worldObj.rayTraceBlocks(IVector3d begin, IVector3d ray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Ottieni il blocco scelto

Usa un [IBlockPos](/Vanilla/World/IBlockPos/), un [IRayTraceResult](/Vanilla/World/IRayTraceResult/) e un [IPlayer](/Vanilla/Players/IPlayer/).  
Restituisce un [IItemStack](/Vanilla/Items/IItemStack/).  
**Può essere nullo**

Ottiene l'IItemStack che si otterrebbe raccogliendo il blocco nella posizione.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, giocatore di IPlayer);
```