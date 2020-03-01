# Iterable

Аннотации для перечисляемых типов могут быть применены к классу, чтобы ZS мог перебирать их.  
Есть три вида аннотаций Iterable:

- `@IterableSimple` (класс должен реализовывать `Iterable`)
- `@IterableList` (класс должен реализовывать `List`)
- `@IterableMap` (класс должен реализовывать `Map`)

## Пример

[IOreDict из CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

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

[MCOreDict (реализация)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

    }
```

## Как это используется в ZS?

```zenscript
for oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## Какие классы могут быть аннотированы || Дополнительная информация

Вы можете аннотировать все классы, реализующие необходимый интерфейс.  
Вы должны предоставить значение String, ссылающееся на [имя класса ZenScript](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).