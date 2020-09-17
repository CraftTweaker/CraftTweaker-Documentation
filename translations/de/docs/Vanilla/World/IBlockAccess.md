# IBlockAccess

BlockAccess-Objekte sind eine Gruppe von Blöcken, die über Koordinaten zugänglich sind. Sie dienen hauptsächlich als Schnittstelle zu [IWorld](/Vanilla/World/IWorld/), das bedeutet, dass alle diese Funktionen auch allen [IWorld](/Vanilla/World/IWorld/) Objekten zur Verfügung stehen.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`crafttweaker.world.IBlockAccess`

## ZenMethoden

### Erhalte oder setze einen Blockstatus an einer bestimmten Position

Verwende ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt und ein [IBlockState](/Vanilla/Blocks/IBlockState/) Objekt.  
Gibt [IBlockState](/Vanilla/Blocks/IBlockState/) zurück.

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### Überprüfen Sie, ob ein Block ein Luftraumblock ist.

Verwende ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.  
Gibt einen Bool zurück.

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### Erhalte starke Kraft an der Seite eines Blocks

Verwende ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt und ein [IFacing](/Vanilla/World/IFacing/) Objekt.  
Gibt einen Int zurück.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```