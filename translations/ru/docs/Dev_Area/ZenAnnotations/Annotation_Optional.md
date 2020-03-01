# Optional

Параметр метода может быть помечен как `@Optional`, чтобы объявить его необязательным.  
Необязательные параметры могут быть опущены при вызове этого метода:

## Пример

[IFurnaceManager из CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager (реализация):](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient output, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");

        recipesToRemove.add(new ActionFurnaceRemoveRecipe(output, input));
    }
```

Технически, вам не нужно добавлять `@Optional` в реализации, но можете добавить, если хотите удостовериться. Теперь вы можете вызвать этот метод еще одним способом:

```java
furnace.remove(output); //в качестве input будет передан null
furnace.remove(output, input);
```

## Какие значения вставляются для опущенных параметров?

### При использовании только аннотации

Вставляемое значение может быть `0`, `false` или `null`, в зависимости от помеченного типа:

Примитивы получат значение `0` (за исключением `boolean`, который получит значение `false`, так что технически тоже 0)  
Все объекты будут `null`.

### Использование параметров аннотации

| Параметр    | Тип             | Значение по умолчанию |
| ----------- | --------------- | --------------------- |
| value       | string          | `""`                  |
| methodClass | java.lang.Class | `Optional.class`      |
| methodName  | string          | `"getValue"`          |

Аннотация Optional также поддерживает значения по умолчанию.  
Если хотите предоставить его, можете сделать это, передав это значение параметру `value` как строку.

Если хотите примитив по умолчанию, вы задаете.

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI.logError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. If no such method is found, will error and insert null.

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value.getDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## Какие параметры можно отметить?

Можно пометить все параметры, но нужно помнить, что эти параметры должны быть в конце. Технически такой вызов возможен, но он бесполезен:

```java
myMethod(@Optional String name, int number)
```

Вызов этого метода только с целым числом всегда будет провальным!