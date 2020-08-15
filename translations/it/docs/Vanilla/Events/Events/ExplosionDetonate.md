# EsplosionDetonate

L'evento EsplosionDetonate viene lanciato poco prima che inizi un'esplosione. Non può essere annullato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. xplosionDetonateEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
ExplosionDetonate Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter            | ZenSetter | Tipo                                           |
| -------------------- | --------- | ---------------------------------------------- |
| `Entità interessate` |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions`  |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
