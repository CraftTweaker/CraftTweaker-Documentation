# Optionnel

`@Optionnel` peut être donné à un paramètre de méthode pour le déclarer comme étant optionnel.  
Les paramètres facultatifs peuvent être omis lors de l'appel de la méthode :

## Exemple

[IFurnaceManager de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional Igredient input);
```

[MCFurnaceManager (Implémentation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient sortie, @Optional IIngredient input) {
        if(sortie == null)
            throw new IllegalArgumentException("la sortie ne peut pas être null");

        recettes à supprimer. dd(new ActionFurnaceRemoveRecipe(output, input));
}
```

Techniquement, vous n'avez pas besoin du `@Optional` dans l'implémentation, mais vous pouvez l'ajouter si vous voulez être sûr. Vous pouvez maintenant appeler cette méthode en utilisant l'une ou l'autre :

```java
furnace.remove(output); //Entrée sera réglée à null
furnace.remove(output, input);
```

## Quelles sont les valeurs insérées pour les paramètres omis ?

### Utiliser uniquement l'annotation

Inséré est soit `0`, `false` ou `null`, selon le Type annoté :

Les primitifs seront `0` (sauf bool, qui sera faux, donc techniquement 0 aussi)  
Tous les objets seront `nuls`

### Utilisation des membres d'annotation

| Membre            | Type de texte        | Valeur par défaut |
| ----------------- | -------------------- | ----------------- |
| valeur            | chaîne de caractères | `""`              |
| classe de méthode | java.lang.Class      | `Optional.class`  |
| Nom de la méthode | chaîne de caractères | `"getValue"`      |

L'annotation optionnelle supporte également les valeurs par défaut.  
Si vous voulez fournir une valeur par défaut, vous pouvez le faire en donnant à la valeur `` membre une Chaîne représentant le paramètre.

Si vous voulez seulement une primitive par défaut, alors vous êtes défini.

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

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. Si aucune méthode de ce type n'est trouvée, une erreur et l'insertion de null.

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value. etDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## Quels paramètres peuvent être annotés ?

Tous les paramètres peuvent être annotés, mais vous devez vous rappeler que les paramètres annotés doivent être à la fin, alors que cela fonctionnerait techniquement, les appels à la méthode échouent :

```java
myMethod(@Optional String name, int number)
```

Appeler cette méthode avec seulement une int échouera toujours!