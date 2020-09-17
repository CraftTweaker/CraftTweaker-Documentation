# ZenMembers et ZenProperties

Les ZenMembers sont les membres d'un ZenObject.  
Ils peuvent être accédés en utilisant `object.member`. Les membres peuvent être réglables, obtenables ou les deux.

## Getters et Setters

Il y a deux types de ZenGetters : ZenGetters et ZenMemberGetters.  
Alors, quelle est la différence ?

Normalement, vous utilisez `@ZenGetter(value)`, sauf si vous avez quelque chose qui a soit un grand nombre de membres qui retournent le même type ou si vous ne connaissez pas les membres exacts.  
Dans ce cas, vous pouvez utiliser `@ZenMemberGetter`.  
Alors, quelle est la différence ?

- Une méthode annotée avec un `@ZenGetter(value)` n'a pas besoin de paramètres, alors qu'une méthode annotée avec `@ZenMemberGetter` a besoin d'un argument String qui est le nom du membre.
- MemberGetters ne sont exécutés que si aucun autre getter n'est trouvé.
- Si vous n'avez besoin que d'une petite propriété, vous devez utiliser `@ZenGetter(value)`

Il en va de même pour les ZenSetters/ZenMemberSetters.

## Propriété Zen

La `@ZenProperty` combine les deux, `@ZenGetter(valeur)` et `@ZenSetter` en une seule annotation.  
Cette annotation ne peut être appliquée qu'aux champs publics (par exemple `nom public de chaîne`).

Cette annotation peut avoir ces arguments :

- `Valeur de chaîne`: le nom de la propriété (en ZS, vous appelez object.value). Si omis, le nom du champ est utilisé.
- `Récupération de chaîne`: le nom de la méthode Getter correspondante (qui peut ne pas avoir d'annotation ZenGetter). 
    - S'il n'est pas défini ou `""`, il utilisera 
        - `get + valeur` si le champ annoté n'est pas un booléen
        - `est + valeur` si le champ annoté est booléen ou booléen
    - si `null`, il n'enregistrera pas un ZenSetter
- `String setter`: le nom de la méthode de règlement correspondante (qui ne peut pas avoir d'annotation ZenSetter). 
    - Si non défini ou `""`, il utilisera `set + value`
    - Si `null`, il n'enregistrera pas de ZenSetter

Vous pouvez même omettre complètement la méthode getter/setter si vous utilisez `@ZenProperty`.  
Si vous utilisez ces méthodes, cependant, vous devrez ajouter `@ZenMethod` si vous voulez cette fonctionnalité, si vous omettez les méthodes, elles seront générées automatiquement.

## Exemples

### Exemple ZenGetters

[format@@0 CraftTweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

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
    

### Exemple de propriétés Zen

[MCAxisAlignedBB du ContentTweaker](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    de classe publique MCAxisAlignedBB implémente ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            ceci. inX = minX;
        }
    
    ...
    
    }