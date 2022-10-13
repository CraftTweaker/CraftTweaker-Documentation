# MCLivingDropsEvent



The event is cancelable.

If the event is canceled, the entity does not drop anything.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDropsEvent;
```


## Extending MCLivingEvent

MCLivingDropsEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDropsEvent

## 使用方式

:::group{name=addDrop}

Adds an item to the drops.

Return Type: void

```zenscript
MCLivingDropsEvent.addDrop(stack as IItemStack) as void
```

| 参数 | 类型                                          | 描述                      |
| -- | ------------------------------------------- | ----------------------- |
| 堆叠 | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeDrop}

Removes items that match the given ingredient from drops.

Return Type: void

```zenscript
MCLivingDropsEvent.removeDrop(ingredient as IIngredient) as void
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::


## 参数

| 名称           | 类型                                                                         | 可获得  | 可设置   | 描述                                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------- | ---- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| drops        | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | true  | Returns the list of items will be dropped. The list is read-only, modifying this list does not change the drops. <br />  <br />  You should use the `drops` setter, `addDrop` or `removeDrop` method to change the drops. |
| lootingLevel | int                                                                        | true | false | No Description Provided                                                                                                                                                                                                               |
| recentlyHit  | 布尔值                                                                        | true | false | Whether the Entity doing the drop has recently been damaged.                                                                                                                                                                          |
| 来源           | [DamageSource](/vanilla/api/util/DamageSource)                             | true | false | No Description Provided                                                                                                                                                                                                               |

