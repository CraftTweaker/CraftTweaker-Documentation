# Iterabile

L'IterableAnnotation può essere applicato a una classe per consentire l'Iterazione ZS su di essa.  
Ci sono tre tipi di IterableAnnotations:

- `@IterableSimple` (deve implementare `Iterable`)
- `@IterableList` (deve implementare `List`)
- `@IterableMap` (deve implementare `Mappa`)

## Esempio

[ArtigianatoTweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict. OreDictEntry")
@ZenRegister
public interface IOreDict extends Iterable<IOreDictEntry> {


    @ZenMemberGetter
    @ZenOperator(OperatorType. NDEXGET)
    @ZenMethod
    IOreDictEntry get(nome stringa);

    @ZenGetter("entries")
    List<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType. ONTAINS)
    @ZenMethod
    booleano contiene(nome stringa);
}
```

[MCOreDict (implementazione)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## Come potrebbe essere utilizzabile in ZS?

```zenscript
for oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## Quali classi possono essere annotati <unk> <unk> Ulteriori informazioni

È possibile annotare tutte le classi che implementano l'interfaccia richiesta.  
È necessario fornire un valore Stringa che si riferisce al nome di classe di ZenScript [Iterato.](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).