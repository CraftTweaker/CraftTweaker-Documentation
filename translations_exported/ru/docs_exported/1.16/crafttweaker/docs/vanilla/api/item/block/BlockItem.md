# BlockItem

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.block.BlockItem;
```


## Extending MCItemDefinition

BlockItem extends [MCItemDefinition](/vanilla/api/item/MCItemDefinition). That means all methods available in [MCItemDefinition](/vanilla/api/item/MCItemDefinition) are also available in BlockItem

## Утилиты

| Тип результата                         | Является неявным |
| -------------------------------------- | ---------------- |
| [MCBlock](/vanilla/api/block/MCBlock)? | false            |

## Методы

:::group{name=getBlock}

Return Type: [MCBlock](/vanilla/api/block/MCBlock)?

```zenscript
// BlockItem.getBlock() as MCBlock?

myBlockItem.getBlock();
```

:::


## Свойства

| Название | Тип                                    | Имеет Getter | Имеет Setter | Описание                |
| -------- | -------------------------------------- | ------------ | ------------ | ----------------------- |
| block    | [MCBlock](/vanilla/api/block/MCBlock)? | true         | false        | No Description Provided |

