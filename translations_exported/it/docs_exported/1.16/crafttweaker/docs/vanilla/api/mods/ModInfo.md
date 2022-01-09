# ModInfo

Contiene informazioni su una mod caricata

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## Proprietà

| Nome        | Tipo                                                                              | Ha Getter | Ha Setter | Descrizione                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blocks      | stdlib.List&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt;              | sì        | no        | Finds all blocks registered for that mod.                                                                                                                                                                   |
| displayName | string                                                                            | sì        | no        | Gets the display name of the mod                                                                                                                                                                            |
| entitytypes | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | sì        | no        | Finds all EntityTypes registered for that mod                                                                                                                                                               |
| fluids      | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | sì        | no        | Finds all EntityTypes registered for that mod                                                                                                                                                               |
| items       | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | sì        | no        | Gets all known items from that mod <br />   <br />  Does not take "sub items" into account! <br />  That means, that it will e.g. find an enchanted book, but without tags, and only one! |
| modid       | string                                                                            | sì        | no        | Gets the modid of the mod                                                                                                                                                                                   |
| namespace   | string                                                                            | sì        | no        | Gets the namespace of the mod                                                                                                                                                                               |
| version     | string                                                                            | sì        | no        | Gets the version of the mod                                                                                                                                                                                 |

