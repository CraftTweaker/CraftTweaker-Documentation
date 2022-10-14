# ItemDefinition

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemDefinition;
```


## Caster

| Tipo Risultato                             | Implicito |
| ------------------------------------------ | --------- |
| [IItemStack](/vanilla/api/item/IItemStack) | sì        |

## Metodi

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


## Proprietà

| Nome            | Tipo                                       | Ha Getter | Ha Setter | Descrizione             |
| --------------- | ------------------------------------------ | --------- | --------- | ----------------------- |
| commandString   | string                                     | sì        | no        | No Description Provided |
| defaultInstance | [IItemStack](/vanilla/api/item/IItemStack) | sì        | no        | No Description Provided |

