# Projectile

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.Projectile;
```


## Extending Entity

Projectile extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in Projectile

## Metodi

:::group{name=getEffectSource}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Projectile.getEffectSource() as Entity

myProjectile.getEffectSource();
```

:::

:::group{name=getOwner}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Projectile.getOwner() as Entity

myProjectile.getOwner();
```

:::

:::group{name=setOwner}

Return Type: void

```zenscript
Projectile.setOwner(entity as Entity) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::


## Proprietà

| Nome         | Tipo                                                         | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ------------------------------------------------------------ | --------- | --------- | ----------------------- |
| effectSource | [Entity](/vanilla/api/entity/Entity)                         | sì        | no        | No Description Provided |
| owner        | [Projectile](/vanilla/api/entity/type/projectile/Projectile) | sì        | sì        | No Description Provided |

