# IMachineSlot

Uno slot machine è uno slot che accetta oggetti o liquidi.  
Ne hai bisogno quando crei una macchina usando il [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) più tardi.

## Importazione del pacchetto

Se si desidera abbreviare le chiamate di metodo o incontrare eventuali problemi si potrebbe aver bisogno di [importare](/AdvancedFunctions/Import) il pacchetto.  
Puoi farlo usando

```zenscript
importazione extrautilities2.Tweaker.IMachineSlot;
```

## Creare un nuovo IMachineSlot

Il pacchetto IMachineSlot offre metodi per creare nuovi oggetti IMachineSlot :

```zenscript
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrautilities2.Tweaker.IMachineSlot. ewItemStackSlot(nome, colore, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

Tutti questi metodi restituiranno il nuovo Slot come oggetto IMachineSlot.

I parametri sono:

| Nome              | Tipo                                          |
| ----------------- | --------------------------------------------- |
| nome              | stringa                                       |
| isOptional        | bool                                          |
| stackCapacity     | int                                           |
| colore            | int                                           |
| backgroundTexture | stringa                                       |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Cosa fanno i parametri:

- `name`: Il nome dello slot. Utilizzato per le ricette più tardi. Assicurarsi che una macchina non abbia 2 slot con lo stesso nome.
- `isOptional`: Indica se questo slot deve essere riempito per i controlli delle ricette per cominciare.
- `stackCapacity`: Quanti oggetti/millibuckets possono adattarsi a questo slot?
- `color`: Di che colore avrà lo slot?
- `backgroundTexture`: Un percorso di texture personalizzato per lo sfondo di questo slot può essere aggiunto qui.
- `filterLiquidStack`: Se fornisci questo oggetto [ILiquidStack](/Vanilla/Liquids/ILiquidStack) , allora solo questo fluido sarà autorizzato ad entrare nello slot.

## Getters

È possibile ottenere informazioni di base da un IMachineSlot pure.  
Non aspettarti che questi ricevitori restituiscano magicamente qualcosa di diverso da quello che hai impostato quando lo creano, però.

| Nome          | Tipo    |
| ------------- | ------- |
| nome          | stringa |
| opzionale     | bool    |
| stackCapacity | int     |