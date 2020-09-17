# IBlockAccess

Obiekty BlockAccess są grupą bloków dostępnych za pomocą współrzędnych. Służy głównie jako superinterfejs dla [IWorld](/Vanilla/World/IWorld/), co oznacza, że wszystkie te funkcje są również dostępne dla wszystkich [obiektów IWorld](/Vanilla/World/IWorld/).

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.world.IBlockAccess`

## Metody ZenMethods

### Pobierz lub ustaw stany blokowania na określonym miejscu

Użyj [IBlockPos](/Vanilla/World/IBlockPos/) Obiekt i [IBlockState](/Vanilla/Blocks/IBlockState/) obiekt.  
Zwraca [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
accObj.getBlockState(IBlockPos s);
```

### Sprawdź, czy blok jest blokiem powietrznym.

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/) .  
Zwraca bool.

```zenscript
accObj.isAirBlock(IBlockPos s);
```

### Uzyskaj silną moc po stronie bloku

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/) i obiektu [IFacing](/Vanilla/World/IFacing/) .  
Zwraca int.

```zenscript
AcObj.getStrongPower(BlockPos var1, EnumFactory var2);
```