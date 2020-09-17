# Załączniki P2P

### Importowanie

```zenscript
importu.applied iedenergistics2.Attunement;
```

### Przypisywanie elementu

Dostosuj IItemStack lub ModID do określonego typu P2P-Tunnelu. ModID są używane jako awaryjne kiedy nie znaleziono IItemStack.

### ME P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("aktualnieadditions");
```

### Element P2P

```zenscript
Attunement.attuneItem(IItemStack IItemStack);
Attunement.attuneItem(String modID);
```

### Płynny P2P

```zenscript
Attunement.attuneFluid(IItemStack IItemStack);
Attunement.attuneFluid(String modID);
```

### Czerwony Kamień P2P

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

### Jasny P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```