# MutableItemStack

Una pila di oggetti mutabile è uno speciale oggetto [IItemStack](/Vanilla/Items/IItemStack/) che può essere recuperato solo da [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
Ciò significa tutti i metodi di [IItemStack](/Vanilla/Items/IItemStack/)e quelli di [IIngredienti](/Vanilla/Variable_Types/IIngredient/)!

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.MutableItemStack;`

## ZenMethods

### Quantità

Il conteggio di una pila è il numero di oggetti in quella pila!

| ZenMethod                 | Tipo Parametro | Descrizione                                                 |
| ------------------------- | -------------- | ----------------------------------------------------------- |
| setCount(count)           | int            | Imposta il conteggio dello stack al conteggio `` fornito    |
| grow(count)               | int            | Aumenta il numero della pila del `conteggio` fornito        |
| restringimento(conteggio) | int            | Diminuisce il conteggio dello stack del `conteggio` fornito |

### Danno

`danno(int quantità, giocatore ICTPlayer)`

Parametri:

- int amount → La quantità di punti Danno per dare l'oggetto
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) giocatore → il giocatore/entità danneggiando l'oggetto