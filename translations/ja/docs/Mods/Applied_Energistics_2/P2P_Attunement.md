# P2P調整

### インポート中

```zenscript
import mods.appledenergistics2.Attunement;
```

### Attuning item

特定のP2PトンネルタイプにIItemStackまたはModIDを接続します。 ModIDは、IItemStackが見つからなかった場合にフォールバックとして使用されます。

### ME P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("actuallyadditions");
```

### アイテムP2P

```zenscript
Attunement.attuneItem(IItemStack IItemStack);
Attunement.attuneItem(String modID);
```

### 流体P2P

```zenscript
Attunement.attuneFluid(IItemStack IItemStack);
Attunement.attuneFluid(String modID);
```

### レッドストーン P2P

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

### ライト P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```