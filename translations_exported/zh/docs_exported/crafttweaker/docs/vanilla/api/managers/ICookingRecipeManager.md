# ICookingRecipeManager

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.registries.ICookingRecipeManager;
```


## 已实现的接口
ICookingRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in ICookingRecipeManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## 方法

### addRecipe

添加基于给定参数的合成表

Return Type: void

```zenscript
ICookingRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void
furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:minecraft:wool>, 1.0, 0);
```
| 参数             | 类型                                                | 描述         |
| -------------- | ------------------------------------------------- | ---------- |
| name           | string                                            | 新的合成表名称    |
| output（输出）     | [IItemStack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id |
| input（输入）      | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 合成表的输入成分   |
| xp             | float                                             | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                               | 烧制需要多长时间   |

### 删除合成表

移除基于输出和输入的合成表

Return Type: void

```zenscript
ICookingRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```
| 参数         | 类型                                                | 描述          |
| ---------- | ------------------------------------------------- | ----------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id. |
| input（输入）  | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 要移除的配方的成分。  |


