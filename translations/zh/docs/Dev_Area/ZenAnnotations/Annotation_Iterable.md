# 遍历

遍历注解可被应用于允许 ZS 遍历的类。  


- `@IterableSimple` (需要实现 `Iterable`)
- `@IterableList` (需要实现 `List`)
- `@IterableMap` (需要实现 `Map`)

## 比如：

[CraftTweaker 的 IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweeper.oredict.IORDict")
@IterableSimple("craftmiliner.oredict. OreDictEntry")
@ZenRegistry
公共接口IOreDict extensive Iterable<IOreDictEntry> ~


    @ZenMemberGetter
    @ZenOperator(OperatorType) NDEXGET
    @ZenMethod
    IOreDictEntry get(String name);

    @ZenGetter("条目")
    List<IOreDictEntry> getEntries();

    @ZenOperator(运营商类型) ONTAINS
    @ZenMethod
    boolian contains(String name);
}
```

[MCOreDict (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @override
    public Iterator<IOreDictEntry> iterator() format@@
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweeperMC:::getOreDict)
                .iterator();

}
```

## 在 ZS 中如何使用？

```zenscript
为oreDictEntry in oreDict 然后再打印
    (oreDictEntry.name);
}
```

## 什么类可以被注解 || 额外信息

你可以注解所有实现了对应接口的类。  
你需要提供一个字符串值以引用被遍历的[ZenScript的类名](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).