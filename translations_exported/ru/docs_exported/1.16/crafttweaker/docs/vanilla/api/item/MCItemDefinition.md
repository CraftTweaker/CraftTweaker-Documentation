# MCItemDefinition

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemDefinition;
```


## Утилиты

| Тип результата                              | Является неявным |
| ------------------------------------------- | ---------------- |
| [IItemStack](/vanilla/api/items/IItemStack) | true             |

## Методы

:::group{name=getDefaultInstance}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemDefinition.getDefaultInstance() as IItemStack

myMCItemDefinition.getDefaultInstance();
```

:::

:::group{name=getTags}

Gets the tags that contain this item.

Returns: a list of tags that contain this item.  
Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt;&gt;

```zenscript
// MCItemDefinition.getTags() as stdlib.List<MCTag<MCItemDefinition>>

myMCItemDefinition.getTags();
```

:::

:::group{name=isIn}

Checks if this item is in the given tag.

Returns: True if the tag contains this item.  
Return Type: boolean

```zenscript
// MCItemDefinition.isIn(tag as MCTag<MCItemDefinition>) as boolean

myMCItemDefinition.isIn(<tag:items:minecraft:wool>);
```

| Параметр | Тип                                                                                                        | Описание                  |
| -------- | ---------------------------------------------------------------------------------------------------------- | ------------------------- |
| tag      | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The tag to check against. |


:::


## Свойства

| Название        | Тип                                         | Имеет Getter | Имеет Setter | Описание                |
| --------------- | ------------------------------------------- | ------------ | ------------ | ----------------------- |
| commandString   | string                                      | true         | false        | No Description Provided |
| defaultInstance | [IItemStack](/vanilla/api/items/IItemStack) | true         | false        | No Description Provided |

