# Доступ к IBlockAccess

Объекты BlockAccess представляют собой группу блоков, доступных по координатам. Они в основном служат суперинтерфейсом к [IWorld](/Vanilla/World/IWorld/), это означает, что все эти функции также доступны для всех [IWorld](/Vanilla/World/IWorld/) объектов.

## Импорт класса

Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.  
`импорт crafttweaker.world.IBlockAccess`

## ZenMethods

### Получить или установить состояние блокировки в определенном месте

Используйте [IBlockPos](/Vanilla/World/IBlockPos/) объект и объект [IBlockState](/Vanilla/Blocks/IBlockState/) .  
Возвращает [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### Проверьте, является ли блок воздушным блоком.

Используйте [IBlockPos](/Vanilla/World/IBlockPos/) объект.  
Возвращает рабочее пространство.

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### Получите сильную силу на стороне блока

Используйте объект [IBlockPos](/Vanilla/World/IBlockPos/) и объект [IFacing](/Vanilla/World/IFacing/) .  
Возвращает int.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2)
```