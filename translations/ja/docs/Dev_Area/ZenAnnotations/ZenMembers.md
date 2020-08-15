# ZenMembers and ZenProperties

ZenMembers は ZenObject のメンバーです。  
`object.member` を使用してアクセスできます。 メンバーは設定、取得、または両方ができます。

## ゲッターとセッター

ZenGettersには2つのタイプがあります: ZenGettersとZenMemberGetters。  
では違いは何ですか?

Normally you use `@ZenGetter(value)`, unless you have something which has either many members that return the same type or if you don't know the exact members yourself.  
In that case you can use `@ZenMemberGetter`.  
So what's the difference?

- A Method annotated with a `@ZenGetter(value)` does not need any parameters, while a Method annotated with `@ZenMemberGetter` needs a String argument that is the member's name.
- MemberGettersは他のゲッターが見つからない場合にのみ実行されます。
- 小さなプロパティを一つだけ必要な場合は、 `@ZenGetter(value)` を使用してください。

ZenSetters/ZenMemberSettersでも同様です。

## ZenProperty

The `@ZenProperty` combines both, `@ZenGetter(value)` and `@ZenSetter` in one annotation.  
This annotation can only be applied to public fields (e.g. `public String name`).

この注釈は以下の引数を持つことができます:

- `文字列値`: プロパティ名 (ZS では object.value) を呼び出します。 省略した場合は、フィールド名が使用されます。
- `文字列取得`: 対応する Getter メソッドの名前 (ZenGetter Annotation を持たない場合があります)。 
    - If not set or `""`, it will use use 
        - `get + value` if the annotated field is not a boolean
        - `is + value` if annotated field is boolean or Boolean
    - `null`の場合、ZenSetterは登録されません
- `String setter`: 対応する Setter メソッドの名前 (ZenSetter Annotation を持たない場合があります)。 
    - If not set or `""`, it will use `set + value`
    - `null`の場合、ZenSetterは登録されません

You can even omit the getter/setter method alltogether if you use `@ZenProperty`.  
If you do use those methods, however, you will need to add `@ZenMethod` should you want this functionality, if you omit the methods, they will be generated automatically.

## 使用例

### ZenGetters の例

[CraftTweakerのIOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

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
    

### ZenProperties 例

[ContentTweakerのMCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

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