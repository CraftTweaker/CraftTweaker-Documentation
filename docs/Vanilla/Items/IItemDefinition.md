#  物品定义

物品定义对象是对物品的直接引用。
它与[物品堆](IItemStack)对象不同，因为物品定义仅仅引用物品，而不会包含方块实体附加值和NBT标签！

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.item.IItemDefinition;`

## 如何获取
最便捷的方法是从[物品堆](IItemStack)中提取，但你也可以获取一个包含所有注册的物品定义对象列表并执行一些操作。

```
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## 使用方法

### ZenGetters 和无需参数的 ZenMethods

| ZenGetter          | 它会做什么                                                                                      | 返回类型                                             |
|--------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| id                 | 返回物品ID                                                                                  | 字符串                                                  |
| name               | 返回非本地化的物品名称                                                                    | 字符串                                                  |
| ores               | 返回此物品包含的矿物词典条目。也包含sub-item的矿物辞典条目。 | `List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)>` |
| owner              | 返回添加此物品的模组名称。                                                      | 字符串                                                  |
| defaultInstance    |                                                                                                      | [IItemStack](IItemStack)                                |
| creativeTab        |                                                                                                      | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab)      |
| creativeTabs       |                                                                                                      | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab)    |
| canItemEditBlocks  |                                                                                                      | 布尔值                                                    |
| itemEnchantability | 返回物品附魔能力                                                                                                     | 整数                                                     |
| subItems           |                                                                                                      | List<[IItemStack](IItemStack)\>                         |


### ZenSetters 和其他的 void-Methods

| ZenSetter/ZenMethod                    | 参数类型                                            |
|----------------------------------------|----------------------------------------------------|
| creativeTab                            | [创造模式标签页](/Vanilla/CreativeTabs/ICreativeTab) |
| setNoRepair()                          | 无                                               |
| setContainerItem(IItemDefinition item) | IItemDefinition（物品定义）                                    |

### ZenMethods

- `def.makeStack(meta);` Creates an [IItemStack](IItemStack) with the given metadata. Metadata is an int and OPTIONAL.
- `def.setHarvestLevel(String type, int level);` Changes the item's harvest level to the corresponding type and level
- `def.getSubItems(creativeTab);` Returns a List<[IItemStack](IItemStack)\> with all subitems for the given [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab).
- `def.getItemBurntime(item);` Returns an int representing either -1 (Vanilla logic will apply), 0 (Not smeltable) or the items burntime
