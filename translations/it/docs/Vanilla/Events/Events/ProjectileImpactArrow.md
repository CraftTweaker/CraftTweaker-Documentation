# ProjectileImpactArrow

Questo evento viene sparato ogni volta che un proiettile di freccia ha un impatto su un'entità ma prima del danno, ecc, viene calcolato. È **annullabile**e, se annullato, l'impatto non sarà elaborato.

Vari valori dall'entità freccia sono disponibili attraverso zengetter, e possono essere modificati al fine di regolare i danni, forza di respingimento, stato di pickup, e determinare (o forza) un colpo critico.

## Importare la classe
Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.ProjectileImpactArrowEvent;`

## Estendere IEntityEvent
ProjectileImpactArrow Events implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters e ZenSetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter      | ZenSetter        | Tipo                                  |
| -------------- | ---------------- | ------------------------------------- |
| `freccia`      |                  | [IEntity](/Vanilla/Entities/IEntity/) |
| `tiratore`     |                  | [IEntity](/Vanilla/Entities/IEntity/) |
| `danno`        | `danno`          | doppia                                |
|                | `knockbackForza` | int (solo setter, nessun getter)      |
| `isCritico`    | `isCritico`      | boolean                               |
| `pickupStatus` |                  | Stringa                               |

## Metodi aggiuntivi

- `setPickupDisallowed()`

Impedisce alla freccia di essere presa in qualsiasi circostanza.

- `setPickupAllowed()`

Consente di prelevare la freccia da dove l'entità è atterrata.

- `setPickupCreative()`

Permette di raccogliere la freccia solo se il giocatore è in modalità creativa.
