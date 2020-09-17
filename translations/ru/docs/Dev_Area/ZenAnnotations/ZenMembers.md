# ZenMembers и ZenProperties

Члены ZenMembers являются членами ZenObject.  
Они могут быть доступны с помощью `объектов.Member`. Участники могут быть установлены, gettable или и то и другое.

## Геттеры и Сеттеры

Есть два типа ZenGetters: ZenGetters и ZenMemberGetters.  
Так что разница?

Обычно вы используете `@ZenGetter(значение)`, если у вас есть что-то, которое имеет много участников, которые возвращают один и тот же тип или если вы не знаете точного участника самостоятельно.  
В этом случае вы можете использовать `@ZenMemberGetter`.  
Так что в чем разница?

- Метод с аннотированным `@ZenGetter(value)` не требует никаких параметров, в то время как метод, аннотированный с помощью `@ZenMemberGetter` нуждается в String аргументе, который является именем участника.
- MemberGetters выполняются только в том случае, если другой получатель не найден.
- Если вам нужна только одна небольшая собственность, вы должны использовать `@ZenGetter(value)`

То же самое относится и к ZenSetters/ZenMemberSetters.

## ЗенСобственность

`@ZenProperty` сочетает в одном аннотации `@ZenGetter(value)` и `@ZenSetter` .  
Эта аннотация может быть применена только к публичным полям (например, `публичное название строки`).

В этой аннотации могут быть эти аргументы:

- `Строковое значение`: имя свойства (в ZS вы вызываете object.value). В случае неуказания имя поля используется.
- `Получатель строк`: название соответствующего метода Getter (который может не иметь аннотации ZenGetter). 
    - Если не задано, или `""`, он будет использовать 
        - `получить + значение` , если аннотированное поле не является логическим
        - `+ значение` если аннотированное поле логическое или логическое значение
    - если `null`, он не будет зарегистрировать ZenSetter
- `String setter`: название соответствующего метода установки (который не может иметь аннотации ZenSetter). 
    - Если не задано, или `""`, будет использоваться `набор + значение`
    - Если `null`, он не будет зарегистрировать ZenSetter

Вы даже не можете использовать метод getter/setter всегда, если вы используете `@ZenProperty`.  
Если вы используете эти методы, то вам нужно добавить `@ZenMethod` , если вы хотите эту функциональность, если вы пропустите методы, они будут сгенерированы автоматически.

## Примеры

### Пример ZenGetters

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
    

### Пример ZenProperties

[Контент-Tweaker MCAxAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    публичный класс MCAxisAlignedBB реализует ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            this. inX = minX;
        }
    
    ...
    
    }