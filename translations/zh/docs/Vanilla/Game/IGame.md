# 游戏类

IGame 类用于获取一般游戏信息。 可以使用 `游戏` 访问

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.gameIGame；`

## Zengetters

| Zengetter | 它做了什么？          | 返回值类型                                                  | 用法     |
| --------- | --------------- | ------------------------------------------------------ | ------ |
| 生物群系      | 返回所有注册的生物群系作为列表 | 列表<[Ibiomes](/Vanilla/Biomes/IBiome/)>                 | `生物群系` |
| blocks    | 返回所有注册方块作为列表    | 列表<[IBlock定义](/Vanilla/Blocks/IBlockDefinition/)>      | `块`    |
| 实体        | 作为列表返回所有注册实体    | 列表<[Ientity定义](/Vanilla/Entities/IEntityDefinition/)>  | `实体`   |
| 项目        | 返回所有注册项目作为列表    | 列表<[IItemDefinition](/Vanilla/Items/IItemDefinition/)> | `项目`   |
| 液体        | 返回所有注册的液体作为列表   | 列表<[ILiquid定义](/Vanilla/Liquids/ILiquidDefinition/)>   | `液体：`  |
| 药水        | 返回所有注册药水作为列表    | 邮件列表<[IP](/Vanilla/Potions/IPotion/)>                  | `药水`   |

## 方法

### 获取实体

```zenscript
//getEntity(EntityName)

///基本上相同
val 绵羊= game.getEntity("sheep");
val 绵羊1 = <entity:minecraft:sheep>;
```

### 设置本地化

设置本地化。  
所有参数都是字符串。 `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### 本地化

返回本地化字符串  
`game.localize(key)`  
`game.localize(key, lang)`