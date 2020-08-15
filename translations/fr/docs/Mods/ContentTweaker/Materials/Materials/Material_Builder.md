# Constructeur de matériaux

Si vous voulez construire un [matériau](/Mods/ContentTweaker/Materials/Materials/Material/), vous aurez besoin d'un constructeur de matériaux !  
Ne sonne pas si dur, n'est-ce pas?

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.MaterialBuilder ;`

## Récupération d'un tel objet

Vous pouvez récupérer un nouveau constructeur en utilisant le Pack [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Définir les propriétés du Matériel

Vous pouvez définir ces propriétés

| Méthode Zen                       | Paramètre                                                        |
| --------------------------------- | ---------------------------------------------------------------- |
| nomdeset(nom)                     | nom de la chaîne                                                 |
| setColor(color)                   | int couleur                                                      |
| setColor(color)                   | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| format@@0 setHasEffect(hasEffect) | booléen hasEffect                                                |

Toutes ces Méthodes font 2 choses: premièrement, elles changent la Propriété du constructeur, deuxièmement, elles retournent le constructeur modifié.  
Vous pouvez voir dans les exemples de scripts ci-dessous ce que cela signifie.

## Construire le Matériel

Avant de pouvoir construire votre matériel, vous devez le construire :

```zenscript
mBuilder.build();
```

Cela retourne un objet [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/).

## Exemple de script

```zenscript
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```