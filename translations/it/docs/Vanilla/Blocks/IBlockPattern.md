# IBlockPattern

Un IBlockPattern è un'interfaccia che permette di combinare più blocchi in un unico oggetto.  
È paragonabile a quello che l'interfaccia [IIngrediente](/Vanilla/Variable_Types/IIngredient/) è [IItemStacks](/Vanilla/Items/IItemStack/).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IBlockPattern;`

## Chiamare un oggetto IBlockPattern

Tecnicamente, ogni volta che chiami un oggetto [IBlock](/Vanilla/Blocks/IBlock/) , chiami un oggetto IBlockPattern.  
Ma ci sono casi in cui si ottiene esplicitamente un oggetto IBlockPattern come ritorno.

* O due [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter   | Che cosa fa                                         | Tipo Di Reso                             |
| ----------- | --------------------------------------------------- | ---------------------------------------- |
| blocchi     | Elenca tutti i blocchi possibili per questo oggetto | Lista<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | Restituisce i displayNames dei blocchi di montaggio | stringa                                  |

## O

Puoi O due oggetti IBlockPattern utilizzando l'operatore OR `<unk>`

## Corrispondenza

Puoi controllare se un IBlockPatternObject contiene un altro usando la parola chiave `in` .  
Ad esempio, puoi controllare se un Blocco è in un IBlockPattern.