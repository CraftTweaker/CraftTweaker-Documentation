# ModInfo

Contiene informazioni su una mod caricata

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Properties

| Name        | Type                                                                              | Ha Getter | Ha Setter |
| ----------- | --------------------------------------------------------------------------------- | --------- | --------- |
| blocks      | stdlib.List&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;             | true      | false     |
| displayName | string                                                                            | true      | false     |
| entitytypes | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true      | false     |
| fluids      | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | true      | false     |
| items       | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | true      | false     |
| modid       | string                                                                            | true      | false     |
| namespace   | string                                                                            | true      | false     |
| version     | string                                                                            | true      | false     |

