# Facoltativo

`@Optional` può essere dato ad un parametro Metodo per dichiararlo facoltativo.  
Parametri opzionali possono essere omessi quando si chiama il metodo:

## Esempio

[CraftTweaker's IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager (Attuazione)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient output, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");

        recipesToRemove. dd(new ActionFurnaceRemoveRecipe(output, input));
}
```

Tecnicamente, non hai bisogno del `@Optional` nell'implementazione, ma puoi aggiungerlo se vuoi essere sicuro. Ora puoi chiamare questo metodo usando uno o due:

```java
furnace.remove(output); //Input sarà impostato su null
furnace.remove(output, input);
```

## Quali valori vengono inseriti per i parametri omessi?

### Usare solo l'annotazione

Inserito è `0`, `falso` o `null`, a seconda del tipo annotato:

I primitivi saranno `0` (tranne il bool, che sarà falso, così tecnicamente 0 come pure)  
Tutti gli Oggetti saranno `null`

### Usare i membri dell'annotazione

| Membro      | Tipo            | Valore predefinito |
| ----------- | --------------- | ------------------ |
| valore      | stringa         | `""`               |
| methodClass | java.lang.Class | `Optional.class`   |
| methodName  | stringa         | `"getValue"`       |

L'annotazione opzionale supporta anche i valori predefiniti.  
Se vuoi fornire un valore predefinito, puoi farlo dando al `valore` membro una Stringa che rappresenta il parametro.

Se vuoi solo un primitivo predefinito, allora sei impostato.

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI. ogError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

Se vuoi un oggetto predefinito o un primitivo predefinito che non sia una costante compiletime (tutti i membri annotazione devono essere costanti compiletime! , è possibile impostare gli altri due membri: Questo sostituirà il parametro con una chiamata al metodo (statico) dato `methodClass. ethodName(value)`. Se non viene trovato un metodo simile, si errore e si inserisce null.

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value. etDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## Quali parametri possono essere annotati?

Tutti i parametri possono essere annotati, ma è necessario ricordare che i parametri annotati devono essere alla fine, quindi, mentre questo funzionerebbe tecnicamente, le chiamate di metodo falliranno:

```java
myMethod(@Optional String name, int number)
```

Chiamare questo metodo con solo un int fallirà sempre!