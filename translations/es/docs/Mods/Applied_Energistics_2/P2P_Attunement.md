# P2P Attunement

### Importing

```zenscript
import mods.appliedenergistics2.Attunement;
```

### Attuning Item

Attune an IItemStack or ModID to a specific P2P-Tunnel type. ModID's are used as fallback when no IItemStack was found.

### ME P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("actuallyadditions");
```

### Item P2P

```zenscript
Attunement.attuneItem(IItemStack IItemStack);
Attunement.attuneItem(String modID);
```

### Fluid P2P

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

### Light P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```