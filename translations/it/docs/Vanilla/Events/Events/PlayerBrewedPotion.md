# Pozione PlayerBrewedion

L'evento Pozione PlayerBrewedion viene sparato ogni volta che un giocatore tira fuori una pozione dallo stand della birra.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerBrewedPotionEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerBrewedPotion Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                             |
| ----------- | ---------------------------------------- |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `pozione`   | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`      | stringa                                  |