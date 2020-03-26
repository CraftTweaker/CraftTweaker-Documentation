# MC材料

此类由具有mod-id的mod添加 `crafttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.block.material.MCMaterial
#导入方式为 import crafttweaker.api.block.material.MCMaterial
```

## 使用方式
### blocksMovement #是否可移动

判断材料是否为可移动固体(不知道为啥这一行和下面有一行好像)

返回为布尔值

```zenscript
myMCMaterial.blocksMovement();
```

### getColor #获取颜色

获取方块的颜色索引。 输出与原版地图表示此方块的相同颜色

返回值 [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isFlammable #是否为可燃物

判断方块是否为可燃物

返回为布尔值

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid #是否为液体

判断方块是否为液体

返回为布尔值

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque #是否为不透明方块

判断方块是否为不透明方块

返回为布尔值

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable #是否可替换

返回是否在放置时可以用其他方块替换该材料，例如雪，藤蔓和高草丛

返回为布尔值

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Returns true if the block is a considered solid. This is true by default.

Returns boolean

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Returns true if the material can be harvested without a tool (or with the wrong tool)

Returns boolean

```zenscript
myMCMaterial.isToolNotRequired();
```


