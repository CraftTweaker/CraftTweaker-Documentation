# ModInfo

Contiene informazioni su una mod caricata

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Proprietà

| Nome        | Tipo                                                                                                 | Ha Getter | Ha Setter |
| ----------- | ---------------------------------------------------------------------------------------------------- | --------- | --------- |
| blocchi     | Elenco&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | vero      | falso     |
| displayName | Stringa                                                                                              | vero      | falso     |
| entitytypes | Elenco&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | vero      | falso     |
| fluidi      | Elenco&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | vero      | falso     |
| elementi    | Elenca&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | vero      | falso     |
| modid       | Stringa                                                                                              | vero      | falso     |
| namespace   | Stringa                                                                                              | vero      | falso     |
| versione    | Stringa                                                                                              | vero      | falso     |

