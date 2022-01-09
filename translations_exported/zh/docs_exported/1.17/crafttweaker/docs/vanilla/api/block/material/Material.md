# 材料

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.Material;
```


## 使用方式

:::group{name=blocksMotion}

Return Type: boolean

```zenscript
// Material.blocksMotion() as boolean

myMaterial.blocksMotion();
```

:::

:::group{name=getColor}

Return Type: [MaterialColor](/vanilla/api/block/material/MaterialColor)

```zenscript
// Material.getColor() as MaterialColor

myMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Returns: The `<blockmaterial>` Bracket Syntax for this material  
Return Type: string

```zenscript
// Material.getCommandString() as string

myMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// Material.getPushReaction() as PushReaction

myMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

Return Type: boolean

```zenscript
// Material.isFlammable() as boolean

myMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

Return Type: boolean

```zenscript
// Material.isLiquid() as boolean

myMaterial.isLiquid();
```

:::

:::group{name=isReplaceable}

Return Type: boolean

```zenscript
// Material.isReplaceable() as boolean

myMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

Return Type: boolean

```zenscript
// Material.isSolid() as boolean

myMaterial.isSolid();
```

:::

:::group{name=isSolidBlocking}

Return Type: boolean

```zenscript
// Material.isSolidBlocking() as boolean

myMaterial.isSolidBlocking();
```

:::


## 参数

| 名称                   | 类型                                                         | 可获得  | 可设置   | 描述                                        |
| -------------------- | ---------------------------------------------------------- | ---- | ----- | ----------------------------------------- |
| blocksMotion         | 布尔值                                                        | true | false | No Description Provided                   |
| color                | [MaterialColor](/vanilla/api/block/material/MaterialColor) | true | false | No Description Provided                   |
| commandString #命令字符串 | string                                                     | true | false | Gets the bracket syntax for this Material |
| isFlammable #是否为可燃物  | 布尔值                                                        | true | false | No Description Provided                   |
| isLiquid #是否为液体      | 布尔值                                                        | true | false | No Description Provided                   |
| isReplaceable #是否可替换 | 布尔值                                                        | true | false | No Description Provided                   |
| isSolid #是否为固体       | 布尔值                                                        | true | false | No Description Provided                   |
| isSolidBlocking      | 布尔值                                                        | true | false | No Description Provided                   |
| pushReaction         | [PushReaction](/vanilla/api/block/material/PushReaction)   | true | false | No Description Provided                   |

