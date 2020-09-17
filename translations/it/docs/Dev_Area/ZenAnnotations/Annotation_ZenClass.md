# ZenClass

Una classe ZenClass è una classe java che è stata esposta a ZenScript.

## Esempio

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
public interface IItemStack extends IIngredient {
    //Cut out to keep the page short
}
```

L'effettiva attuazione non deve essere annotata.

## Quali classi possono essere annotati <unk> <unk> Ulteriori informazioni

- Puoi annotare tutte le classi di Java
- Dovresti dare all'annotazione un valore Stringa (ad esempio `crafttweaker.item.IItemStack`). Questo sarà il nome interno ZS per la classe.
- Dopo aver dichiarato una classe a ZenClass, devi ancora registrarla. Si consiglia di utilizzare [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) per questo