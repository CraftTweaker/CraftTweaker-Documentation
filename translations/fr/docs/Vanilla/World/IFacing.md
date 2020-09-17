# IFacing

L'interface IFacing vous permet d'obtenir les directions possibles d'un [IBlockPoss](/Vanilla/World/IBlockPos/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IFac ;`

## Énumérations

L'interface face a 7 méthodes statiques, chacune retournant cette direction.  
Le dernier prend la direction en entrée de chaîne (par exemple `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## ZenGetters/ZenMethods sans paramètres

| ZenGetter | Méthode Zen | Type de retour       |
| --------- | ----------- | -------------------- |
| Nom       | getName()   | chaîne de caractères |
| rotateY   | rotateY()   | IFacing              |
| opposé    | opposé()    | IFacing              |

## Autres méthodes

### Comparer deux faces

Vous pouvez comparer deux faces en utilisant le standard comparant les Opérateurs `== ! < > <= >=`  
Alternativement, vous pouvez utiliser la fonction, même si la fonction retourne un entier égal à 0.

```zenscript
//Renvoie vrai ou faux
facingOne == facingTwo;

//Renvoie 0 s'ils sont égaux
facingOne.compare(facingTwo);
```