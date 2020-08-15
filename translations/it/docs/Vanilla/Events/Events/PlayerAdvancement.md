# Avanzamento Giocatore

L'Evento PlayerAdvancement viene sparato ogni volta che un giocatore riceve un Avanzamento.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerAdvancementEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerAdvancement Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter | Tipo Di Reso |
| --------- | ------------ |
| `id`      | stringa      |

## Id

Oltre alla funzionalità mostrata dal PlayerEvent puoi ottenere l'ID dell'avanzamento come stringa.

Questo può essere per esempio una stringa come

```zenscript
"minecraft:story/mine_diamond"
```