# IRayTraceResult

Quando un giocatore sta cercando o cliccando su qualcosa spara un raggio che va fino a colpire quello che ha bisogno di colpire, o manca.  
Il risultato di un tale colpo è un oggetto IRayTraceResult.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.world.IRayTraceResult`

## ZenGetters

Tutto quello che puoi fare è recuperare informazioni da questi oggetti, ecco quali:  
Fai attenzione, dato che tutti i ricevitori che non restituiscono un bool possono restituire `null`!

| nome     | tipo                                   |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isEntità | bool                                   |
| isBlock  | bool                                   |
| entità   | [IEntity](/Vanilla/Entities/IEntity/)  |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |