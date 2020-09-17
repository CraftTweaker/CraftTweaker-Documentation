# ProjectileImpactThrowable

Questo evento viene sparato ogni volta che un proiettile lanciabile ha un impatto su un'entità ma prima del danno, ecc, viene calcolato. È **annullabile**e, se annullato, l'impatto non sarà elaborato.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.ProjectileImpactThrowableEvent;`

## Estendere IEntityEvent
ProjectileImpactThrowable Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters e ZenSetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter        | ZenSetter | Tipo                                                      |
| ---------------- | --------- | --------------------------------------------------------- |
| `palla di fuoco` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `tiratore`       |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
