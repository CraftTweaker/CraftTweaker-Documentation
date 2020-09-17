# IEntityCreature

Una Creatura.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityCreature;`

## Estendere [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature estende [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Ciò significa che tutte le funzioni disponibili per gli oggetti [IEntityLiving](/Vanilla/Entities/IEntityLiving/) sono disponibili anche per IEntityCreature.

## Metodi

### ZenGetters/Setters

| ZenGetter            | Tipo                                   |
| -------------------- | -------------------------------------- |
| hasPath              | bool                                   |
| isWithinHomeDistanza | bool                                   |
| homePosition         | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance  | galleggiante                           |
| hasHome              | bool                                   |

### ZenMethods

#### riproduci suono vivente

Metodo non si aspetta nulla.  
Restituisce nulla.

```zenscript
entCreObj.playLivingSound();
```

#### Imposta o scollega la casa

Il primo metodo prevede un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) e un int.  
Secondo metodo non prevede nulla.  
Entrambi i metodi non restituiscono niente.

```zenscript
entAnObj.setHomePosizioneAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Verifica se una posizione si trova entro la distanza della casa

Metodo prevede un [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Restituisce un bool.

```zenscript
entAnObj.isPositionWithinHomeDistanza
```