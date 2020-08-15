# Alloy

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Stół;
importuj mods.terrafirmacraft.AlloyRecipeBuilder;
```

## Dodanie
- Do manipulowania recepturami na stopie jest dostarczony konstruktor receptury
```zenscript
Budowniczy AlloyRecipeBuilder = Alloy.addAlloy(String metal);
builder.addMetal(String inputt, podwójna min, podwójna maks.);
builder.build();
```

## Usuwanie

```zenscript
stop.removeAlloy(string metal);
```

## Przykładowe skrypty
- Proszę zapoznać się z [metalem](/Mods/Terrafirmacraft/Metal) w celu uzyskania pełnego odniesienia na temat metali TFC.
```zenscript
Alloy.addAlloy("BRONZE").addMetal ("COPPER", 0.88, 0.92).addMetal ("TIN", 0.08, 0.12).build();
Alloy"addAlloy("BISMUTH_BRONZE").addMetal ("COPPER", 0.5, 0.65).addMetal ("BISMUTH", 0.1, 0.2).addMetal ("zinc", 0.2, 0.3).build();
```