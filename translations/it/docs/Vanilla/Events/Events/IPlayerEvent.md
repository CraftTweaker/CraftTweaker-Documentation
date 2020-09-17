# IPlayerEvent

Questa interfaccia è estesa da tutti gli eventi che hanno un giocatore.  
Ciò significa che puoi usare il getter qui sotto per accedere al giocatore.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IPlayerEvent;`

## Estendere ILivingEvent

Questa interfaccia estende [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), il che significa che tutte le funzionalità che ILivingEvent offre sono presenti anche in IPlayerEvent

## ZenGetters

| nome      | tipo                                 |
| --------- | ------------------------------------ |
| giocatore | [IPlayer](/Vanilla/Players/IPlayer/) |