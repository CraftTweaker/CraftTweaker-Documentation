# Inventario

L'ICraftingInventory contiene tutti i tipi di informazioni sull'inventario in cui viene eseguito un processo di creazione.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter    | Tipo di ritorno                              | Descrizione                                 |
| ------------ | -------------------------------------------- | ------------------------------------------- |
| `giocatore`  | [IPlayer](/Vanilla/Players/IPlayer/)         | il giocatore che possiede questo inventario |
| `dimensione` | int                                          | dimensione dell'inventario                  |
| `width`      | int                                          | larghezza dell'inventario                   |
| `altezza`    | int                                          | altezza dell'inventario                     |
| `stackCount` | int                                          | il numero di pile effettivamente riempite   |
| `elementi`   | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Gli oggetti presenti nel tavolo da lavoro   |
| `itemArray`  | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Gli oggetti presenti nel tavolo da lavoro   |

## ZenMethods

Sono disponibili i seguenti metodi:

`inventory.getStack(index)` restituisce il [IItemStack](/Vanilla/Items/IItemStack/) all'indice specificato o null se nessun elemento presente. L'indice è un int.  
`inventario.setStack(index, elemento)` imposta lo Stack all'indice dato all'elemento fornito. L'indice è un int, l'elemento è un IItemStack. Utilizzare null se si desidera cancellare lo stack a quel indice.

Lo stack in alto a sinistra è la posizione (0, 0), riga e colonna sono ints.  
`inventario. etStack(riga, colonna)` restituisce il [IItemStack](/Vanilla/Items/IItemStack/) alla posizione specificata o null se nessun elemento presente.  
`inventario.setStack(riga, colonna, oggetto)` imposta lo stack alla posizione indicata per l'elemento fornito. Oggetto è un IItemStack. Utilizzare null se si desidera cancellare la pila in quella posizione.