# IMaterial定义

IMaterialDefinition objects 代表游戏中的实质性定义。 如果你想要创建一个新块，需要材料定义。

# 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.BlockMaterial。`

## 调用 IMaterialDefinition 对象

您可以使用 [块材料夹处理器](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/)获取这样一个对象：  
`<blockmaterial:wood>`

## 不带参数的 ZenGetters/ZenMethods

| ZenGetter       | ZenMethod           | 返回值类型                                                          |
| --------------- | ------------------- | -------------------------------------------------------------- |
| blocksLight     | blocksLight()       | bool                                                           |
| blocksMovement  | blocksMovement()    | bool                                                           |
| canBurn         | getCanBurn()        | bool                                                           |
| mobilityFlag    | getMobilityFlag()   | [推送反应](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| liquid          | isLiquid()          | bool                                                           |
| opaque          | isOpaque()          | bool                                                           |
| replaceable     | isReplaceable()     | bool                                                           |
| solid           | isSolid()           | bool                                                           |
| toolNotRequired | isToolNotRequired() | bool                                                           |

## 比较两个块材料

您可以使用 `==` 操作员来查看两个材料定义是否相同

```zenscript
if(materialA == materialB)
    打印("success!")；
```