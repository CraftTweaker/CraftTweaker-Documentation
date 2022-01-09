# IMobilityFlag

IMobilityFlag 接口允许你获取一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 可能的 mobilityFlags。

## 导入相关包
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IMobilityFlag;`

## ZenMethods
#### Matches
You can check if two IMobilityFlag objects are equal:  
Returns a bool.
```zenscript
flagOne.matches(other);
```

## Enumerations
MobilityFlag 接口有 5 个静态方法，每个静态方法都会返回一个给定的 IMobilityFlag 对象。
```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```