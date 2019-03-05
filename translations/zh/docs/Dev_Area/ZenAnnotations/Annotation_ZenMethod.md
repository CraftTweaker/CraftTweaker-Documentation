# ZenMethod

ZenMethod 是暴露给 ZenScript 的 Java 方法。

静态方法可以被通过 [ZenClass 类名](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)使用，非静态的方法使用 `object.methodName(arguments,..);`。  
ZenMethod 注解可以与其他[注解](/Dev_Area/ZenAnnotations/ZenAnnotation/)同时存在，例如 [ZenOperator 注解](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)。

## 什么方法可以被注解 || 额外信息

- 你可以注解所有的方法，包括静态的和非静态的。 
- 在 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) 中注解的方法需要一个额外参数。 该参数是此扩展类 Class 实例
- 注解在 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) 中的静态方法（例如工厂方法）时你需要使用 [ZenMethodStatic](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/)。

## 实例类

    @ZenClass(value = "crafttweaker.tests.devWikiTest")
    @ZenRegister
    public class DevWikiTest {
    
        //statics which will be called using crafttweaker.tests.devWikiTest.methodName(arguments);
        @ZenMethod
        public static DevWikiTest staticMethod(int arg1) {
            return new DevWikiTest(arg1);
        }
    
        @ZenMethod
        public static void staticMethod2() {
            CraftTweakerAPI.logInfo("staticMethod2 called!");
        }
    
        @ZenMethod
        public static void staticMethodVarArg(int... args) {
            CraftTweakerAPI.logInfo("staticMethod3 called with " + args.length + " arguments");
        }
    
    
    
        //nonstatics which sill be called using instance.methodName(arguments);
        @ZenMethod
        public int getValue() {
            return value;
        }   
    
        @ZenMethod
        public void print() {
            CraftTweakerAPI.logInfo("DevWikiTest Object with value " + value);
        }
    
        @ZenMethod
        public void printWithVarArg(int... args) {
            CraftTweakerAPI.logInfo("Nonstatic called with " + args.length + " arguments");
        }
    
    
        private final int value;
    
        public DevWikiTest(int value) {
            this.value = value;
        }
    }
    

ZS 脚本

    val instance = crafttweaker.tests.devWikiTest.staticMethod(10);
    crafttweaker.tests.devWikiTest.staticMethod2();
    crafttweaker.tests.devWikiTest.staticMethodVarArg(10);
    crafttweaker.tests.devWikiTest.staticMethodVarArg(10,20,30,40);
    
    print(instance.getValue());
    instance.print();
    instance.printWithVarArg(10);
    instance.printWithVarArg(10,20,30,40);