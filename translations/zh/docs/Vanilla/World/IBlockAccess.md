# IBlockAccess

BlockAccess 对象是一个可以通过坐标进入的块组。 它们主要是连接到 [IWorld](/Vanilla/World/IWorld/)的超级接口，这意味着所有这些函数都可以提供给所有 [IWorld](/Vanilla/World/IWorld/) 对象。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.world.IBlockAccess`

## ZenMethods

### 在指定位置获取或设置方块状态

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象和 [IBlockState](/Vanilla/Blocks/IBlockState/) 对象。  
返回一个 [IBlockState](/Vanilla/Blocks/IBlockState/)。

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### 检查一个方块是否为空气方块。

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。  
返回一个布尔值。

```zenscript
accObj.isAirBlock(IBlockPos 姿势)；
```

### 在方块一侧获得强大的功率

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象和 [IFacing](/Vanilla/World/IFacing/) 对象。  
返回一个 int.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2)；
```