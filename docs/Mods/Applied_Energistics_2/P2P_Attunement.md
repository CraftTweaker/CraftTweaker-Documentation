#P2P Attunement

### Importing

```
import mods.appliedenergistics2.Attunement;
```

### Attuning ItemStack
Attune a ItemStack or ModID to a specific P2P-Tunnel type. ModID's are used as fallback when no ItemStack was found.

### ME P2P
```
Attunement.attuneME(ItemStack itemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("actuallyadditions");
```

### Item P2P
```
Attunement.attuneItem(ItemStack itemStack);
Attunement.attuneItem(String modID);
```

### Fluid P2P
```
Attunement.attuneFluid(ItemStack itemStack);
Attunement.attuneFluid(String modID);
```

### Redstone P2P
```
Attunement.attuneRedstone(ItemStack itemStack);
Attunement.attuneRedstone(String modID);
```

### RF P2P
```
Attunement.attuneRF(ItemStack itemStack);
Attunement.attuneRF(String modID);
```

### EU P2P
```
Attunement.attuneIC2(ItemStack itemStack);
Attunement.attuneIC2(String modID);
```

### Light P2P
```
Attunement.attuneLight(ItemStack itemStack);
Attunement.attuneLight(String modID);
```

