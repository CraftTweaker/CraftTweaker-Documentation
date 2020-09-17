# CropGrowPostEvent

The CropGrowPost Event is fired once a crop block has **successfully** grown. Non può essere annullata e serve semplicemente come notifica della crescita delle colture.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ropGrowPostEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi CropGrowPost implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter            | ZenSetter | Tipo                                        |
| -------------------- | --------- | ------------------------------------------- |
| `originalBlockState` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `originalBlock`      |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
