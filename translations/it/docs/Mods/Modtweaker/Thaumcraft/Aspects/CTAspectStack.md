# CTAspectStack

Un CTAspectStack è un [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) combinato con una quantità che mostra quanti punti di aspetto sarà fatto dello stack.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import thaumcraft.aspect.CTAspectStack;`

## Recupero di un tale oggetto

È possibile recuperare un oggetto CTAspectStack dall'oggetto [CTAspectStack Bracket Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/):

```zenscript
val aspect = <aspect:ignis>;
```

## ZenGetters

| Nome    | Tipo                                                      |
| ------- | --------------------------------------------------------- |
| importo | int                                                       |
| interno | [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Impostazione dell'importo

```zenscript
//Fanno lo stesso, entrambi restituiscono un nuovo aspetto CTAspectStack
val = <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10);
```