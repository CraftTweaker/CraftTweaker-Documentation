# Incriber

### Importieren

```zenscript
importieren mods.appliedenergistics2.Inscriber;
```

### Hinzufügen

Wenn die `Boolesche` wahr ist, werden die oberen und unteren Eingaben nicht verbraucht.

```zenscript
Incriber. ddRecipe(IItemStack Output, IItemStack Input, boolean Incribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//macht Eier zu Wither Skele Spawn Eiern, verbraucht keinen Wither Schädel
Incriber. ddRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true <minecraft:skull:1>);

//kombiniert Brot, Kokobohnen und Zucker. alle Eingaben werden verbraucht:
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, falsch, <minecraft:dye:3>, <minecraft:sugar>);
```

### Entfernen

```zenscript
Incriber.removeRecipe(IItemStack Ausgabe);

//Entfernt gedrucktes Siliziumrezept 
Incriber.removeRecipe(<appliedenergistics2:material:20>); 
```