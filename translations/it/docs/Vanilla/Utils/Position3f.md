# Posizione 3f

Una posizione in Minecraft consiste di 3 valori: x, y e z.  
Un oggetto Position3f memorizza una posizione usando questi tre valori.

## Importazione del pacchetto

Potrebbe essere necessario per te [importare](/AdvancedFunctions/Import/) il pacchetto se riscontri qualche problema (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.util.Position3f;`

## Ottenere un oggetto Position3f

È possibile ottenere un tale oggetto utilizzando:

- La `posizione` ZenGetter su un [oggetto IPlayer](/Vanilla/Players/IPlayer/)
- Il costruttore Position3f sotto
- The [IBlockPos](/Vanilla/World/IBlockPos/) Position3f caster.

## Position3f constructor

È possibile creare un oggetto Position3f da soli utilizzando il seguente metodo:

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

Il primo metodo consente di creare una posizione alle coordinate date.

## ZenGetters e ZenSetters

| ZenGetter | ZenSetter | Descrizione                             |
| --------- | --------- | --------------------------------------- |
| x         | x         | Restituisce il valore x della posizione |
| y         | y         | Restituisce il valore y della posizione |
| z         | z         | Restituisce il valore z della posizione |

## Casting come IBlockPos

Puoi usare i due modi qui sotto per lanciare un oggetto Position3f su un oggetto [IBlockPos](/Vanilla/World/IBlockPos/) Oggetto: Ricorda, per il casting è necessario [importare](/AdvancedFunctions/Import/) il tipo a cui si desidera eseguire il cast a meno che non si utilizza il nome completo.

```zenscript
posThree.asBlockPos();
posThree come IBlockPos;
```