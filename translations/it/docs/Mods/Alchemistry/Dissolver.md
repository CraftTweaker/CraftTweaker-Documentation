# Dissolutore

## Pacchetto
`mods.alchimia.Dissolutore`

## Metodi
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - L'ingresso della ricetta.
- **boolean relativeProbability** - Calcolo di Probabilità Booleano
- **int rolls** - Possibiltà di Ruoli
- **probabilityGroups** - Un array di array con un doppio seguito da qualsiasi # di [IItemStack](/Vanilla/Items/IItemStack/)s. Il doppio si riferisce alla probabilità per il suo gruppo.

## Addizione
```zenscript
mods.alchimia.Dissolver.addRecipe(IIngredient input, boolean relativeProbabilità, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Rimozione
```zenscript
mods.alchimia.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRicette();
```

# Note
Per facilitare lo sviluppo di modificare le ricette di dissolutore esistenti c'è un comando, semplicemente /dissolver che recupererà la ricetta crafttweaker per l'oggetto che si sta tenendo e copiarlo negli appunti

Se la probabilità relativa è vera, ogni probabilità sarà calcolata in base alla somma di tutte le probabilità. Nell'esempio di cui sopra ciò significherebbe che vi è una probabilità del 33,3% di uscita di pietra ogni rotolo e un 66. % di possibilità di emettere una sabbia e un minerale di ferro ogni rotolo.

Se la probabilità relativa è falsa, allora questi numeri sono percentuali assolute cioè un 10% di possibilità di uscita di pietra e un 20% di possibilità di uscita di sabbia e minerale di ferro (a prescindere dal fatto che la pietra sia stata o meno fuoriuscita). Le probabilità di virgola mobile sono supportate, quindi 4.5 significherebbe 4,5%

