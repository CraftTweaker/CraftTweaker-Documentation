# Iscrittore

### Importazione

```zenscript
import mods.Appledenergistics2.Inscriber;
```

### Aggiunta

Quando l'inscribe `` booleano è vero, gli ingressi in alto e in basso non vengono consumati.

```zenscript
Iscrittore. ddRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//trasforma le uova in uova di Wither Skele, non consuma cranio di wither
Inscriber. ddRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//combina pane, fagioli di cocco, e zucchero. tutti gli input sono consumati
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### Rimozione

```zenscript
Inscriber.removeRecipe(uscita IItemStack);

//rimuove la ricetta stampata in silicio 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```