# IMobilityFlag

IMobilityFlag 接口允许你获取一个 [IBlockState](/Vanilla/Blocks/IBlockState/) 可能的 mobilityFlags。

## 导入相关包

如果你遇到问题 ，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

## ZenMethods

#### Matches

你可以这样检查两个 IMobilityFlag 对象是否相等。  
返回一个 bool 值。

    flagOne.matches(other);
    

## 枚举

MobilityFlag 接口有 5 个静态方法，每个静态方法都会返回一个给定的 IMobilityFlag 对象。

    crafttweaker.block.MobilityFlag.normal()
    crafttweaker.block.MobilityFlag.destroy()
    crafttweaker.block.MobilityFlag.block()
    crafttweaker.block.MobilityFlag.ignore()
    crafttweaker.block.MobilityFlag.pushOnly()