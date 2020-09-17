# IFluidStack

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Interfaces implémentées
IFluidStack implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### Copie

Copie la pile. Nécessaire uniquement lorsque des piles mutables sont impliquées.

 Renvoie : `Une nouvelle pile, qui contient les mêmes informations que celle-ci`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutable

Rend cette pile mutable

 Renvoie : `Une nouvelle pile, qui est mutable.`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Définit la quantité de fluide en MilliBuckets (MB)

 Retourne : `Une nouvelle pile, ou cette pile, selon que cette pile est mutable`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Paramètre | Type de texte | Libellé                                       |
| --------- | ------------- | --------------------------------------------- |
| montant   | Indice        | Le montant de la multiplication de cette pile |



## Propriétés

| Nom                | Type de texte                                                | A un Getter | A un Setter |
| ------------------ | ------------------------------------------------------------ | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères                                         | vrai        | Faux        |
| fluide             | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | vrai        | Faux        |

## Opérateurs
### MUL

Définit la quantité de fluide en MilliBuckets (MB)

 Retourne : `Une nouvelle pile, ou cette pile, selon que cette pile est mutable`

```zenscript
myIFluidStack * montant en int
myIFluidStack * 1000
```

| Paramètre | Type de texte | Libellé                                       |
| --------- | ------------- | --------------------------------------------- |
| montant   | Indice        | Le montant de la multiplication de cette pile |

