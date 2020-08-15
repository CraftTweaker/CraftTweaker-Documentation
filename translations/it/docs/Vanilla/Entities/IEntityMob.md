# IEntityMod

A Mod.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityMob;`

## Estendere [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Ciò significa che tutte le funzioni disponibili per gli oggetti [IEntityCreature](/Vanilla/Entities/IEntityCreature/) sono disponibili anche per IEntityMob.

## Metodi

### ZenMethods

#### Controlla se il mob sta impedendo il sonno di un giocatore

Il metodo richiede un oggetto [IPlayer](/Vanilla/Players/IPlayer/) .  
Restituisce un bool.

```zenscript
entMobObj.isPreventingPlayerRest(IPlayer player);
```