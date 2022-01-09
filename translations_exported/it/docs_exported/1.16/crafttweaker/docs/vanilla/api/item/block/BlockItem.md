# BlockItem

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.block.BlockItem;
```


## Extending MCItemDefinition

BlockItem extends [MCItemDefinition](/vanilla/api/item/MCItemDefinition). That means all methods available in [MCItemDefinition](/vanilla/api/item/MCItemDefinition) are also available in BlockItem

## Caster

| Tipo Risultato                         | Implicito |
| -------------------------------------- | --------- |
| [MCBlock](/vanilla/api/block/MCBlock)? | no        |

## Metodi

:::group{name=getBlock}

Return Type: [MCBlock](/vanilla/api/block/MCBlock)?

```zenscript
// BlockItem.getBlock() as MCBlock?

myBlockItem.getBlock();
```

:::


## Proprietà

| Nome  | Tipo                                   | Ha Getter | Ha Setter | Descrizione             |
| ----- | -------------------------------------- | --------- | --------- | ----------------------- |
| block | [MCBlock](/vanilla/api/block/MCBlock)? | sì        | no        | No Description Provided |

