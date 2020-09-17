# EntityMountEvent

L'evento EntityMount viene sparato ogni volta che un'entità viene montata o smontata da. Se annullato, l'entità non è in grado di montare (o smontare).

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityMountEvent` È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi EntityMountEvent implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter        | Tipo Di Reso                          |
| ---------------- | ------------------------------------- |
| `mondo`          | [IWorld](/Vanilla/World/IWorld/)      |
| `mountingEntity` | [IEntity](/Vanilla/Entities/IEntity/) |
| `mountedEntity`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`     | boolean                               |
| `isDismontaggio` | boolean                               |
