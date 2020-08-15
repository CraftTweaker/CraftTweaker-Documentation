# Inskrybent

### Importowanie

```zenscript
importu.applied iedenergistics2.Inscriber;
```

### Dodawanie

Kiedy `inscribe` jest prawdą, dane wejściowe górne i dolne nie są zużywane.

```zenscript
Inscriber. ddRecipe(IItemStack output, IItemStack inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//zamienia jajka w jajka spawnu Wither Skele, nie zużywa czaszki Wither
Inscriber. ddRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//łączy chleb, koko fasola i cukier. wszystkie dane wejściowe są zużyte
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### Usuwanie

```zenscript
Inscriber.removeRecipe(wyjście IItemStack);

//usuwa wydrukowany przepis na krzemu 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```