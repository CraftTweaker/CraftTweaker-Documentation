# EntityTravelToDimension

L'evento EntityTravelToDimension viene lanciato ogni volta che un'entità sta per viaggiare in un'altra dimensione. Se annullato, l’entità è impedita di viaggiare.

## Note

`event.dimension` contiene la dimensione a cui l'entità sta per viaggiare.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityTravelToDimensionEvent` È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
EntityTravelToDimension Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter    | Tipo Di Reso |
| ------------ | ------------ |
| `dimensione` | int          |
