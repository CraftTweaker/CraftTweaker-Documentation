# PlayerSleepInBed

L'evento PlayerSleepInBed è sparato ogni volta che un giocatore dorme. Questo evento può controllare se il giocatore è in grado di dormire impostando `risultato`.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerSleepInBedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerSleepInBed Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## Tipi Di Risultati

* NOT_POSSIBLE_HERE 
* NOT_POSSIBLE_NOW 
* SICUREZZA 
* OK 
* OTHER_PROBLEM 
* FAR_AWAY 

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                            |
| ----------- | --------------------------------------- |
| `x`         | int                                     |
| `y`         | int                                     |
| `z`         | int                                     |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)    |
| `risultato` | stringa (i valori possibili sono sopra) |

## ZenSetters

Nell'evento è possibile impostare quanto segue:

| ZenSetter   | Tipo Parametro                          |
| ----------- | --------------------------------------- |
| `risultato` | stringa (i valori possibili sono sopra) |