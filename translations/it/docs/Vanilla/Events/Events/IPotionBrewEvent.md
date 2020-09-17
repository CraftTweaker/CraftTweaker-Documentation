# IPotionBrewEvent

Questo evento è esteso da tutti gli eventi che coinvolgono lo stand della birra, anche se non la funzione del giocatore per estrarre gli oggetti dal supporto della birra.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IPotionBrewEvent;`

## Cosa si può fare con loro?

| ZenGetter   | ZenSetter | tipo |
| ----------- | --------- | ---- |
| `lunghezza` |           | int  |

## Metodi

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Restituisce il IItemStack contenuto nella lista di elementi all'array specificato. Restituirà un IItemStack vuoto se l'indice specificato è maggiore di `lunghezza`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Sostituisce la pila di oggetti all'indice specificato con l'elemento specificato. Se il th index è maggiore della lunghezza dell'array dell'elemento, non accadrà nulla.
