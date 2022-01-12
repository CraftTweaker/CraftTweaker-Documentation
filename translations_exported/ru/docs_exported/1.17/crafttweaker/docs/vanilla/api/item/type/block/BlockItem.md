# BlockItem

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.block.BlockItem;
```


## Extending ItemDefinition

BlockItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in BlockItem

## Утилиты

| Тип результата                    | Является неявным |
| --------------------------------- | ---------------- |
| [Block](/vanilla/api/block/Block) | false            |

## Методы

:::group{name=getBlock}

Return Type: [Block](/vanilla/api/block/Block)

```zenscript
// BlockItem.getBlock() as Block

myBlockItem.getBlock();
```

:::


## Свойства

| Название | Тип                               | Имеет Getter | Имеет Setter | Описание                |
| -------- | --------------------------------- | ------------ | ------------ | ----------------------- |
| block    | [Block](/vanilla/api/block/Block) | true         | false        | No Description Provided |

