# Harmonisation P2P

### Importation en cours

```zenscript
Importer mods.appliedenergistics2. Attunement;
```

### Objet en cours d'assemblage

Attachez un IItemStack ou un ModID à un type de tunnel P2P spécifique. Les ModID sont utilisés comme valeur de secours quand IItemStack n'a pas été trouvé.

### ME P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("actuallyadditions");
```

### Élément P2P

```zenscript
Attunement.attuneItem(IItemStack IItemStack);
Attunement.attuneItem(String modID);
```

### Fluide P2P

```zenscript
Attunement.attuneFluid(IItemStack IItemStack);
Attunement.attuneFluid(String modID);
```

### Redstone P2P

```zenscript
Attunement.attuneRedstone(IItemStack IItemStack);
Attunement.attuneRedstone(String modID);
```

### P2P RF

```zenscript
Attunement.attuneRF(IItemStack IItemStack);
Attunement.attuneRF(String modID);
```

### EU P2P

```zenscript
Attunement.attuneIC2(IItemStack IItemStack);
Attunement.attuneIC2(String modID);
```

### Lumière P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```