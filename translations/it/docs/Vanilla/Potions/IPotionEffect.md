# IPotionEffect

Un IPotionEffect è un [IPotion](/Vanilla/Potions/IPotion/) che ha anche una durata e un parametro amplificatore (forza).  
Puoi ottenerli da un oggetto [IPotion](/Vanilla/Potions/IPotion/).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                                | Tipo                                            |
| ---------------------------------------- | ----------------------------------------------- |
| durata                                   | int                                             |
| pozione                                  | [IPozione](/Vanilla/Potions/IPotion/)           |
| doesShowParticles                        | bool                                            |
| amplificatore                            | int                                             |
| curativeItems                            | Lista<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                               | bool                                            |
| isAmbient                                | bool                                            |
| isPotionDurationMax (anche un ZenSetter) | bool                                            |

## ZenMethods

### È un elemento un elemento curativo

Usa un [IItemStack](/Vanilla/Items/IItemStack/).  
Restituisce un bool

```zenscript
isCurativeItem(IItemStack item);
```

### Esegui effetto su un'entità

Usa un [IEntity](/Vanilla/Entities/IEntity/) o una qualsiasi delle sue sottoclassi (ad es. [IPlayer](/Vanilla/Players/IPlayer/)).  
Restituisce vuoto (niente).

```zenscript
performEffect(Entità Entezza);
```