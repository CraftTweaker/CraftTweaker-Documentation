# Outil DropTableBuilder

DropTableBuilder est utilisé pour créer des chaînes de "drops" pour les minerais et les échantillons qui prennent en charge le dépôt de plusieurs piles d'objets à la fois, les piles qui contiennent plus d'un élément, et les gouttes pondérées.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.DropTableBuilder ;`

## Méthodes

Ces méthodes permettent la création et la modification d'une table drop . Toutes les méthodes du constructeur retournent le constructeur sur lequel elles ont été exécutées, permettant de chaîner les méthodes.

| Nom de la méthode | Libellé                                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| nouvelleSlot()    | Crée une nouvelle table de dépôt si elle est exécutée statiquement ou ajoute un nouvel emplacement à la table de dépôt. |
| addItem()         | Ajoute l'élément spécifié à l'emplacement actuel de la table de dépôt.                                                  |
| enableFortune()   | Permet à la fente actuelle de bénéficier de l'enchantement de fortune.                                                  |

### Utilisation:

#### `nouvelleSlot()`

DropTableBuilder.newSlot() créera un nouveau constructeur. \<builder\>.newSlot() finalisera le créneau actuel et en démarrera un nouveau.

#### `addItem(String itemStr[, int weight[, int count]])`

`itemStr` peut être un nom d'élément comme \<mod\>:\<item\>:\<meta\>, une entrée de dictionnaire de minerai comme oredict:\<entry\>, ou le mot vide. `poids` contrôle la probabilité que l'élément soit abandonné en utilisant la formule \<item weight\>/\<sum of item weights within slot\>. Valeur par défaut à 1 si omise. `count` est le nombre de points qui tombent si sélectionné. Valeur par défaut à 1 si omise.

#### `enableFortune()`

Les emplacements qui ont une fortune activée sélectionneront un certain nombre d'objets supplémentaires de l'emplacement jusqu'au niveau de fortune utilisé. Correspond au comportement de la fortune vanilla sur les emplacements qui n'ont qu'un seul élément.

## Exemples utilisant le constructeur

### Création d'une table de dépôt

```zenscript
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

Cette table tomberait 2 diamants (10 %) ou 1 charbon (90 %) bénéficiant de fortune, 1 pierre (100 %), et 1 pierre (50 %).

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   .addItem("minecraft:lapis_lazuli", 1, 4)
                   .addItem("minecraft:lapis_lazuli", 1, 5)
                   .addItem("minecraft:lapis_lazuli", 1, 6)
                   .addItem("minecraft:lapis_lazuli", 1, 7)
                   .addItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

Cette table à gouttes imite les lapis à la vanille, en lâchant 4-8 lapis et en profitant de fortune.

### Utiliser une table de dépôt

Les constructeurs sont utilisés en les assignant comme valeur de données "drops". Puisque les valeurs de données n'acceptent que des chaînes, le constructeur sera converti en chaîne de caractères en utilisant sa méthode toString.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable);
complexData.addDataValue("drops",complextable+lapistable);
```

Lorsque 2 constructeurs sont ajoutés ensemble, une nouvelle table est créée avec les slots des deux tables.