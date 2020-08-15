# MinecartCollision

MinecartCollisionEvento viene sparato ogni volta che un minecart collide con un'entità.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. inecartCollisionEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
MinecartCollision Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter  | Tipo                                  |
| ---------- | ------------------------------------- |
| `collider` | [IEntity](/Vanilla/Entities/IEntity/) |
