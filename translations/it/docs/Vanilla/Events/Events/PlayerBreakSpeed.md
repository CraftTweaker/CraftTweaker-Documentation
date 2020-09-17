# PlayerBreakSpeed

L'evento PlayerBreakSpeed viene sparato ogni volta che un giocatore cerca di rompere un blocco.  
Può essere annullato per impedire che il giocatore possa rompere quel blocco.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerBreakSpeedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerBreakSpeed implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter     | ZenSetter | Tipo                                        |
| ------------- | --------- | ------------------------------------------- |
| blockState    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| blocco        |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| originalSpeed |           | galleggiante                                |
| newSpeed      | newSpeed  | galleggiante                                |