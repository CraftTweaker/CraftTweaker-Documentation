# MCMaterial #MC材料

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## 方法

### blocksMovement

判断材料是否为可移动固体(不知道为啥这一行和下面有一行好像)

Return Type: boolean

```zenscript
MCMaterial.blocksMovement() as boolean
myMCMaterial.blocksMovement();
```
### getColor #获取颜色

获取方块的颜色索引。 输出与原版地图表示此方块的相同颜色

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
MCMaterial.getColor() as MCMaterialColor
myMCMaterial.getColor();
```
### isFlammable #是否为可燃物

判断方块是否为可燃物

Return Type: boolean

```zenscript
MCMaterial.isFlammable() as boolean
myMCMaterial.isFlammable();
```
### isLiquid #是否为液体

判断方块是否为液体

Return Type: boolean

```zenscript
MCMaterial.isLiquid() as boolean
myMCMaterial.isLiquid();
```
### isOpaque #是否为不透明方块

判断方块是否为不透明方块

Return Type: boolean

```zenscript
MCMaterial.isOpaque() as boolean
myMCMaterial.isOpaque();
```
### isReplaceable #是否可替换

返回是否在放置时可以用其他方块替换该材料，例如雪，藤蔓和高草丛

Return Type: boolean

```zenscript
MCMaterial.isReplaceable() as boolean
myMCMaterial.isReplaceable();
```
### isSolid #是否为固体

判断方块是否为固体 默认情况下返回为true

Return Type: boolean

```zenscript
MCMaterial.isSolid() as boolean
myMCMaterial.isSolid();
```

## 参数

| 名称            | 类型                                                                     | 可获得  | 可设置   |
| ------------- | ---------------------------------------------------------------------- | ---- | ----- |
| color         | [MCMaterialColor #MC材料颜色](/vanilla/api/block/material/MCMaterialColor) | true | false |
| commandString | string                                                                 | true | false |

