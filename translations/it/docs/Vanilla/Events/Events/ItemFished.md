# ItemFishedEvent

Questo evento è sparato a quando un giocatore sta per pescare un oggetto. L'annullamento dell'evento impedirà al giocatore di ricevere un oggetto, ma l'asta subirà comunque dei danni.

## Note

Ulteriori danni possono essere fatti all'asta impostando `event.additionalDamage`. Una lista di IItemStacks (che non è **modificabile**) che saranno pescati è contenuta all'interno di `event.drops`.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. temFishedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
ItemFished Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter | ZenSetter          | Tipo                                       |
| --------- | ------------------ | ------------------------------------------ |
| `danno`   |                    | int                                        |
|           | `additionalDamage` | int                                        |
| `gocce`   |                    | [IItemStack](/Vanilla/Items/IItemStack/)[] |
