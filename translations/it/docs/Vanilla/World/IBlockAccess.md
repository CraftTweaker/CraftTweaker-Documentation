# IBlockAccess

Gli oggetti BlockAccess sono un gruppo di blocchi accessibili tramite coordinate. Servono principalmente come superinterfaccia per [IWorld](/Vanilla/World/IWorld/), il che significa che tutte queste funzioni sono disponibili anche per tutti gli oggetti [IWorld](/Vanilla/World/IWorld/).

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.world.IBlockAccess`

## ZenMethods

### Ottieni o imposta una condizione di blocco a una posizione specifica

Usa un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) e un oggetto [IBlockState](/Vanilla/Blocks/IBlockState/) Object.  
Restituisce un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### Controlla se un blocco è un blocco d'aria.

Usa un [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Restituisce un bool.

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### Ottieni un forte potere sul lato di un blocco

Usa un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) e un oggetto [IFacing](/Vanilla/World/IFacing/) .  
Restituisce un int.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```