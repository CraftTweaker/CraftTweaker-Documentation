# IEventHasResult

Questa interfaccia è estesa da tutti gli Eventi che hanno un risultato che viene utilizzato dall'evento. Il risultato di un evento può essere uno dei tre valori:

- consentire
- nega
- predefinito

Il significato di questi fattori dipende dal contesto. In generale, negare un evento impedisce che si svolga un'azione specifica relativa all'evento (anche se non era garantito che si svolgesse). Allo stesso modo, permettere un evento costringerà un comportamento (anche se non era garantito). Predefinito fa sì che l'evento continui con la sua logica normale. Non tutti gli eventi usano tutti i risultati.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IEventHasResult;`

## Cosa si può fare con loro?

- `event.result` Getter, restituisce un valore stringa di `predefinito`, `deny` or `allow`
- `event.deny()` Method, imposta il risultato dell'evento a `deny`
- `event.allow()` Method, imposta il risultato dell'evento a `allow`
- `event.default()` Method, imposta il risultato dell'evento a `default`
