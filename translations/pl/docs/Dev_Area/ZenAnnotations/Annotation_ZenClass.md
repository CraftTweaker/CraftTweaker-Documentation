# ZenClass

ZenClass jest klasą java, która została wystawiona na działanie ZenScript.

## Przykład

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
publiczny interfejs IItemStack rozszerza IIngredient {
    //Wycięcie, aby zachować krótką stronę
}
```

Faktyczna realizacja nie musi być opatrzona uwagami.

## Jakie klasy mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie klasy Java
- Powinieneś nadać adnotację wartość ciągu (np. `crafttweaker.item.IItemStack`). To będzie wewnętrzna nazwa ZS dla klasy.
- Po ogłoszeniu klasy ZenClass, nadal musisz ją zarejestrować. Zaleca się, abyś użył [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) do tego