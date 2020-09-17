# IEventCancelable

Questa interfaccia è estesa da tutti gli Eventi che possono essere cancellati.  
Ciò significa che puoi annullarli usando CrT o controllare se sono stati annullati.

Si noti che gli eventi che sono stati annullati prima che CrT li ricevesse non saranno controllati dai gestori.  
Inoltre, se registri più gestori e uno di essi annulla l'evento, gli altri gestori CrT lo riceveranno!

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IEventCancelable;`

## Cosa si può fare con loro?

- `event.cancel();` Method, return void (nothing).
- `event.annullato;` Getter, restituisce un bool.
- `event.canceled = true;` Setter