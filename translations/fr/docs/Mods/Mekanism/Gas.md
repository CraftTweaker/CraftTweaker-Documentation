# Mékanisme

Le support du Mékanism CraftTweaker a été intégré directement au Mékanisme maintenant ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Le mékanisme ajoute le support du bracket-handler pour définir **gaz** -- un état de matériau spécial différent de la forge [**liquides**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Notant que `<gas:water>` est différent de `<liquid:water>`*

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir tous les gaz enregistrés (y compris ceux provenant d'autres mods) via la commande `/ct gases`

Il est également possible à partir du Mékanism 9.7.1 d'obtenir un gestionnaire de piles de gaz/brackets par chaîne. Utiliser `mods.mekanism.MekanismHelper.getGas(string);`

## Exemple

```zenscript
import mod.mekanism.gas.IGasStack ;

var oxygen = <gas:oxygen>.withAmount(500) en IGasStack ;
var oxygen2 = <gas:oxygen> * 500 ;
```

## ZenGetters

Comme LiquidStacks, IGasStacks supporte également certains ZenGetters spéciaux.  
Vous appelez les ZenGetters en utilisant `gas.Getter` (par exemple. `<gas:water>.name`)

| ZenGetter      | Libellé                                 | Type de retour           |
| -------------- | --------------------------------------- | ------------------------ |
| Définition     | Renvoie la définition du gaz            | Définition IGasformat@@0 |
| NOM            | Renvoie le nom du gaz                   | chaîne de caractères     |
| nomdeaffichage | Renvoie le nom d'affichage du gaz       | chaîne de caractères     |
| montant        | Renvoie le montant du gaz en milliseaux | Indice                   |

## Définition du montant de l'objet

Vous pouvez définir la quantité de l'objet (volume de gaz dans Millibuckets) de deux manières, qui font tous les deux exactement la même chose :

```zenscript
var gas_amount_multiply = <gas:water> * 500 ;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## Définition IGasformat@@0

Un objet IGasDefinition contient des informations sur un gaz.  
Vous pouvez obtenir un tel objet en utilisant `gasStack.definition` (vérifiez le tableau ci-dessus)

| ZenGetter      | Libellé                                     | Type de retour       |
| -------------- | ------------------------------------------- | -------------------- |
| NOM            | Renvoie le nom du gaz référencé             | chaîne de caractères |
| nomdeaffichage | Renvoie le nom d'affichage du gaz référencé | chaîne de caractères |

Vous pouvez multiplier une définition de gaz pour retourner une nouvelle IGasStack avec le montant donné en millions:

```zenscript
var gas_definition = <gas:water>.definition ;
var gas_bucket = gas_definition * 1000 ;
```