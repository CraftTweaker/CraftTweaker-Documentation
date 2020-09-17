# MCFluid

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Interfaces implémentées
MCFluid implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### format@@0 makeStack

Crée un nouveau [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) avec la quantité de liquide donnée.

 Renvoie : `un nouveau (immuable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(montant comme int);
myMCFluid.makeStack(1000);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| montant   | Indice        | Aucune description fournie |



## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |

## Opérateurs
### MUL

Crée un nouveau [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) avec la quantité de liquide donnée.

 Renvoie : `un nouveau (immuable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * montant en int
myMCFluid * 1000
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| montant   | Indice        | Aucune description fournie |

