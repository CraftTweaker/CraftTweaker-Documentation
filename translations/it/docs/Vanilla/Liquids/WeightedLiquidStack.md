# PesoLiquidStack

Una pila liquida ponderata è come un normale [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ma ha una percentuale aggiunta.  
Normalmente li usi quando gestisci azioni basate su percentuali come gocce o uscite secondarie.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.WeightedLiquidStack;`

## Chiamare una pila di peso

È possibile ricavare un peso liquidoStack da un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) utilizzando l'operatore modulo o la funzione di peso su di esso.

```zenscript
val liquidStack = <liquid:lava>;

//entrambi creano un oggetto Liquidstack ponderato con una probabilità del 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack. ottanta (0,2);
```

## ZenGetters

| ZenGetter   | Che cosa fa                                                        | Tipo Di Reso                                   |
| ----------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| pila        | Restituisce il LiquidStack associato                               | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| possibilità | Restituisce la possibilità dello stack come decimale (ad es. 0.2)  | galleggiante                                   |
| percentuale | Restituisce la possibilità dello stack come percentuale (es. 20.0) | galleggiante                                   |