# Alloy

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Erlauben;
importiert mods.terrafirmacraft.AlloyRecipeBuilder;
```

## Addition
- Zur Manipulation von Legierungsrezepten wird ein Rezeptbauer bereitgestellt
```zenscript
AlloyRecipeBuilder Builder = Alloy.addAlloy(String Metal);
builder.addMetal(String Input, double min, double max);
builder.build();
```

## Entfernen

```zenscript
Alloy.removeAlloy(String-Metall);
```

## Beispielskripte
- Eine vollständige Referenz auf TFC Metallen finden Sie unter [Metal](/Mods/Terrafirmacraft/Metal).
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```