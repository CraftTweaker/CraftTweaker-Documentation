# IItem定义

国际投资协定定义的目的是直接参照某一项目。  
不同于 [IItemStack](/Vanilla/Items/IItemStack/) ，因为它只涉及该项目。 它不包含任何元信息或NBT值！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.item.IItemDefinitiation；`

## 如何获取一个

最简单的方法是从 [IItemStack](/Vanilla/Items/IItemStack/)， 但你也可以在游戏中获得所有注册的 IItemDefinitions 的列表并做一些事情。

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefination
val itemdefinition = <minecraft:stone>.defination;

//IGame zengetter "items" -> List!
valide itemationList = game.items;
```

## 如何处理

### ZenGetters 和无参数ZenMethods

| ZenGetter          | 功能                              | 返回值类型                                                        |
| ------------------ | ------------------------------- | ------------------------------------------------------------ |
| id                 | 返回项目 ID                         | 字符串                                                          |
| 名称                 | 返回非本地化项目名称                      | string                                                       |
| ores               | 返回包含此项目的所有矿石条目。 也可以包含提及子项的矿石条目。 | `列表<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| 所有者                | 返回此项目所属的模组名称。                   | string                                                       |
| 默认实例               |                                 | [IItemStack](/Vanilla/Items/IItemStack/)                     |
| creativeTab        |                                 | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)          |
| 创意选项卡              |                                 | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)        |
| cantemEditBlocks   |                                 | bool                                                         |
| itemEnchantability |                                 | 整数                                                           |
| subItems           |                                 | 列表<[IItemStack](/Vanilla/Items/IItemStack/)\>               |

### ZenSetters和其他无效方法

| ZenSetter/ZenMethods                   | 参数类型                                                |
| -------------------------------------- | --------------------------------------------------- |
| creativeTab                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | 无                                                   |
| setContainerItem(IItemDefinition item) | IItem定义                                             |

### ZenMethods

- `def.makeStack(元)；` 用给定的元数据创建一个 [IItemStack](/Vanilla/Items/IItemStack/) 元数据是 int 和 OPTIONAL。
- `def.setHarvestLevel(字符串类型，int level)；` 将项目的收获级别更改为相应的类型和级别
- `def.getSubItems(creatativeTab)；` 返回一个列表<[IItemStack](/Vanilla/Items/IItemStack/)\> 包含给定的所有子项 [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)
- `def.getItemBurntime(item);` 返回一个 int 代表-1(Vanilla 逻辑将适用), 0 (不冶炼) 或燃烧时间