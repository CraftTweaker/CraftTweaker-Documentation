# BlockItem

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.block.BlockItem;
```


## Extending ItemDefinition

BlockItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in BlockItem

## Caster

| Tipo Risultato                    | Implicito |
| --------------------------------- | --------- |
| [Block](/vanilla/api/block/Block) | no        |

## Metodi

:::group{name=getBlock}

Return Type: [Block](/vanilla/api/block/Block)

```zenscript
// BlockItem.getBlock() as Block

myBlockItem.getBlock();
```

:::


## Proprietà

| Nome  | Tipo                              | Ha Getter | Ha Setter | Descrizione             |
| ----- | --------------------------------- | --------- | --------- | ----------------------- |
| block | [Block](/vanilla/api/block/Block) | sì        | no        | No Description Provided |

