# 遍历

遍历注解可被应用于允许 ZS 遍历的类。  


- `@IterableSimple` (需要实现 `Iterable`)
- `@IterableList` (需要实现 `List`)
- `@IterableMap` (需要实现 `Map`)

## 比如：

[CraftTweaker 的 IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

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
    

[MCOreDict (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

        @Override
        public Iterator<IOreDictEntry> iterator() {
            return Arrays.asList(OreDictionary.getOreNames())
                    .stream()
                    .map(CraftTweakerMC::getOreDict)
                    .iterator();
    
        }
    

## How would that be useable in ZS?

    for oreDictEntry in oreDict {
        print(oreDictEntry.name);
    }
    

## What Classes can be annotated || Additional Info

You can annotate all classes that implement the required interface.  
You need to provide a String value that refers to the Iterated [ZenScript's class name](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).