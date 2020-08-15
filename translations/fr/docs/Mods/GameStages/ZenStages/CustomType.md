# Types personnalisés

Les types personnalisés sont un nouveau moyen puissant pour vous de créer vos propres éléments *personnalisés* à mettre en scène. Essentiellement ce que cela vous permet de faire est, dire par exemple de mettre en place un événement depuis Minecraft ou de mettre en scène une liste de blocs pour empêcher un joueur d'interagir ou de casser. L'utilisation des [Événements](/Vanilla/Events/IEventManager/) fournis par CraftTweaker. Cela vous donne la possibilité de verrouiller plus de choses. Créer une expérience personnalisée complète dans le jeu sans avoir besoin de mods supplémentaires. Comme tout ce dont vous avez besoin est ZenStages et CraftTweaker semble plutôt cool, hein?

This is a still a fairly new system and *may* have some bugs. Si vous en remarquez une, veuillez les signaler à [Notre dépôt](https://github.com/DarkPacks/ZenStages/issues) pour que nous puissions y jeter un coup d'œil !

Note : Il s'agit d'un type personnalisé complet que rien ne vérifiera en interne. Vous devrez créer et écouter les [Événements](/Vanilla/Events/IEventManager/) pour appeler les méthodes fournies dans [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) pour effectuer les vérifications. Donc le nom *slug/name* que vous utilisez pour le type, vous devrez noter quelque part pour savoir ce que fait quoi.

Remarque : C'est également un standard recommandé que vous utilisez des noms uniques pour **tous vos** types personnalisés.

## Importation du paquet

`Importer mods.zenstages.type.CustomStageType;`

## Comment les créer

Les types personnalisés sont créés via [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) en utilisant la méthode suivante.

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Une fois que vous avez créé le Type Personnalisé, vous pouvez maintenant assigner ce Type à une [Étape](/Mods/GameStages/ZenStages/Stage/). En appelant ce qui suit.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Comment effectuer une vérification vers un type personnalisé

Cette méthode nécessite que vous ayez défini un stage à un type. En utilisant la méthode ci-dessus. Sinon, il renvoie null.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Cette méthode ne nécessite pas un type personnalisé pour être *staged* à une étape.

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```