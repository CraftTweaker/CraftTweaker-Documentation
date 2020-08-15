# IItemDefinition

Un oggetto IItemDefinition è il riferimento diretto a un elemento.  
È diverso da un [IItemStack](/Vanilla/Items/IItemStack/) in quanto si riferisce solo all'elemento, non include meta-informazioni o valori NBT-valori!

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.IItemDefinition;`

## Come ottenere uno

Il modo più semplice è da un [IItemStack](/Vanilla/Items/IItemStack/), ma è anche possibile ottenere un elenco di tutti i registrati IItemDefinizioni nel gioco e fare qualcosa con questo.

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## Cosa fare con esso

### ZenGetters e parameterless ZenMethods

| ZenGetter           | Che cosa fa                                                                                                                                | Tipo Di Reso                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| id                  | Restituisce l'ID articolo                                                                                                                  | stringa                                                          |
| nome                | Restituisce il nome dell'elemento non localizzato                                                                                          | stringa                                                          |
| ores                | Restituisce tutte le voci di minerale contenenti questo elemento. Può anche contenere voci di minerali che si riferiscono a una sottovoce. | `Elenco<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| proprietario        | Restituisce il nome della mod a cui questo oggetto appartiene.                                                                             | stringa                                                          |
| Istanza predefinita |                                                                                                                                            | [IItemStack](/Vanilla/Items/IItemStack/)                         |
| creativeTab         |                                                                                                                                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)              |
| creativeTabs        |                                                                                                                                            | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)            |
| canItemEditBlocks   |                                                                                                                                            | bool                                                             |
| itemEnchantability  |                                                                                                                                            | int                                                              |
| subItems            |                                                                                                                                            | List<[IItemStack](/Vanilla/Items/IItemStack/)\>                 |

### ZenSetters e altri metodi per vuoto

| ZenSetter/ZenMethod                    | Tipo Parametro                                      |
| -------------------------------------- | --------------------------------------------------- |
| creativeTab                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | nessuno                                             |
| setContainerItem(IItemDefinition item) | IItemDefinition                                     |

### ZenMethods

- `def.makeStack(meta);` Crea un [IItemStack](/Vanilla/Items/IItemStack/) con i metadati dati. Metadati è un int e OPTIONAL.
- `def.setHarvestLevel(String type, int level);` Cambia il livello di raccolta dell'oggetto al tipo e livello corrispondenti
- `def.getSubItems(creativeTab);` Restituisce una lista<[IItemStack](/Vanilla/Items/IItemStack/)\> con tutti i sottoelementi per il dato [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/).
- `def.getItemBurntime(item);` Restituisce un int che rappresenta -1 (Vanilla logic will apply), 0 (Not smeltable) o gli oggetti burntime