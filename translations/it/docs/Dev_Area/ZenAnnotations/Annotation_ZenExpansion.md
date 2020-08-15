# ZenExpansion

Una ZenExpansion è, come [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), utilizzata per annotare una classe che dovrebbe essere accessibile dall'interno di ZS.  
A differenza di ZenClasses, tuttavia, ZenExpansions sono utilizzati per espandere le funzionalità di ZenClasses già esistenti.

## Esempio

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKK: " + stack.getDisplayName());
    }
}
```

Questo permetterebbe alle persone di fare

```zenscript
<minecraft:iron_ingot>.print();
```

Poiché si tratta di un'espansione, il primo parametro è l'istanza della classe!  
Questo parametro non sarà disponibile in ZS.

## Quali classi possono essere annotati <unk> <unk> Ulteriori informazioni

- Tutti i Metodi devono iniziare con un parametro che rappresenta l'istanza della classe espansa. Inoltre, tutti i metodi all'interno dell'espansione devono essere statici (... e pubblico).
- Puoi annotare tutte le classi di Java
- È necessario dare all'annotazione un valore Stringa (ad esempio `crafttweaker.item.IItemStack`). Questo valore Stringa deve rappresentare un nome ZenClass' già esistente.
- Dopo aver dichiarato una classe a ZenExpansion, devi ancora registrarla. Si consiglia di utilizzare [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) per questo.