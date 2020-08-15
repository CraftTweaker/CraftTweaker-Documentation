# P2P-Attunement

### Importieren

```zenscript
importieren mods.appliedenergistics2.Attunement;
```

### Befestige Element

Schließen Sie einen IItemStack oder ModID an einen bestimmten P2P-Tunnel-Typ. ModIDs werden als Fallback verwendet, wenn kein IItemStack gefunden wurde.

### ME P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("eigentliche");
```

### Artikel P2P

```zenscript
Attunement.attuneItem(IItemStack IItemStack);
Attunement.attuneItem(String modID);
```

### Flüssiges P2P

```zenscript
Attunement.attuneFluid(IItemStack IItemStack);
Attunement.attuneFluid(String modID);
```

### Redstone P2P

```zenscript
Attunement.attuneRedstone(IItemStack IItemStack);
Attunement.attuneRedstone(String modID);
```

### RF P2P

```zenscript
Attunement.attuneRF(IItemStack IItemStack);
Attunement.attuneRF(String modID);
```

### EU P2P

```zenscript
Attunement.attuneIC2(IItemStack IItemStack);
Attunement.attuneIC2(String modID);
```

### Helles P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```