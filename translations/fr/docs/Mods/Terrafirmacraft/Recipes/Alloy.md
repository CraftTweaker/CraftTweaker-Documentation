# Alloy

## Paquet
```zenscript
Importer mods.terrafirmacraft.Alliage;
importer mods.terrafirmacraft.Constructeur de recettes d'alliage;
```

## Ajouter
- Pour manipuler les recettes d'alliage, un constructeur de recettes est fourni
```zenscript
Constructeur AlloyRecipeBuilder = Alloy.addAlloy.addAlloy(String metal);
builder.addMetal(String input, double min, double max);
builder.build();
```

## Retirer

```zenscript
Alloy.removeAlloy(String métal);
```

## Exemple de scripts
- Veuillez vous référer à [Métal](/Mods/Terrafirmacraft/Metal) pour une référence complète sur les métaux TFC.
```zenscript
Alloy.addAlloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```