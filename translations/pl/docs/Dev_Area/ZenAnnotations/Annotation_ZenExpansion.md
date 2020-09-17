# ZenRozwijanie

ZenExpansion jest, jak [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), używany do adnotacji klasy, która powinna być dostępna w ZS.  
W przeciwieństwie jednak do ZenClasses ZenExpansions są używane do rozszerzenia funkcjonalności już istniejących ZenClasses.

## Przykład

```java
@ZenExpansion("crafttweaker.itemem. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKK: " + stack.getDisplayName());
    }
}
```

Pozwoliłoby to ludziom robić

```zenscript
<minecraft:iron_ingot>.print();
```

Ponieważ jest to rozszerzenie pierwszy parametr jest instancją klasy!  
Ten parametr nie będzie dostępny w ZS.

## Jakie klasy mogą być opatrzone || Dodatkowe informacje

- Wszystkie metody muszą zaczynać się od parametru, który reprezentuje rozszerzenie klasy. Ponadto wszystkie metody wewnątrz rozszerzenia muszą być statyczne (... i publicznie).
- Możesz opatrzyć wszystkie klasy Java
- Musisz nadać adnotację wartość ciągu (np. `crafttweaker.item.IItemStack`). Ta wartość ciągu musi reprezentować już istniejącą nazwę ZenClassa.
- Po ogłoszeniu klasy ZenExpansion, nadal musisz ją zarejestrować. Zaleca się, abyś użył do tego [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/).