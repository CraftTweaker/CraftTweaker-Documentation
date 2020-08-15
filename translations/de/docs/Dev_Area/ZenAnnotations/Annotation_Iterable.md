# Unwiderruflich

Die IterableAnnotation kann auf eine Klasse angewendet werden, um ZS Iterieren zu erlauben.  
Es gibt drei Arten von IterableAnnotationen:

- `@IterableSimple` (muss `Iterable` implementieren)
- `@IterableList` (muss `Liste` implementieren)
- `@IterableMap` (muss `Karte` implementieren)

## Beispiel

[CraftTweakers IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict. OreDictEntry")
@ZenRegister
public interface IOreDict extends Iterable<IOreDictEntry> {


    @ZenMemberGetter
    @ZenOperator(OperatorType. NDEXGET)
    @ZenMethod
    IOreDictEntry get(String name);

    @ZenGetter("Einträge")
    Liste<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType. ONTAINS)
    @ZenMethod
    boolesche enthalten(Stringname);
}
```

[MCOreDict (Implementation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## Wie wäre das in ZS nützlich?

```zenscript
für oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## Welche Klassen können kommentiert werden || Zusätzliche Informationen

Sie können alle Klassen kommentieren, die die benötigte Schnittstelle implementieren.  
Sie müssen einen String-Wert angeben, der auf den eingegebenen [Klassennamen von ZenScript verweist,](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).