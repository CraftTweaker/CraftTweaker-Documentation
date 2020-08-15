# IEntityAnimal

Un Animale.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityAnimal;`

## Estendere [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal estende [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Ciò significa che tutte le funzioni disponibili per [IEntities](/Vanilla/Entities/IEntityAgeable/) sono disponibili anche per IEntityAnimal.

## Metodi

### ZenGetters/Setters

| ZenGetter | Tipo                                                    |
| --------- | ------------------------------------------------------- |
| loveCausa | [IPlayer](/Vanilla/Players/IPlayer/) (Può essere null!) |
| isInLove  | bool                                                    |

### ZenMethods

#### controllare se un prodotto può essere utilizzato per allevare l'animale

Metodo prevede un [IItemStack](/Vanilla/Items/IItemStack/).  
Restituisce un bool.

```zenscript
entAnObj.isBreedingItem(IItemStack itemStack);
```

#### Imposta o ripristina innamorati

Il primo metodo prevede un oggetto [IPlayer](/Vanilla/Players/IPlayer/) opzionale, il secondo nulla.  
Restituisce nulla.

```zenscript
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### Controlla se un altro animale può accoppiarsi con questo.

Metodo prevede un oggetto IEntityAnimal.  
Restituisce un bool.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```