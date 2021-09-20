# 遍历

The IterableAnnotation can be applied to a class to allow ZS Iterating over it.  
There are three kinds of IterableAnnotations:

- `@IterableSimple` (需要实现 `Iterable`)
- `@IterableList` (需要实现 `List`)
- `@IterableMap` (需要实现 `Map`)

## Beispiel

[CraftTweaker 的 IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
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

[MCOreDict (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

    }
```

## 在 ZS 中如何使用？

```zenscript
for oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## 什么类可以被注解 || 额外信息

You can annotate all classes that implement the required interface.  
You need to provide a String value that refers to the Iterated [ZenScript's class name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).