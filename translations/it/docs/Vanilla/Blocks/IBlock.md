# IBlock

Un oggetto IBlock è costituito da un [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), un metadata e un TileData.  
Si riferisce a un blocco nel gioco.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IBlock;`

## Chiamare un oggetto IBlock

Ci sono diversi modi in cui il furto restituisce un oggetto IBlock:

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (utilizzando la parola chiave `AS` o il metodo `asBlock()`)
* Utilizzando getBlock(x,y,z) su un [IWorld](/Vanilla/World/IWorld/).
* Utilizzando getBlock() su ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

Attenzione: Solo usando il secondo metodo è possibile che i dati `` ZenGetter restituiscano un IData non nulla!

## Zengetters

| Getter      | Che cosa fa                           | Tipo Di Reso                                          |
| ----------- | ------------------------------------- | ----------------------------------------------------- |
| definizione | Restituisce la definizione del Blocco | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta        | Restituisce i metadati del Blocco     | int                                                   |
| dati        | Restituisce la tileData del Blocco    | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks estende [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) Objects. Ciò significa che tutte le funzioni disponibili per gli oggetti IBlockPattern possono essere utilizzate anche per gli oggetti IBlock:

* Usa i `blocchi` ZenGetter
* OR'ing
* Corrispondenza usando la parola chiave `in`
* Usa il `displayName` ZenGetter