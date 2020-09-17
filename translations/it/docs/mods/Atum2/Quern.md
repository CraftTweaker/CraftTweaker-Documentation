# Quern

## Pacchetto
`mods.atum.Quern;`

## Aggiungere una Ricetta

`mods.atum.Quern.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotazioni` Qualsiasi numero sopra 0

Aggiunge una ricetta con l'input & output specificato, che richiede le rotazioni specificate per completare l'interrogazione

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Rimuovere una RIcetta

### Rimuovere Ricette in base al Prodotto

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Rimuovi Ricette per Uscita & Input

`mods.atum.Quern.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove la ricetta specifica, con l'output specificato & input

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Altri metodi di rimozione

Vedi [Gestori ricette](/recipes/recipe_managers) per altri modi per rimuovere le ricette Quern
