# MCMaterial #MC材料

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.block.material.MCMaterial
#导入方式为 import crafttweaker.api.block.material.MCMaterial
```

## 已实现的接口
MCMaterial 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### blocksMovement

判断材料是否为可移动固体(不知道为啥这一行和下面有一行好像)

返回类型：布尔值

```zenscript
myMCMaterial.blocksMovement();
```

### getColor #获取颜色

获取方块的颜色索引。 输出与原版地图表示此方块的相同颜色

返回类型：MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isFlammable #是否为可燃物

判断方块是否为可燃物

返回类型：布尔值

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid #是否为液体

判断方块是否为液体

返回类型：布尔值

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque #是否为不透明方块

判断方块是否为不透明方块

返回类型：布尔值

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable #是否可替换

返回是否在放置时可以用其他方块替换该材料，例如雪，藤蔓和高草丛

返回类型：布尔值

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid #是否为固体

判断方块是否为固体 默认情况下返回为true

返回类型：布尔值

```zenscript
myMCMaterial.isSolid();
```


## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |

