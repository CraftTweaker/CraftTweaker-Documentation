# 移动性标识

移动性标识接口允许你获取[方块状态](IBlockState)中可能存在的移动性标识。

## 导入相关包
为了避免发生一些不期而遇的问题，最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.block.IMobilityFlag;` 

## ZenMethods
#### 匹配
你可以检测两个移动性标识是否相同:  
返回布尔值。
```
flagOne.matches(other);
```

## 类型
移动性标识接口有五个静态方法，均返回被给予移动性标识的物体。
```
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```
