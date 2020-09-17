# Kiln

Il Kiln è un multiblock utilizzato per la lavorazione rapida dei blocchi edilizi, che può essere acquisito attraverso la fusione di qualcosa in un forno.

## Pacchetto
`mods.atum.Kiln;`

## Blacklist

Le ricette Kiln sono basate sulle ricette di forni vanigliati, smistando tutto oltre ai blocchi di costruzione. La blacklist è un modo per ridurre ulteriormente le ricette che vengono afferrate dalla vaniglia Fornace.

`mods.atum.Kiln.blacklist(id);`

- `id` Un ID namespaced per il blocco di ingresso/elemento che dovrebbe essere inserito nella blacklist.

Rimuove le ricette con l'oggetto/blocco specificato dalle ricette che il Kiln tira dalla fornace vanigliata

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Aggiungere una Ricetta

`mods.atum.Kiln.addRecipe(input, output, experience, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `experience` Numero galleggiante
- `cookTime` Numero intero (Se lasciato vuoto, sarà predefinito 75)

Aggiunge una ricetta con l'input specificato, l'uscita, l'esperienza & il tempo di cuoco

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Rimuovere una RIcetta

I metodi di rimozione funzionano solo per ricette aggiunte specificamente per il Kiln di Atum (Or altre mods) Per impostazione predefinita in Atum questa sarà solo la ricetta del blocco di piastrelle di ceramica bianco Marl to . Se vuoi rimuovere qualcos'altro, probabilmente stai cercando la blacklist (Documentazione sopra)

### Rimuovere Ricette in base al Prodotto

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Rimuovi Ricette per Uscita & Input

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove la ricetta specifica, con l'output specificato & input

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Altri metodi di rimozione

Vedi [Gestori ricette](/recipes/recipe_managers) per altri modi per rimuovere le ricette della ruota rotante
