# Iteralne

Adnotacja IterableAnnotation może być zastosowana do klasy, aby umożliwić ZS Itering nad nim.  
Istnieją trzy rodzaje IterableAnnotations:

- `@IterableSimple` (wymaga implementacji `Iterable`)
- `@IterableList` (wymaga implementacji `List`)
- `@IterableMap` (wymaga implementacji `Mapa`)

## Przykład

[IOreDict CraftTweakera](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict. OreDictEntry")
@ZenRegister
publiczny interfejs IOreDict extends Iterable<IOreDictEntry> {


    @ZenMemberGetter
    @ZenOperator(OperatorType. NDEXGET)
    @ZenMethod
    IOreDictEntry get(nazwa ciągu);

    @ZenGetter("entries")
    Lista<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType. ONTAINS)
    @ZenMethod
    zawiera: (nazwa ciągu);
}
```

[MCOreDict (implementacja)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## W jaki sposób byłoby to użyteczne w ZS?

```zenscript
dla oreDictEntry w oreDict {
    print(oreDictEntry.name);
}
```

## Jakie klasy mogą być opatrzone || Dodatkowe informacje

Możesz opatrzyć wszystkie klasy, które zaimplementują wymagany interfejs.  
Musisz podać wartość ciągu, która odnosi się do nazwy klasy Iterated [ZenScript](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).