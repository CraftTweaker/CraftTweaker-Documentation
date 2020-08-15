# Pressione Metallica

Il pacchetto Metal Press può essere utilizzato per aggiungere/rimuovere ricette da/per la stampante metallica Immersive.

## Chiamare Il Pacchetto

È possibile chiamare il pacchetto MetalPress utilizzando `mods.immersiveengineering.MetalPress`.

## Aggiungi Ricetta

| Richiesto | Tipo       | Tipo Di Dati                                         |
| --------- | ---------- | ---------------------------------------------------- |
| Richiesto | Output     | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Input      | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Muffa      | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Energia    | Intero                                               |
| Richiesto | Input Size | Intero                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.MetalPress.addRecipe(uscita IItemStack, ingresso IIngrediente, stampo IItemStack, energia int, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood> <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Rimuovi Da Muffa

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```