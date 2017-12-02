# ZenMembers and ZenProperties

ZenMembers are a ZenObject's members.  
They can be accesses using `object.member`.
Members can be settable, gettable or both.

## Getters and Setters

There are two Types of ZenGetters: ZenGetters and ZenMemberGetters.  
So what's the difference?

Normally you use `@ZenGetter(value)`, unless you have something which has either many members that return the same type or if you don't know the exact members yourself.  
In that case you can use `@ZenMemberGetter`.  
So what's the difference?

- A Method annotated with a `@ZenGetter(value)` does not need any parameters, while a Method annotated with `@ZenMemberGetter` needs a String argument that is the member's name.
- MemberGetters are only executed if no other getter is found.
- If you only need one small Property, you should use `@ZenGetter(value)`

The same applies for ZenSetters/ZenMemberSetters.



## ZenProperty

The `@ZenProperty` combines both, `@ZenGetter(value)` and `@ZenSetter` in one annotation.  
This annotation can only be applied to public fields (e.g. `public String name`).  

This Annotation can have these arguments:

- `String value`: the property name (in ZS you call object.value). If omitted, the field name is used.
- `String getter`: the name of the corresponding Getter Method (which may not have a ZenGetter Annotation).
    - If not set or `""`, it will use use 
        - `get + value` if the annotated field is not a boolean
        - `is + value` if annotated field is boolean or Boolean
    - if `null`, it will not register a ZenSetter
- `String setter`: the name of the corresponding Setter Method (which may not have a ZenSetter Annotation).
    - If not set or `""`, it will use `set + value`
    - If `null`, it will not register a ZenSetter


**The important thing with ZenProperties is, that you still need to declare setter/getter Methods, you just don't have to give them `@ZenProperty`**



## Examples
### ZenGetters Example

[Crafttweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)
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


### ZenProperties Example

[ContentTweaker's MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)
```
@ZenRegister
@ZenClass("mods.contenttweaker.AxisAlignedBB")
public class MCAxisAlignedBB implements ICTObject<AxisAlignedBB> {
    @ZenProperty
    public double minX = 0.0;

    ...

    @ZenMethod
    public double getMinX() {
        return minX;
    }

    @ZenMethod
    public void setMinX(double minX) {
        this.minX = minX;
    }

    ...

}
```