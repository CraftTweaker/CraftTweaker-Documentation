# ItemBuilder

The item builder is to... build items (surprise!) <p> It allows you to set various properties that will change how the item behaves and what it can do. You can also use [this](.)#withType to switch to a more specialized builder, if there exist any. <p> To tell CoT that you want the item to appear in-game you need to call [this](.)#build(String) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.ItemBuilder;
```


## 已实现的接口
ItemBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in ItemBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
## Constructor #构造函数

Creates a new ItemBuilder. Remember that this will _not_ create a new block in the game, you need to call [this](.)#build(String) for that.
```zenscript
new ItemBuilder() as ItemBuilder
new ItemBuilder();
```

## 方法

### withItemGroup

Allows you to set the item group that this item will appear in. By default, items will land in `misc`

Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withItemGroup(itemGroup as MCItemGroup) as ItemBuilder
new ItemBuilder().withItemGroup(<itemGroup:misc>);
```
| 参数        | 类型                                                       | 描述                                        |
| --------- | -------------------------------------------------------- | ----------------------------------------- |
| itemGroup | [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The item group this item should appear in |

### withMaxDamage

Allows you to set the maximum damage for this item.<br/> Be warned that this cannot be used in combination with [this](.)#withMaxStackSize!

Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withMaxDamage(maxDamage as int) as ItemBuilder
new ItemBuilder().withMaxDamage(250);
```
| 参数        | 类型  | 描述                     |
| --------- | --- | ---------------------- |
| maxDamage | int | The maximum stack size |

### withMaxStackSize

Allows you to set the maximum stack size for this item.<br/> Be warned that this cannot be used in combination with [this](.)#withMaxDamage!

Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withMaxStackSize(maxStackSize as int) as ItemBuilder
new ItemBuilder().withMaxStackSize(16);
```
| 参数           | 类型  | 描述                     |
| ------------ | --- | ---------------------- |
| maxStackSize | int | The maximum stack size |

### withNoRepair

Sets that this item may not be repaired in an anvil

Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withNoRepair() as ItemBuilder
new ItemBuilder().withNoRepair();
```
### withRarity

Allows you to set the item's rarity

Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withRarity(rarity as string) as ItemBuilder
new ItemBuilder().withRarity("EPIC");
```
| 参数     | 类型     | 描述         |
| ------ | ------ | ---------- |
| rarity | string | The rarity |

### withType

Sets the specific type of this item. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method.

Return Type: T

```zenscript
ItemBuilder.withType<T : ItemTypeBuilder>() as T
```
| 参数 | 类型                                                               | 描述                                       |
| -- | ---------------------------------------------------------------- | ---------------------------------------- |
| T  | [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) | The Type of item that this should become |


