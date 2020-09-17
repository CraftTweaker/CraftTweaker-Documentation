# IBlockProperties

BlockProperties sono ciò che rende un blocco distintivo da altri blocchi. Serve principalmente come superinterfaccia per [IBlockState](/Vanilla/Blocks/IBlockState/), il che significa che tutte queste funzioni sono disponibili anche per tutti gli oggetti [IBlockState](/Vanilla/Blocks/IBlockState/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IBlockProperties;`

| ZenGetter                 | Tipo Di Reso                             | Descrizione                                                                    |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| canProvidePower           | bool                                     | Restituisce se il blocco referito può fornire Redstone Power                   |
| mobilityFlag              | stringa                                  | Restituisce il [flag di mobilità](/Vanilla/Blocks/IMobilityFlag/) come stringa |
| materiale                 | [IMateriale](/Vanilla/Blocks/IMaterial/) | Restituisce il materiale [del blocco](/Vanilla/Blocks/IMaterial/)              |
| causeSoffocamento         | bool                                     | Restituisce se il blocco può soffocarti.                                       |
| hasCustomBreakingProgress | bool                                     |                                                                                |
| blockNormalCube           | bool                                     |                                                                                |
| fullBlock                 | bool                                     |                                                                                |
| fullCube                  | bool                                     |                                                                                |
| normalCube                | bool                                     |                                                                                |
| opaqueCube                | bool                                     |                                                                                |
| traslucido                | bool                                     |                                                                                |
| usoVicinanzaLuminosità    | bool                                     |                                                                                |

## ZenMethods

### isSostituibile

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parametri:

- [mondo IWorld](/Vanilla/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La posizione del blocco

Restituisce un booleano che sa se il blocco può essere sostituito o meno.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parametri:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) mondo → Il mondo da controllare
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La posizione del blocco

Restituisce un int che rappresenta il valore di luce corrente nella posizione indicata.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
Parametri:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) mondo → Il mondo da controllare
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La posizione del blocco
- [Faccia](/Vanilla/World/IFacing/) rivolta verso → Il lato da controllare Restituisce un int che rappresenta l'attuale potere di redstone su questo lato.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parametri:

- [mondo IWorld](/Vanilla/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La posizione del blocco

Restituisce un int che rappresenta il tipo di override del comparatore redstone del blocco.

### Verifica se un'entità può generare sul blocco

Usa un [IEntity](/Vanilla/Entities/IEntity/).  
Restituisce un bool.

```zenscript
blockProperties.canEntitySpawn(IEntity entity);
```

### Ottieni la Fortezza Blocco attuale

Usa un [IBlockAccess](/Vanilla/World/IBlockAccess/) e un [IBlockPos](/Vanilla/World/IBlockPos/).  
Restituisce un nuovo oggetto IBlockProperties.

```zenscript
blockProperties.getActualState(IBlockAccess world, IBlockPos pos);
```

### Ottieni la durezza di un blocco

Usa [IWorld](/Vanilla/World/IWorld/) e un [IBlockPos](/Vanilla/World/IBlockPos/).  
Restituisce un float.

```zenscript
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### Ottieni una leggera opacy di un blocco

Usa [IWorld](/Vanilla/World/IWorld/) e un [IBlockPos](/Vanilla/World/IBlockPos/).  
Restituisce un int.

```zenscript
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### Ottieni Imbracatura Blocco Relativa di un giocatore

Usa un [IPlayer](/Vanilla/Players/IPlayer/), un [IWorld](/Vanilla/World/IWorld/) e un [IBlockPos](/Vanilla/World/IBlockPos/).  
Restituisce un galleggiante.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### Controlla se un lato del blocco è solido

Usa un [IBlockAccess](/Vanilla/World/IBlockAccess/), un [IBlockPos](/Vanilla/World/IBlockPos/) e un [IFacing](/Vanilla/World/IFacing/) object.  
Restituisce un bool.

```zenscript
blockProperties.isSideSolid(IBlockAccess world, IBlockPos pos, IFacing facing);
```