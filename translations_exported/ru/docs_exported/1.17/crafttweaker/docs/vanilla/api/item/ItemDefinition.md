# ItemDefinition

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemDefinition;
```


## Утилиты

| Тип результата                             | Является неявным |
| ------------------------------------------ | ---------------- |
| [IItemStack](/vanilla/api/item/IItemStack) | true             |

## Методы

:::group{name=getCommandString}

Return Type: string

```zenscript
// ItemDefinition.getCommandString() as string

myItemDefinition.getCommandString();
```

:::

:::group{name=getDefaultInstance}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemDefinition.getDefaultInstance() as IItemStack

myItemDefinition.getDefaultInstance();
```

:::


## Свойства

| Название        | Тип                                        | Имеет Getter | Имеет Setter | Описание                |
| --------------- | ------------------------------------------ | ------------ | ------------ | ----------------------- |
| commandString   | string                                     | true         | false        | No Description Provided |
| defaultInstance | [IItemStack](/vanilla/api/item/IItemStack) | true         | false        | No Description Provided |

