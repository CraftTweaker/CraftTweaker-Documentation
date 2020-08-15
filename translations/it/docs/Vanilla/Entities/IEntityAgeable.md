# IEntityAgeable

Un'entità agibile è una che cresce nel tempo, come una mucca.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityAgeable;`

## Estendere [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable estende [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Ciò significa che tutte le funzioni disponibili per [IEntities](/Vanilla/Entities/IEntityCreature/) sono disponibili anche per IEntityAgeable.

## Metodi

### ZenGetters/Setters

| ZenGetter  | ZenSetter   | Tipo |
| ---------- | ----------- | ---- |
| growingAge | growingAge  | int  |
|            | scaleForAge | bool |

### ZenMethods

#### aggiungi età

I metodi prevedono un int e il secondo metodo un bool.  
Entrambi i metodi non restituiscono nulla.  
Normalmente, il secondo metodo fa lo stesso del primo con falso come argomento forzato, che può differire per le implementazioni mod, però.

```zenscript
entAgObj.ageUp(int secondi, @Optional boolean forzato);
entAgObj.addGrowth(int secondi);
```