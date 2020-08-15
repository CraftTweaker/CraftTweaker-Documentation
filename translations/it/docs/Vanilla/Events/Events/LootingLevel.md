# LootingLevel

Questo evento viene sparato ogni volta che una creatura di entità vivente viene uccisa per calcolare il livello di saccheggio. Il valore può essere aumentato o diminuito o lasciato come è. Il valore può essere già stato modificato da altri eventi, ma il valore originale non è incluso.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ootingLevelEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi LootingLevel implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter      | ZenSetter      | Tipo                                            |
| -------------- | -------------- | ----------------------------------------------- |
| `lootingLevel` | `lootingLevel` | int                                             |
| `damageSource` |                | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
