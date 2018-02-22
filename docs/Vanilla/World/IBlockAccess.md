# 方块访问

方块访问是一组可通过坐标来访问方块的对象。 它们主要作为[IWorld](IWorld)的超级接口，这意味着所有这些功能对[IWorld](IWorld)的对象都有效。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import) 相关类以避免某些错误。  
`import crafttweaker.world.IBlockAccess`


## ZenMethods
### 在一个特定的位置获取或设置一个方块状态
使用一个 [IBlockPos](IBlockPos) 对象和一个 [IBlockState](/Vanilla/Blocks/IBlockState) 对象。  
来返回当前的 [IBlockState](/Vanilla/Blocks/IBlockState).

```
accObj.getBlockState(IBlockPos pos);
```

### 检查一个方块是否是一个空气方块。
使用一个 [IBlockPos](IBlockPos) 对象。  
来返回一个布尔值。
```
accObj.isAirBlock(IBlockPos pos);
```

### 获取方块某一面的详细信息
使用一个 [IBlockPos](IBlockPos) 对象和一个 [IFacing](IFacing) 对象。  
来返回一个整型。
```
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```
