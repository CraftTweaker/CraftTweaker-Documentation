# Перечисляемые объекты

Аннотации перечисляемости могут быть применимы к классу, чтобы ZS мог проходить по ним.  
Есть три вида аннотаций перечисляемости:

- `@IterableSimple` (класс должен реализовывать `Iterable`)
- `@IterableList` (класс должен реализовывать `List`)
- `@IterableMap` (класс должен реализовывать `Map`)

## Пример

[IOreDict из CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

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
    

[MCOreDict (реализация)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

        @Override
        public Iterator<IOreDictEntry> iterator() {
            return Arrays.asList(OreDictionary.getOreNames())
                    .stream()
                    .map(CraftTweakerMC::getOreDict)
                    .iterator();
    
        }
    

## Как это будет полезно в ZS?

    for oreDictEntry in oreDict {
        print(oreDictEntry.name);
    }
    

## Какие классы могут быть аннотированы || Дополнительная информация

Вы можете аннотировать все классы, реализующие необходимый интерфейс.  
Вы должен предоставить значение String, ссылающееся на [имя класса ZenScript](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).