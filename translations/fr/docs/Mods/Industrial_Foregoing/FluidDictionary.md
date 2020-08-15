# Dictionnaire des fluides

### Importation en cours

```zenscript
Importer mods.industrialforegoing.FluidDictionary;
```

### Ajout en cours

Il a besoin du nom du fluide comme entrée, du nom du fluide comme sortie et d'un taux de conversion. Le taux est le nombre de Mo d'origine qui seront transformés en sortie. (Taux d'entrée * = SortieMB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### Enlèvement

Il a besoin du nom du fluide en entrée, le nom du fluide en sortie.

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```