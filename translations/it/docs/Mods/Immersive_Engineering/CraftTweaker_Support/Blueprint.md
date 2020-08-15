# Progetto

Il pacchetto di creazione di progetti può essere utilizzato per aggiungere/rimuovere ricette da/per la creazione di progetti di ingegneria immersiva.

## PSA

La stringa [Category](/Mods/Immersive_Engineering/Variables/Categories/) è abbastanza speciale. Per qualsiasi stringa inserita che non ha già una Categoria stabilita, creerà una nuova Categoria e quindi un nuovo Blueprint. Ciò significa che è possibile aggiungere una categoria di progetti chiamata "Pancake Banana" che fornisce "Ricette alimentari". Dopo la prima voce trovata, genererà tutte le ricette aggiuntive per quella Stringa di Categoria sotto la categoria generata.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto Blueprint utilizzando `mods.immersiveengineering.Blueprint`.

## Aggiungi Ricetta

| Richiesto | Tipo      | Tipo Di Dati                                                           |
| --------- | --------- | ---------------------------------------------------------------------- |
| Richiesto | Categoria | Stringa [Categoria](/Mods/Immersive_Engineering/Variables/Categories/) |
| Richiesto | Output    | [IItemstack](/Vanilla/Items/IItemStack/)                               |
| Richiesto | Inputs    | [IIngrediente](/Vanilla/Variable_Types/IIngredient/)                   |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Blueprint.addRecipe(categoria String, IItemStack output, IIngredient[] inputs);

//Usando una categoria esistente String
mods.immersiveengineering.Blueprint. ddRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Usando una nuova Stringa di categoria (Questo genera un nuovo elemento di Blueprint)
mods. mmersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio:

```zenscript
//Esempio:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```