# ModInfo

Contiene informazioni su una mod caricata

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Properties

| Name        | Type                                                                                                 | Ha Getter | Ha Setter |
| ----------- | ---------------------------------------------------------------------------------------------------- | --------- | --------- |
| blocks      | Elenco&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true      | false     |
| displayName | String                                                                                               | true      | false     |
| entitytypes | Elenco&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true      | false     |
| fluids      | Elenco&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | true      | false     |
| items       | Elenca&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | true      | false     |
| modid       | String                                                                                               | true      | false     |
| namespace   | String                                                                                               | true      | false     |
| version     | String                                                                                               | true      | false     |

