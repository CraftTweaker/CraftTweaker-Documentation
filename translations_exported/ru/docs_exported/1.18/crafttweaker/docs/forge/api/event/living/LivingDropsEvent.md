# LivingDropsEvent



The event is cancelable.

If the event is canceled, the entity does not drop anything.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingDropsEvent;
```


## Extending LivingEvent

LivingDropsEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingDropsEvent

## Методы

:::group{name=addDrop}

Adds an item to the drops.

Return Type: void

```zenscript
LivingDropsEvent.addDrop(stack as IItemStack) as void
```

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=getDrops}

Returns the list of items will be dropped. The list is read-only, modifying this list does not change the drops.

 You should use the `drops` setter, `addDrop` or `removeDrop` method to change the drops.

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// LivingDropsEvent.getDrops() as stdlib.List<IItemStack>

myLivingDropsEvent.getDrops();
```

:::

:::group{name=getLootingLevel}

Return Type: int

```zenscript
// LivingDropsEvent.getLootingLevel() as int

myLivingDropsEvent.getLootingLevel();
```

:::

:::group{name=getSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// LivingDropsEvent.getSource() as DamageSource

myLivingDropsEvent.getSource();
```

:::

:::group{name=isRecentlyHit}

Whether the Entity doing the drop has recently been damaged.

Return Type: boolean

```zenscript
// LivingDropsEvent.isRecentlyHit() as boolean

myLivingDropsEvent.isRecentlyHit();
```

:::

:::group{name=removeDrop}

Removes items that match the given ingredient from drops.

Return Type: void

```zenscript
LivingDropsEvent.removeDrop(ingredient as IIngredient) as void
```

| Параметр   | Тип                                                | Описание                |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=setDrops}

Sets which items will be dropped.

Return Type: void

```zenscript
LivingDropsEvent.setDrops(drops as stdlib.List<IItemStack>) as void
```

| Параметр | Тип                                                                       | Описание                |
| -------- | ------------------------------------------------------------------------- | ----------------------- |
| drops    | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided |


:::


## Свойства

| Название      | Тип                                                                       | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| drops         | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true         | true         | Returns the list of items will be dropped. The list is read-only, modifying this list does not change the drops. <br />  <br />  You should use the `drops` setter, `addDrop` or `removeDrop` method to change the drops. |
| isRecentlyHit | boolean                                                                   | true         | false        | Whether the Entity doing the drop has recently been damaged.                                                                                                                                                                          |
| lootingLevel  | int                                                                       | true         | false        | No Description Provided                                                                                                                                                                                                               |
| источник      | [DamageSource](/vanilla/api/world/DamageSource)                           | true         | false        | No Description Provided                                                                                                                                                                                                               |

