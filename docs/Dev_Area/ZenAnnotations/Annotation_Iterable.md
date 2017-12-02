# Iterable

The IterableAnnotation can be applied to a class to allow ZS Iterating over it.  
There are three kinds of IterableAnnotations:  

- `@IterableSimple` (needs to implement `Iterable`)
- `@IterableList` (needs to implement `List`)
- `@IterableMap` (needs to implement `Map`)

## Example
[CraftTweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)
```
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict.IOreDictEntry")
@ZenRegister
public interface IOreDict extends Iterable<IOreDictEntry> {

    
    @ZenMemberGetter
    @ZenOperator(OperatorType.INDEXGET)
    @ZenMethod
    IOreDictEntry get(String name);

    @ZenGetter("entries")
    List<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType.CONTAINS)
    @ZenMethod
    boolean contains(String name);
}
```

[MCOreDict (implementation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)
```
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

    }
```

## How would that be useable in ZS?
```
for oreDictEntry in oreDict {
	print(oreDictEntry.name);
}
```


## What Classes can be annotated || Additional Info
You can annotate all classes that implement the required interface.  
You need to provide a String value that refers to the Iterated [ZenScript's class name](ZenClass).