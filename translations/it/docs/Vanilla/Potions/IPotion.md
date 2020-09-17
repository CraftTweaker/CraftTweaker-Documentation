# IPozione

Un oggetto IPotion fa riferimento a una pozione nel gioco.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.potions.IPotion;`

## Ottenere un oggetto IPotion

È possibile ottenere un tale oggetto utilizzando il gestore [parentesi pozione](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

Attualmente, tutto quello che puoi fare con le pozioni è recuperare alcune informazioni su di esse.  
Esempio `<potion:minecraft:strength>.name`

| Zengetter     | Che cosa fa                                                         | Tipo Di Reso                                    |
| ------------- | ------------------------------------------------------------------- | ----------------------------------------------- |
| nome          | Restituisce il nome interno della pozione                           | stringa                                         |
| badEffect     | Restituisce se l'effetto pozione è cattivo                          | bool                                            |
| liquidColor   | Restituisce il colore della pozione                                 | int                                             |
| liquidColour  | Restituisce il colore della pozione                                 | int                                             |
| curativeItems | Restituisce una lista di tutti gli elementi curativi per la pozione | Lista<[IItemStack](/Vanilla/Items/IItemStack/)> |
| hasStatusIcon | Restituisce se la pozione ha un'icona di stato                      | bool                                            |
| isBeneficial  | Restituisce se la pozione è benefica                                | bool                                            |
| isInstant     | Restituisce se la pozione è istantanea                              | bool                                            |

## ZenMethods

### Rendi Effetto Pozione

Un [IPotionEffect](/Vanilla/Potions/IPotionEffect/) è una Pozione che ha una durata e un amplificatore. Puoi usare questi due metodi per ottenerne uno da un IPotion:  
Come si potrebbe immaginare, entrambi restituiscono un [IPotionEffect](/Vanilla/Potions/IPotionEffect/).

```zenscript
pot.makePotionEffect(int duration, int amplifier);
pot.makePotionEffect(int duration, int amplifier, boolean ambientEffect, boolean particlesShown);
```