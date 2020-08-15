# CropGrowPreEvent

L'evento CropGrowPre viene sparato quando le colture tentano di crescere. Ha un **risultato** che determina se il comportamento predefinito si verifica o meno:

- **allow**: the crop is forced to grow.
- **deny**: la coltura è impedita di crescere.
- **default**: l'attacco utilizza comportamento Vanilla predefinito.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ropGrowPreEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi CropGrowPost implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter            | ZenSetter | Tipo                                        |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
