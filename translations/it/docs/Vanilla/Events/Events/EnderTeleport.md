# EnderTeleport

L'evento EnderTeleport viene sparato ogni volta che un enderman o shulker teletrasporta.  
È anche sparato ogni volta che un giocatore teletrasporta utilizzando un enderpearl (è possibile che anche altre mod sparino questo evento.)

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. nderTeleportEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

LivingEntityUseItem Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setters pure:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter       | ZenSetter       | Tipo         |
| --------------- | --------------- | ------------ |
| `targetX`       | `targetX`       | doppia       |
| `targetY`       | `targetY`       | doppia       |
| `targetZ`       | `targetZ`       | doppia       |
| `attacco Danno` | `attacco Danno` | galleggiante |