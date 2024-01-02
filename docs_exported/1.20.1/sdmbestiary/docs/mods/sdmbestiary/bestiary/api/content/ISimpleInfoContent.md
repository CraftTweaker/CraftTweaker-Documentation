# ISimpleInfoContent&LT;T : ISimpleInfoContent&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.ISimpleInfoContent;
```


## Implemented Interfaces
ISimpleInfoContent implements the following interfaces. That means all methods defined in these interfaces are also available in ISimpleInfoContent

- [IInfoContent](/mods/sdmbestiary/bestiary/api/content/IInfoContent)

## Methods

:::group{name=addPos}

Return Type: [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;T&gt;

```zenscript
ISimpleInfoContent.addPos(x as int, y as int) as ISimpleInfoContent<T>
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |


:::

:::group{name=getX}

Return Type: int

```zenscript
// ISimpleInfoContent.getX() as int

myISimpleInfoContent.getX();
```

:::

:::group{name=getY}

Return Type: int

```zenscript
// ISimpleInfoContent.getY() as int

myISimpleInfoContent.getY();
```

:::

:::group{name=setParent}

```zenscript
ISimpleInfoContent.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=setPos}

Return Type: [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;T&gt;

```zenscript
ISimpleInfoContent.setPos(x as int, y as int) as ISimpleInfoContent<T>
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |


:::

:::group{name=setSize}

```zenscript
ISimpleInfoContent.setSize(w as int, h as int)
```

| Parameter | Type |
|-----------|------|
| w         | int  |
| h         | int  |


:::


