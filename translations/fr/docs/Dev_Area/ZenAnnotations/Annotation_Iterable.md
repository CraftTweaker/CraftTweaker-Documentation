# Itérable

L'IterableAnnotation peut être appliquée à une classe pour permettre l'itération ZS par-dessus.  
Il y a trois types d'IterableAnnotations :

- `@IterableSimple` (nécessite d'implémenter `Iterable`)
- `@IterableList` (nécessite d'implémenter `Liste`)
- `@IterableMap` (nécessite d'implémenter `Carte`)

## Exemple

[format@@0 CraftTweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
@ZenClass("crafttweaker.oredict.IOreDict")
@IterableSimple("crafttweaker.oredict. OreDictEntry")
@ZenRegister
l'interface publique IOreDict étend Iterable<IOreDictEntry> {


    @ZenMemberGetter
    @ZenOperator(OperatorType. NDEXGET)
    @Méthode Zen
    get(nom de chaîne de caractères) IOreDictEntry ;

    @ZenGetter("entrées")
    Liste<IOreDictEntry> getEntries();

    @ZenOperator(OperatorType. ONTAINS)
    @ZenMethod
    conteneur booléen (nom de chaîne de caractères);
}
```

[MCOreDict (implémentation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    itator public<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## Comment cela serait-il utilisable en ZS ?

```zenscript
pour oreDictEntry dans oreDict {
    print(oreDictEntry.name);
}
```

## Quelles classes peuvent être annotées || Informations supplémentaires

Vous pouvez annoter toutes les classes qui implémentent l'interface requise.  
Vous devez fournir une valeur String qui fait référence au [nom de classe ZenScript Iter](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).