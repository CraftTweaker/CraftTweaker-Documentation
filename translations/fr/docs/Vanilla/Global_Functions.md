# Fonctions globales

Les fonctions globales sont des fonctions qui peuvent être appelées sans être [importées](/AdvancedFunctions/Import/).  
Voici la liste :

## imprimé

Affiche la chaîne dans le log crafttweaker sous forme d'informations.

```zenscript
//print(String message);
print("Hello World!");
```

Ne retourne rien

## Total des actions

```zenscript
//totalActions();
totalActions();
```

Retourne une int qui montre combien de fonctions globales sont enregistrées.

## enableDebug

Active le mode débogage.  
Il est préférable d'utiliser le [Préprocesseur de débogage](/AdvancedFunctions/Preprocessors/DebugPreprocessor/).

```zenscript
//enableDebug();
enableDebug();
```

Ne retourne rien

## isNull

Vérifie si un objet donné est nul.  
Ne fonctionne pas sur les primitives !

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Returns a boolean Note: If this does not work for you, try casting the object to bool `<minecraft:dirt> as bool`

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Renvoie un entier

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Renvoie un entier

## pow

```zenscript
//pow(double nombre1, double nombre2);
pow(2.0, 4.0);
```

Renvoie un double

## Champs globaux

Accéde au Gestionnaire des [ ItemUtils](/Vanilla/Utils/IItemUtils/)</td> </tr> 

</tbody> </table>