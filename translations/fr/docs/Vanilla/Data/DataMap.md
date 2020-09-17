# DataMap

Une carte, parfois aussi appelée un tableau associatif est une structure de données qui vous permet de stocker plusieurs éléments.  
Contrairement à un tableau, cependant, vous pouvez également donner à chacun de ces éléments une clé à appeler.  
Le DataMap agrandit [IData](/Vanilla/Data/IData/), donc chaque DataMap est IData, vous pourriez avoir besoin de cette information plus tard.

## Création d'une carte :

Une carte est un type spécial de [IData](/Vanilla/Data/IData/), donc au dernier moment, vous devrez importer cette interface :  
`import crafttweaker. ata.IData ;`

Vous avez peut-être remarqué qu'aucun type ne peut être converti en une carte (ni ne peut être converti en un type autre que Strings), donc il doit y avoir une autre façon de les créer!  
Il y a :

```zenscript
import crafttweaker.data.IData ;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} as IData ;
```

La chose à retenir est :  
Les cartes sont traitées comme `Carte<String,IData>`!  
Cela signifie que vos clés ne doivent pas contenir de caractères que les chaînes CT normales ne peuvent gérer.  
Cela signifie également que si la clé est une chaîne, la valeur est un autre objet [IData](/Vanilla/Data/IData/) .  
Vous pouvez même imbriquer des cartes à l'intérieur des cartes (c'est ce que font beaucoup de NBT-Data):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "Bonjour"
                    }
                } en tant qu'IData;
```

## Récupération des membres

Malheureusement, les cartes créées comme ci-dessus sont immuables, vous ne pouvez donc pas changer leurs membres.  
Pour récupérer un membre de la carte, vous devez connaître son nom de clé. Ensuite, vous pouvez faire ceci:

```zenscript
val mySecondMap = {key1: "value1",
                   clé2: "value2",
                   clé3: 3} comme IData ;

//Récupère le membre appelé "key1"
var k1 = mySecondMap. ey1 comme IData ;
print(k1.asString());

//Récupère le membre appelé "key2"
var k2 = mySecondMap.memberGet("key2") comme IData ;
print(k2.asString());
```

## Modifier les cartes

Vous pouvez ajouter ou soustraire des cartes les unes des autres pour obtenir une nouvelle carte avec des valeurs modifiées.  
Cela fonctionne même pour les cartes imbriquées !

```zenscript
val map1 as IData = {
    key1 : "hello"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

print((map1 + map2). sString()); //Imprime {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
    key1 : "two",
    key2 : "two",
    key3 : "three"
};

print((map3 - "key1"). sString()); //Imprime {key2 : "two", key3 : "three"}

val map4 as IData = {
    key3 : "anything"
};

print((map3 - map4). sString()); //Imprime {key1 : "two", key2 : "two"}
```