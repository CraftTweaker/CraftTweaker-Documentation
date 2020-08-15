# ILiquidStack

Une LiquidStack se compose d'une [définition de liquides](/Vanilla/Liquids/ILiquidDefinition/) ainsi que d'une balise optionnelle et d'une valeur de montant optionnelle.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.liquid.ILiquidStack ;`

## Créer une ILiquidStack

Un ILiquidStack peut être créé en utilisant le [Gestionnaire de pont de liquides](/Vanilla/Brackets/Bracket_Liquid/)

```zenscript
//voir Le gestionnaire d'équerre de liquides pour plus d'informations
de lave val = <liquid:lava>;

//liquide. ithTag(Tag as IData)
Vente lavaWithTag = <liquid:lava>. ithTag(DATA) ;

//liquide * quantité en milliseaux (-> 1000 = 1 Seau)
Vent lavaWithAmount = <liquid:lava> * 1000;
```

## Obtenir les propriétés du fluide

Comme un ILiquidStack représente un liquide, il doit également y avoir un moyen de récupérer les propriétés du fluide.  
Vérifiez la table pour voir ce que vous pouvez récupérer de l'objet ILiquidStack en utilisant ZenGetters.

| Zengetter      | Qu'est-ce que c'est?                                              | Type de retour                                            | Exemple                                   |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| Nom            | Renvoie le nom du liquide non localisé                            | chaîne de caractères                                      | `test = <liquid:lava>.name;`        |
| nomdeaffichage | Retourne le nom du liquide localisé                               | chaîne de caractères                                      | `test = <liquid:lava>.displayName;` |
| montant        | Retourne le montant de l'objet ILiquidObject                      | Indice                                                    | `test = <liquid:lava>.amount;`      |
| luminosité     | Cela renvoie la luminosité du liquide référencé                   | Indice                                                    | `test = <liquid:lava>.luminosité;`  |
| densité        | Cela renvoie la densité du liquide référencé                      | Indice                                                    | `test = <liquid:lava>.density;`     |
| température    | Cela retourne la température du liquide référencé                 | Indice                                                    | `test = <liquid:lava>.temperature;` |
| viscosité      | Cela renvoie la viscosité du liquide référencé                    | Indice                                                    | `test = <liquid:lava>.viscosity;`   |
| gazeux         | Cela revient si le liquide référé est gazeux                      | boolean                                                   | `test = <liquid:lava>gazeux ;`      |
| Étiquette      | Cela retourne la balise ILiquidObject                             | [IData](/Vanilla/Data/IData/)                             | `test = <liquid:lava>.tag;`         |
| Définition     | Cela renvoie la définition du liquide référencé (voir ci-dessous) | [Définition ILiquid](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition ;` |

# Implémentaion IIngredient

Java Jargon: ILiquidStack implémente IIngredient. In other words, all methods that can be used in [IIngredients](/Vanilla/Variable_Types/IIngredient/) can also be used for ILiquidStacks Refer to the IIngredient entry for further information on this. Voici quelques cas spéciaux, car les liquides ne sont pas des objets

* Vous ne pouvez pas marquer ILiquidStacks, et vous obtenez null de vous essayer de récupérer une marque ILiquidStack
* .items renvoie une liste vide
* .itemArray retourne un tableau vide
* .liquids retourne ce liquide en ILiquidStack (donc exactement cet objet)
* LiquidStacks ne peut pas avoir de transformateurs et demander que les transformateurs retournent toujours faux
* LiquidStacks ne peut pas avoir de conditions (.only ne fonctionne pas)
* La correspondance avec les éléments renvoie toujours faux