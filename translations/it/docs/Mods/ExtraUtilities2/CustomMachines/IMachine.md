# IMachine

Un IMachine è l'oggetto macchina effettivo, è possibile ottenerlo dal [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Importazione del pacchetto

Potrebbe essere necessario [importare](/AdvancedFunctions/Import) la classe.  
Di solito è necessario importare una classe solo quando si utilizza direttamente il nome, come nel casting o [Array Dichiarazioni](/AdvancedFunctions/Arrays_and_Loops) ma meglio essere sicuri che spiacenti e aggiungere l'importazione.

```zenscript
importazione extrautilities2.Tweaker.IMachine;
```

## Aggiungi Ricette

Ci sono due metodi per aggiungere ricette, uno utilizza una mappa di probabilità per gli output, uno consente l'uso di [WeightedItemStack](/Vanilla/Items/WeightedItemStack) and [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) objects.  
Entrambi i metodi utilizzano [mappe](/AdvancedFunctions/Associative_Arrays) con stringhe come indici.  
Queste stringhe saranno i nomi degli slot input/output forniti, che è il motivo per cui non si dovrebbe avere due slot con lo stesso nome in una macchina.

### Usare una mappa di probabilità

```zenscript
myMachine.addRecipe(ingressi, uscite, energia, tempo, probabilità);
```

Questo metodo utilizza i seguenti parametri:

| Nome        | Tipo                                                           |
| ----------- | -------------------------------------------------------------- |
| inputs      | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[stringa\] |
| outputs     | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[stringa\] |
| energia     | int                                                            |
| tempo       | int                                                            |
| probabilità | float[stringa\]                                               |

### Utilizzando solo la mappa degli output

È inoltre possibile utilizzare solo la mappa degli output, poi ExtUtils2 controllerà per qualsiasi [WeightedItemStack](/Vanilla/Items/WeightedItemStack) e [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) object e userà le loro possibilità.  
Ricorda, che l'aggiunta di qualcosa di diverso da questi due o [IIngrediente](/Vanilla/Variable_Types/IIngredient) come valore mappato, non avrà alcun effetto.

```zenscript
myMachine.addRecipe(ingressi, uscite, energia, tempo);
```

Questo metodo utilizza i seguenti parametri:

| Nome    | Tipo                                                           |
| ------- | -------------------------------------------------------------- |
| inputs  | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[stringa\] |
| outputs | Oggetto[stringa\]                                             |
| energia | int                                                            |
| tempo   | int                                                            |

## Rimuovi ricette

È anche possibile rimuovere le ricette. Ancora una volta, si utilizzano [mappe](/AdvancedFunctions/Associative_Arrays) con stringhe come indici.

Ci sono due metodi, uno usa [IIngrediente](/Vanilla/Variable_Types/IIngredient) come valori, e uno che accetta una mappa con [IItemStack](/Vanilla/Items/IItemStack) e una mappa con [valori ILiquidStack](/Vanilla/Liquids/ILiquidStack).

### Uso Di IIngrediente

```zenscript
myMachine.removeRecipe(input);
```

| Nome   | Tipo                                                           |
| ------ | -------------------------------------------------------------- |
| inputs | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[stringa\] |

### Utilizzo di mappe separate per elementi e liquidi

```zenscript
myMachine.removeRecipe(articoli, liquidi);
```

| Nome     | Tipo                                                    |
| -------- | ------------------------------------------------------- |
| elementi | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| liquidi  | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## Recupero informazioni macchina

È inoltre possibile recuperare alcune informazioni sulla macchina utilizzando i seguenti metodi:

- `getInputSlots()`: Restituisce tutti gli slot di input come elenco di [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Restituisce tutti gli slot di output come elenco di [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Restituisce il [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) corrispondente al nome.

## Naming della macchina

Finora, tutte le nostre macchine saranno chiamate `machine.crafttweaker:your_machine_name` dove `your_machine_name` è qualsiasi nome tu abbia usato per creare la macchina.

Se si desidera localizzare il nome macchina, utilizzare le funzionalità di CrT [IGame](/Vanilla/Game/IGame) o un file di lang personalizzato.

Quindi, se il nome della tua macchina fosse `time_machine`, dovresti chiamarlo in uno script:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Distorter Space Time (Time machine)");
```

O aggiungilo a un file di lang:

    machine.crafttweaker:time_machine=Distorter del tempo dello spazio (macchina del tempo)