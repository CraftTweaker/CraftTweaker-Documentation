# Ruota Da Filatura

## Pacchetto
`mods.atum.SpinningWheel;`

## Aggiungere una Ricetta

`mods.atum.SpinningWheel.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotazioni` Qualsiasi numero sopra 0

Aggiunge una ricetta con l'input & output specificato, che richiede le rotazioni specificate per completare la ricetta

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Rimuovere una RIcetta

### Rimuovere Ricette in base al Prodotto

`mods.atum.SpinningWheel.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Rimuovi Ricette per Uscita & Input

`mods.atum.SpinningWheel.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove la ricetta specifica, con l'output specificato & input

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Altri metodi di rimozione

Vedi [Gestori ricette](/recipes/recipe_managers) per altri modi per rimuovere le ricette della ruota rotante
