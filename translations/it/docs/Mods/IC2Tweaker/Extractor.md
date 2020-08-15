# Estrattore

## Pacchetto

`import mods.ic2.Extractor;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

## Addizione

```zenscript
mods.ic2.Extractor.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Rimozione

- Se si utilizza Ic2 Experimental, per rimuovere una ricetta, basta rimuovere la riga corrispondente in `config/ic2/extractor.ini`
- Se usi Ic2 Classic, per rimuovere una ricetta, disabilita semplicemente la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.