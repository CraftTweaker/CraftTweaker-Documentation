# MCMaterial #MC材料

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## 方法

:::group{name=blocksMovement}

判断材料是否为可移动固体(不知道为啥这一行和下面有一行好像)

Return Type: boolean

```zenscript
// MCMaterial.blocksMovement() as boolean

myMCMaterial.blocksMovement();
```

:::

:::group{name=getColor}

获取方块的颜色索引。 输出与原版地图表示此方块的相同颜色

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
// MCMaterial.getColor() as MCMaterialColor

myMCMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Returns: The `<blockmaterial>` Bracket Syntax for this material  
Return Type: string

```zenscript
// MCMaterial.getCommandString() as string

myMCMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).

Returns: The [PushReaction](/vanilla/api/block/material/PushReaction) of this Material.  
Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// MCMaterial.getPushReaction() as PushReaction

myMCMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

判断方块是否为可燃物

Return Type: boolean

```zenscript
// MCMaterial.isFlammable() as boolean

myMCMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

判断方块是否为液体

Return Type: boolean

```zenscript
// MCMaterial.isLiquid() as boolean

myMCMaterial.isLiquid();
```

:::

:::group{name=isOpaque}

判断方块是否为不透明方块

Return Type: boolean

```zenscript
// MCMaterial.isOpaque() as boolean

myMCMaterial.isOpaque();
```

:::

:::group{name=isReplaceable}

返回是否在放置时可以用其他方块替换该材料，例如雪，藤蔓和高草丛

Return Type: boolean

```zenscript
// MCMaterial.isReplaceable() as boolean

myMCMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

判断方块是否为固体 默认情况下返回为true

Return Type: boolean

```zenscript
// MCMaterial.isSolid() as boolean

myMCMaterial.isSolid();
```

:::


## 参数

| 名称             | 类型                                                                     | 可获得  | 可设置   | 描述                                                                             |
| -------------- | ---------------------------------------------------------------------- | ---- | ----- | ------------------------------------------------------------------------------ |
| blocksMovement | boolean                                                                | true | false | 判断材料是否为可移动固体(不知道为啥这一行和下面有一行好像)                                                 |
| color          | [MCMaterialColor #MC材料颜色](/vanilla/api/block/material/MCMaterialColor) | true | false | 获取方块的颜色索引。 输出与原版地图表示此方块的相同颜色                                                   |
| commandString  | string                                                                 | true | false | Gets the bracket syntax for this Material                                      |
| flammable      | boolean                                                                | true | false | 判断方块是否为可燃物                                                                     |
| liquid         | boolean                                                                | true | false | 判断方块是否为液体                                                                      |
| opaque         | boolean                                                                | true | false | 判断方块是否为不透明方块                                                                   |
| pushReaction   | [PushReaction](/vanilla/api/block/material/PushReaction)               | true | false | Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction). |
| replaceable    | boolean                                                                | true | false | 返回是否在放置时可以用其他方块替换该材料，例如雪，藤蔓和高草丛                                                |
| solid          | boolean                                                                | true | false | 判断方块是否为固体 默认情况下返回为true                                                         |

