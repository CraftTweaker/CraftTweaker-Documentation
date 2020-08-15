# EntityLivingFall

L'evento EntityLivingFall viene sparato ogni volta che un'entità è impostata per cadere.  
Può essere annullata per prevenire la caduta dell'entità.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityLivingFallEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter           | ZenSetter           | Tipo         |
| ------------------- | ------------------- | ------------ |
| disance             | disance             | galleggiante |
| dannoMoltiplicatore | dannoMoltiplicatore | galleggiante |