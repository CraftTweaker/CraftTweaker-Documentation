# IBlockDefinition

Gli oggetti IBlockDefinition forniscono informazioni aggiuntive sui blocchi.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IBlockDefinition;`

## Chiamare un oggetto IBlockDefinition

* Utilizzando la definizione `` ZenGetter su un oggetto [IBlock](/Vanilla/Blocks/IBlock/).

## Chiamare un IBlockDefinition List

* Utilizzando `game.blocks` per ottenere una lista di tutti i blocchi di definizione nel gioco.

## ZenGetters/ZenSetters

| ZenGetter           | ZenSetter           | Che cosa fa                                            | Tipo                                                |
| ------------------- | ------------------- | ------------------------------------------------------ | --------------------------------------------------- |
|                     | canSpawnInBlock     | Restituisce se un'entità può generare in questo blocco | bool                                                |
| creativeTab         | creativeTab         |                                                        | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| stato predefinito   |                     |                                                        | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                     | defaultSlipperiness |                                                        | galleggiante                                        |
| id                  |                     | Restituisce l'ID del blocco                            | stringa                                             |
| displayName         |                     | Restituisce il DisplayName del blocco                  | stringa                                             |
|                     | durezza             |                                                        | int                                                 |
| livello di raccolta |                     | Restituisce il livello di raccolta del blocco          | int                                                 |
| harvestTool         |                     | Restituisce lo strumento di raccolta del blocco        | stringa                                             |
|                     | lightOpacity        |                                                        | int                                                 |
|                     | lightLevel          |                                                        | int                                                 |
|                     | resistenza          |                                                        | int                                                 |
| unlocalizedName     |                     | Restituisce il nome non localizzato del blocco         | stringa                                             |
| tickRandomly        | tickRandomly        |                                                        | bool                                                |

## ZenMethods

### Imposta blocco infrangibile

Non utilizza paramaeter.  
Non restituisce nulla.  
La stessa durezza `= -1;`

```zenscript
defObj.setUnbreakable();
```

### Ottieni tickrate in un mondo specifico

Usa un oggetto [IWorld](/Vanilla/World/IWorld/) .  
Restituisce un int.

```zenscript
defObj.getTickRate(IWorld world);
```

### Controlla se il blocco può essere posizionato su un altro blocco

Usa un oggetto [IWorld](/Vanilla/World/IWorld/) , un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) e, a seconda del metodo utilizzato, anche un oggetto [IFacing](/Vanilla/World/IFacing/) .  
Restituisce un bool.

```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```

### Ottieni la scivolosità del blocco

Utilizza un [IBlockState](/Vanilla/Blocks/IBlockState/), un [IBlockAccess](/Vanilla/World/IBlockAccess/) object, un [IBlockPos](/Vanilla/World/IBlockPos/) e un oggetto opzionale [IEntity](/Vanilla/Entities/IEntity/) .  
Restituisce un float.

```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### Imposta il livello di raccolta del blocco

Usa una stringa e un int.  
Restituisce vuoto (niente).

```zenscript
defObj.setHarvestLevel(string toolclass, int level);
```

### Ottenere uno stato di blocco per metadati

Usa un int.  
Restituisce un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```