# Macchina Di Scatola

## Pacchetto

```zenscript
import mods.ic2.CanningMachine;
```

### Elenco degli effetti id
* 1: Fame (Carne di Carne) (80% possibilità)
* 2: Veleno (Occhio Di Spider)
* 3: Fame (Raw Chicken) (30% possibilità)
* 4: Mela D'Oro
* 5: Mela Di Notch
* 6: Corus Fruit

## Metodi

### Registra Oggetti Effetto (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... input);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... ingressi** Gli input che ottengono il cibo possono avere effetto.
- **int id** L'effectID che vuoi applicare agli elementi specificati. Gli id con effetto valido sono i seguenti:

### Elimina ID effetto (int id, boolean deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** L'effectID che si desidera rimuovere dal riempito può. Fare riferimento a sopra per gli id di effetto validi.
- **boolean deleteItems** Se rimuovere gli elementi con quell'effetto anche dalle lattine archiviate. Attualmente questo booleano potrebbe non funzionare.

### Registrare il valore del carburante (int fuelValue, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Precedentemente aveva un valore di 2548.
```

- **int fuelValue** Quanto carburante vale l'articolo specificato.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'elemento per registrare il valore del carburante per. Può anche essere oggetti con valori esistenti, nel qual caso il valore precedentemente specificato verrà sovrascritto. Nota: deve essere un itemstack, nessun editto permesso.

### Registra Moltiplicatore di carburante (carburante galleggianteMoltiplicatore, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float fuelMoltiplicatore** Quale percentuale è aumentata in precedenza il valore in ingresso. per esempio 1 = 100%, 0.5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'elemento per cui registrare quel moltiplicatore di carburante. Può anche essere elementi con moltiplicatori esistenti, nel qual caso il moltiplicatore precedentemente specificato sarà sovrascritto. Nota: deve essere un itemstack, nessun editto permesso.

### Elimina il carburante oggetto (IItemstack input)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack input);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) input** L'elemento da rimuovere dall'essere un ingresso per il carburante può.

Vedi [qui](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) per informazioni su come funzionano le lattine di carburante.

### Aggiungi ricetta in scatola (uscita IItemStack, filler IIngrediente, contenitore IItemStack)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(IItemStack output, IIngredient filler, IItemStack container);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il prodotto
- **[IItemStack](/Vanilla/Items/IItemStack/) contenitore** Il itemstack da "riempire"
- **[filler IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'ingrediente con cui viene riempito nel contenitore

