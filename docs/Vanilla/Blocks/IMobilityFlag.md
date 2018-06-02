# 移动性标识（IMobilityFlag）

移动性标识接口允许你获取 [方块状态](IBlockState) 中可能存在的移动性标识。诸如南瓜西瓜之类的方块，活塞推动会直接掉落；而基岩之类的，活塞无法推动；这些属性即为移动性标示。

## 导入相关包
为了避免发生一些不期而遇的问题，最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.block.IMobilityFlag;`

## ZenMethods
#### 匹配检测
你可以通过如下内容检测两个东西的移动性标示是否相同：  
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
