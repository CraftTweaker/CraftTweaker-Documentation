# ProjectileImpactFireball

Questo evento viene sparato ogni volta che una palla di fuoco colpisce un'entità ma prima del danno, ecc, viene calcolato. È **annullabile**e, se annullato, l'impatto non sarà elaborato.

I valori di accelerazione dall'entità della palla di fuoco sono disponibili tramite zengetter.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.ProjectileImpactFireballEvent;`

## Estendere IEntityEvent
ProjectileImpactFireball Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters e ZenSetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter        | ZenSetter        | Tipo                                                      |
| ---------------- | ---------------- | --------------------------------------------------------- |
| `palla di fuoco` |                  | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `tiratore`       |                  | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `accelerazioneX` | `accelerazioneX` | doppia                                                    |
| `accelerazioneY` | `accelerazioneY` | doppia                                                    |
| `accelerationZ`  | `accelerationZ`  | doppia                                                    |
