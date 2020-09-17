# IProcessableEvent

Questa interfaccia è estesa da tutti gli eventi che possono essere elaborati.  
Questi eventi devono essere impostati come elaborati dopo che tutto ciò che sono stati fatti per è stato completato e altri gestori di eventi non dovrebbero più cambiare l'evento.  
Tenete a mente che ancora possono!

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IPlayerEvent;`

## Cosa si può fare con questi

- `event.process();` method, return void (nothing)
- `event.processed;` getter, restituisce un bool