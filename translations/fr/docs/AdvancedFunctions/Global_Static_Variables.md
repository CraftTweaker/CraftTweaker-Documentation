# Variables globales et statiques

Bien sûr, vous avez été dans la situation où vous avez déclaré la même variable dans chaque script.  
"Pourquoi n'y a-t-il pas de moyen de les rendre disponibles dans chaque script?" Est-ce que ce qui a traversé votre tête à de tels moments.

Soyez soulagé maintenant car il ya été ajouté un moyen de déclarer et d'accéder aux valeurs globales et scriptbound (statiques) !  
Ils ne peuvent cependant pas être changés.

## Différence entre statiques et globales

Les deux, statiques et globales sont liés par script et instanciés avant que le script ne soit exécuté.  
Les deux ne peuvent pas être changés.  
La différence est comment ils sont appelés :  
Les globaux peuvent être appelés de partout simplement par leur nom sauf si vous avez déjà une variable locale qui a le même nom.  
Par contre, les statistiques doivent utiliser la [référence de cross-script](/AdvancedFunctions/Cross-Script_Reference/) pour être accessibles.

Les globaux sont créés en utilisant le mot clé `global` .  
Les statistiques sont créées en utilisant le mot clé `statique`.

A part cela, ils sont identiques!

## Déclarer une valeur globale

Déclarer une valeur globale est aussi simple que de déclarer une valeur locale:

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

Ok, brisons-le, allons-nous?

1. `mot-clé global` qui indique la déclaration d'une valeur globale
2. `myGlobalValue` le nom de la valeur
3. `en tant que IItemStack` le type de la valeur (il est recommandé de [importer](/AdvancedFunctions/Import/) les types avant de convertir la variable)
4. `= <minecraft:dirt>;` initialisation de la valeur. Comme les valeurs globales sont définitives, vous devez les initialiser tout en les déclarant !

## Mots de conseil

- Vous ne pouvez accéder qu'aux globales qui ont déjà été déclarées. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Les globaux ne peuvent pas être déclarés dans des scripts qui se trouvent dans des sous-répertoires ! Il compilera mais vous resterez avec une énorme exception FieldNotFound .
- Bien qu'il soit techniquement possible d'omettre la partie `en tant que partie` , il est recommandé de le laisser dedans car l'interface IAny n'est pas encore entièrement fonctionnelle. De plus, cela rend votre déclaration plus claire pour les personnes qui lisent/déboguent votre script !
- Variables locales/valeurs CAN éclipser les variables globales. Le script recherchera toujours les variables les plus à l'intérieur et ira vers l'extérieur jusqu'à ce qu'il atteigne le niveau global lors de la recherche de mots-clés !