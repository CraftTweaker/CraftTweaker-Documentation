# Constructeur d'élément

Le constructeur d'objet est pour... construire des objets (surprise!) <p> Il vous permet de définir différentes propriétés qui changeront le comportement de l'élément et ce qu'il peut faire. Vous pouvez également utiliser [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) pour passer à un constructeur plus spécialisé, s'il y en a. <p> Pour dire à CoT que vous voulez que l'élément apparaisse en jeu, vous devez appeler [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) et spécifiez un chemin d'emplacement de ressource valide.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.item.Constructeur d'élément
```

## Interfaces implémentées
ItemBuilder implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructeurs
Crée un nouveau constructeur d'éléments. N'oubliez pas que cela ne fera _pas_ créer un nouveau bloc dans le jeu, vous devez appeler [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) pour cela.
```zenscript
nouvel élément mods.contenttweaker.item.Constructeur d'élément();
```

## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |


### avec un groupe d'articles

Vous permet de définir le groupe d'articles dans lequel cet élément apparaîtra. Par défaut, les objets débarqueront dans `Divers`

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.Constructeur d'objets](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Paramètre      | Type de texte                                                                     | Libellé                                                         |
| -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Groupe d'items | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Le groupe d'articles dans lequel cet élément devrait apparaître |


### Avec un maximum de dégâts

Vous permet de définir les dégâts maximaux pour cet élément.<br/> Soyez averti que cela ne peut pas être utilisé en combinaison avec [mods.contenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.Constructeur d'objets](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
Nouvel ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Paramètre | Type de texte | Libellé                       |
| --------- | ------------- | ----------------------------- |
| maxDamage | Indice        | La taille maximale de la pile |


### Avec MaxStackSize

Vous permet de définir la taille maximale de la pile pour cet élément.<br/> Soyez averti que cela ne peut pas être utilisé en combinaison avec [mods.contenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.Constructeur d'objets](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
Nouveau ItemBuilder().withMaxStackSize(maxStackSize comme int);
new ItemBuilder().withMaxStackSize(16);
```

| Paramètre    | Type de texte | Libellé                       |
| ------------ | ------------- | ----------------------------- |
| maxStackSize | Indice        | La taille maximale de la pile |


### sans réparation

Définit que cet élément ne peut pas être réparé dans une enclume Retours: `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.Constructeur d'objets](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
Nouvel ItemBuilder().sans réparation();
```

### avec rareté

Vous permet de définir la rareté de l'objet

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.Constructeur d'objets](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Paramètre | Type de texte        | Libellé   |
| --------- | -------------------- | --------- |
| rareté    | Chaîne de caractères | La rareté |


### avec type

Définit le type spécifique de cet élément. Après que cette méthode soit appelée le contexte du constructeur passera au constructeur de type le plus fourni. Cela signifie que les méthodes de ce constructeur ne seront plus disponibles, donc toutes les propriétés que vous souhaitez définir doivent être définies avant d'appeler cette méthode. Renvoie : `Un constructeur avec l'élément donné.`

Type de retour: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.Outil ItemBuilder>();
```

| Nom du paramètre | Limites                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------- |
| TT               | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


