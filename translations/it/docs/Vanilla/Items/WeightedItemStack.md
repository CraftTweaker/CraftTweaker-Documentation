# PesoElemento Pila

Una pila di oggetti pesata è come una normale [IItemStack](/Vanilla/Items/IItemStack/) ma ha una percentuale aggiunta.  
Normalmente li usi quando gestisci azioni basate su percentuali come gocce o uscite secondarie.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.WeightedItemStack;`

## Chiamando un pesedItemStack

È possibile ricavare un weightedItemStack da un [IItemStack](/Vanilla/Items/IItemStack/) utilizzando l'operatore modulo o la funzione di peso su di esso.

```zenscript
val itemStack = <minecraft:dirt>;

//entrambi creano un oggetto ponderatoItemstack con la possibilità di 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack. ottanta (0,2);
```

## ZenGetters

| ZenGetter   | Che cosa fa                                                        | Tipo Di Reso                             |
| ----------- | ------------------------------------------------------------------ | ---------------------------------------- |
| pila        | Restituisce l'oggetto associato Stack                              | [IItemStack](/Vanilla/Items/IItemStack/) |
| possibilità | Restituisce la possibilità dello stack come decimale (ad es. 0.2)  | galleggiante                             |
| percentuale | Restituisce la possibilità dello stack come percentuale (es. 20.0) | galleggiante                             |